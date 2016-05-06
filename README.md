# OncfWebScrapper

OncfWebScrapper is a tool to scrap Train Trips Schedules from http://www.oncf.ma/ .

# Example

```javascript
// i'm using this to represent the data in the terminal in form of a Table
var DataPresenter = require("../OncfWebScrapper.TEST/DataPresenter.js")

// Create a Trip - DepartCity - ArriveCity - Time . Default "0000" - Date - format "DD\MM\YYYY"
// Check Citys.txt for avaible citys
var myTrip = new Trip("AIN SEBAA","CASA PORT","0000","06/05/2016")

// Array To Hold the Schedule Result
// Eeach element in the array have -> DepartTime  - ArriveTile - Correspondence - Service - Gamme
var tripSchedule = myTrip.GetTripSchedule()

// Print Data
DataPresenter.Print(tripSchedule)
```

# Result

```
------------------------------------------------------------------------------
  Depart Time  |  Arrive Time  |   Correspendance  | Service |     Gamme     |
------------------------------------------------------------------------------
  06h20mn      |  06h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  07h20mn      |  07h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  08h20mn      |  08h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  09h20mn      |  09h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  10h20mn      |  10h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  12h20mn      |  12h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  14h20mn      |  14h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  16h20mn      |  16h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  17h20mn      |  17h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  18h20mn      |  18h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  19h20mn      |  19h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
  20h20mn      |  20h51mn      |         -         |    *    |     TNR       |
------------------------------------------------------------------------------
```


