# OncfWebScrapper

OncfWebScrapper is a tool to scrap Train Trips Schedules from http://www.oncf.ma/ .

# Install

```
npm install oncfwebscrapper
```

# How To Use

```javascript
var OncfWebScrapper = require("oncfwebscrapper")
```

# DEMO

```javascript
// import DataPresenter to present my data in a table
var DataPresenter = require("./DataPresenter.js")

// import the WebScrapper
var OncfWebScrapper = require("oncfwebscrapper")

// check City.txt for avaible citys
var myTrip = new OncfWebScrapper.Trip("CASA PORT","BOUZNIKA","0000","09/05/2016")

// Array To Hold the Schedule
var tripSchedule = myTrip.GetTripSchedule()

// Print Data
DataPresenter.Print(tripSchedule)
```

##Result

![screenshot](https://github.com/py444/OncfWebScrapper/blob/master/ScreenShot/screenshot.png "ScreenShot")

