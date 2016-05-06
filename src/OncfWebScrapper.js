var HttpHelper = require('./HttpHelper.js')
var Data = require('./VRA_VRD')

// return an array of matches on the html
function GetMatches(pattern,html)
{
  return html.match(pattern)
}

// Get Index of the city on the citys.txt file . and use it to Get VRA and VRD
function FindIndex(city) {
  var fs = require('fs')
  var citys = fs.readFileSync("../src/Citys.txt").toString().split('\n')

  for (var i in citys)
  {
    if (citys[i].trim() == city)
    {
      return i
    }
  }
}

function TripSchedule(departTime,arriveTime,correspond,service,gamme)
{
  this.DepartTime = departTime
  this.ArriveTime = arriveTime
  this.Correspond = correspond
  this.Service = service
  this.Gamme = gamme
}

function Trip(cityStart, cityDestination, time, date) {
  this.CityStart = cityStart
  this.CityDestination = cityDestination
  this.Time = time
  this.Date = date

  // return url that will be used in the httpRequest
  this.GetUrl = function() {
    var cityStartIndex = FindIndex(this.CityStart)
    var cityDestIndex = FindIndex(this.CityDestination)

    var cityDepart = "http://www.oncf.ma/Pages/ResultatsHoraire.aspx?depart=" + this.CityStart
    var cityDest = "&arrivee=" + this.CityDestination
    var departCodes = "&CodeRD=" + Data.GetVRD(cityStartIndex) + "&CodeGD=" + Data.GetVRA(cityStartIndex)
    var destCodes = "&CodeRA="+ Data.GetVRD(cityDestIndex) +"&CodeGA=" + Data.GetVRA(cityDestIndex)
    var time = "&heure=" + this.Time
    var date = "&date=" + this.Date

    var url = cityDepart + cityDest + departCodes + destCodes + time + date

    return url
  }

  // return a list with the Trip Schedule
  this.GetTripSchedule = function() {
    var url = this.GetUrl()
    var html = HttpHelper.GetHtml(url)

    // Get all matches on the html for example : width="90">04h20mn</td>
    var tripTimes = GetMatches(/[0-9]{2}h[0-9]{2}mn/g,html)

    // Get Trip Correspondence !
    var tripCorres = []
    var regexResult = GetMatches(/<td width="115">([-])|([A-Z ]+)<\/td>/g,html)
    for(var i in regexResult)
    {
      var index = regexResult[i].indexOf("-")
      // most of t he time the Correspondence is "-"
      if (index != -1)
      {
        tripCorres.push("-")
      }
      else // if there is a Correspondence
      {
        tripCorres.push(regexResult[i].substring(0,regexResult[i].indexOf("<")))
      }
    }

    // Get Gamme !
    var tripGamme = []
    regexResult = GetMatches(/\/pictos\/([A-Z_]+).gif/g,html)
    for (var i in regexResult)
    {
      tripGamme.push(regexResult[i].substring(regexResult[i].indexOf("tos/") + 4,regexResult[i].indexOf(".gif")))
    }

    var TripScheduleArray = []
    for(var i = 0, j = 0; i < tripTimes.length / 2; i++, j += 2)
    {
      // create a tripSchedule with a departTime - ArriveTime - Correspondence - Service - Gamme
      var tripSchedule = new TripSchedule(tripTimes[j],tripTimes[j+1],tripCorres[i],"*",tripGamme[i])
      TripScheduleArray.push(tripSchedule)
    }

    return TripScheduleArray
  }
}

// Example :

var DataPresenter = require("../OncfWebScrapper.TEST/DataPresenter.js")

// check City.txt for avaible citys
var myTrip = new Trip("CASA PORT","BOUZNIKA","0000","06/05/2016")

// Array To Hold the Schedule
var tripSchedule = myTrip.GetTripSchedule()

// Print Data
DataPresenter.Print(tripSchedule)