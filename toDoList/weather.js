const API_KEY = "577bc6331a6b1e9bc95f7d413d9b419f";
const weatherImages = ["clear.jpg", "rain.jpg", "fog.jpg"];
const weatherInform = document.querySelector(".weatherImage");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      if (data.weather[0].main === "Clear") {
        weatherInform.innerHTML = "<img src=weatherimage/clear.jpg alt={} />";
      } else if (data.weather[1].main === "Rain") {
        weatherInform.innerHTML = "<img src=weatherimage/clear.jpg alt={} />";
      } else if (data.weather[2].main === "Mist") {
        weatherInform.innerHTML = "<img src=weatherimage/clear.jpg alt={} />";
      }
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
