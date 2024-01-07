// import images
import cloudy from "../../public/img/weather-cloudy.png?url";
import clear from "../../public/img/weather-clear.png?url";
import rain from "../../public/img/weather-rain.png?url";
import drizzle from "../../public/img/weather-drizzle.png?url";
import mist from "../../public/img/weather-snow.png?url";

console.log(cloudy);
const cityInputForm = document.forms.cityInput;
console.log(cityInputForm);

cityInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInputForm.city.value;
  getWeather(city);
  cityInputForm.reset();
});

const apiKey = "f7055b8d8cb767d8652bd2f00417fc43";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";

function getWeather(city) {
  const cityName = city;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.response);

      displayWeather(responseData);
      console.log(responseData);
    }
  };
  xhttp.open("GET", `${apiUrl}&q=${cityName}&appid=${apiKey}`, true);
  xhttp.send();
}

function displayWeather(data) {
  //temprature
  document.querySelector("#temprature").textContent = `${Math.floor(
    data?.main?.temp
  )}°C`;

  //city
  document.querySelector("#cityName").textContent = `${data?.name}`;

  //Humidity
  document.querySelector("#humidity").textContent = `${data?.main?.humidity}%`;

  //wind speed
  document.querySelector(
    "#wind-speed"
  ).textContent = `${data?.wind?.speed}Km/h`;

  //display weather img
  const weatherImgEl = document.querySelector("#weather-img");
  const weather = data.weather[0]?.main;
  console.log(weather);
  switch (weather) {
    case "Clouds":
      weatherImgEl.src = cloudy;
      break;
    case "Clear":
      weatherImgEl.src = clear;
      break;
    case "Rain":
      weatherImgEl.src = rain;
      break;
    case "Drizzle":
      weatherImgEl.src = drizzle;
      break;
    case "Mist":
      weatherImgEl.src = mist;
      break;

    default:
      weatherImgEl.src = drizzle;
      break;
  }
  document.querySelector("#result").classList.remove("hidden");
}
