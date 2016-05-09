module.exports = {
  Print : function(tripData) {
    console.log("------------------------------------------------------------------------------");
    console.log("  Depart Time  |  Arrive Time  |   Correspendance  | Service |     Gamme     |");
    console.log("------------------------------------------------------------------------------");

    for (var i in tripData)
    {
      var Time = "  " + tripData[i].DepartTime + "      |" + "  " + tripData[i].ArriveTime + "      |"

      var correspendance
      if (tripData[i].Correspond == "-")
      {
        correspendance = "         -         " + "|"
      }

      var service = "    *    " + "|"

      var gamme = "     " + tripData[i].Gamme
      
      var spaceLength = 15 - gamme.length
      for(var i = 0; i < spaceLength; i++) { gamme += " " }

      gamme += "|"

      console.log(Time + correspendance + service + gamme);
      console.log("------------------------------------------------------------------------------");
    }
  }
}
