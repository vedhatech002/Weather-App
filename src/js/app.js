const apiKey = "f7055b8d8cb767d8652bd2f00417fc43";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=vedaranyam";

function getWeather() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.response);
      console.log(responseData);
    }
  };
  xhttp.open("GET", `${apiUrl}&appid=${apiKey}`, true);
  xhttp.send();
}
getWeather();
