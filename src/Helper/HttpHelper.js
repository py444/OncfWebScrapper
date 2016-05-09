var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
var httpRequest = new XMLHttpRequest()

module.exports = {

  // return html as a string from the Url
  GetHtml : function(url) {
    httpRequest.open("GET",url,false)
    httpRequest.send()

    // readyState 4 : request finished and response is ready
    if (httpRequest.status == 200 && httpRequest.readyState == 4)
    {
      return httpRequest.responseText
    }

    console.log("ERROR !")
  }
}
