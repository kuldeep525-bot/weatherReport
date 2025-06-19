// // //api calling , function etc. used.

// let cityInput = document.getElementById("city_input");
// let searchbtn = document.getElementById("seachBtn");
// let locationbtn = document.getElementById("locationBtn");
// let currentWeathercard = document.querySelectorAll(".weather-left .card")[0];
// let fivedaysforecastcard = document.querySelector(".day-forecast");
// let aqicard = document.querySelectorAll(".highlights .card")[0];
// let aqilist = ["Good", "fair", "moderate", "poor", "verypoor"];
// let sunrise = document.getElementById("sunrise");
// let sunset = document.getElementById("sunset");
// let humidity = document.getElementById("humidityval");
// let pressure = document.getElementById("pressureval");
// let visibility = document.getElementById("visibilityval");
// let wind = document.getElementById("windval");
// let feels = document.getElementById("thermometerval");
// let hourlyforecastcard = document.querySelector(".hourly-forecast");
// let api_key = "2a60daa5623d45a1c432490fc58041a7";

// //weather-details

// function getweatherdetailes(name, lat, lon, country, state) {
//   //forecast api
//   let forecast_api_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

//   //weather api
//   (weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`),
//     //air pollution api
//     (airPolluction_api_url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`),
//     (days = [
//       "sunday",
//       "monday",
//       "tuesday",
//       "wednesday",
//       "thursday",
//       "friday",
//       "saturday",
//     ]);
//   months = [
//     "JAN",
//     "FEB",
//     "MAR",
//     "APR",
//     "MAY",
//     "JUN",
//     "JULY",
//     "AUG",
//     "SEP",
//     "OCT",
//     "NOV",
//     "DEC",
//   ];

//   //fetch air_polluction url

//   fetch(airPolluction_api_url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let { co, no, no2, so2, pm2_5, pm10, nh3, o3 } = data.list[0].components;

//       aqicard.innerHTML = `
//       <div class="card-head">
//                 <p>Air Quality Index</p>
//                 <p class="air-index aqi-${data.list[0].main.aqi}">${
//         aqilist[data.list[0].main.aqi - 1]
//       }</p>
//               </div>
//               <div class="air-indices">
//                 <img src="wind.svg" alt="wind" />
//                 <div class="item">
//                   <p>PM2.5</p>
//                   <h2>${pm2_5}</h2>
//                 </div>
//                 <div class="item">
//                   <p>PM10</p>
//                   <h2>${pm10}</h2>
//                 </div>
//                 <div class="item">
//                   <p>SO2</p>
//                   <h2>${so2}</h2>
//                 </div>
//                 <div class="item">
//                   <p>CO</p>
//                   <h2>${co}</h2>
//                 </div>
//                 <div class="item">
//                   <p>NO</p>
//                   <h2>${no}</h2>
//                 </div>
//                 <div class="item">
//                   <p>NO2</p>
//                   <h2>${no2}</h2>
//                 </div>
//                 <div class="item">
//                   <p>NH3</p>
//                   <h2>${nh3}</h2>
//                 </div>
//                 <div class="item">
//                   <p>O3</p>
//                   <h2>${o3}</h2>
//                 </div>
//               </div>
//       `;
//     })
//     .catch(() => {
//       alert("Failed to fetch air pollution data");
//     });

//   //fetch weather_api_url
//   fetch(weather_api_url)
//     .then((res) => res.json())
//     .then((data) => {
//       let date = new Date();
//       currentWeathercard.innerHTML = `
//        <div class="current-weather">
//               <div class="details">
//                 <p>Now</p>
//                 <h2>${(data.main.temp - 273.5).toFixed(2)}&deg;C</h2>
//                 <p>${data.weather[0].description}</p>
//               </div>

//               <div class="weather-icon">
//                 <img
//                   src="https://openweathermap.org/img/wn/${
//                     data.weather[0].icon
//                   }d@2x.png"
//                   alt=""
//                 />
//               </div>
//             </div>

//             <hr />
//             <div class="card-footer">
//               <p><i class="fa-solid fa-calendar"></i>${
//                 days[date.getDay()]
//               } ${date.getDate()}  ${
//         months[date.getMonth()]
//       } ${date.getFullYear()}</p>
//               <p><i class="fa-solid fa-location-dot"></i> ${name},${country}</p>
//             </div>
//       `;

//       //converted into sunrise to human readable
//       let sunriseTime = new Date(data.sys.sunrise * 1000);
//       let sunsetTime = new Date(data.sys.sunset * 1000);

//       // Format function
//       function formatTime(date) {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let ampm = hours >= 12 ? "PM" : "AM";

//         hours = hours % 12;
//         hours = hours ? hours : 12; // Convert 0 to 12
//         minutes = minutes < 10 ? "0" + minutes : minutes;

//         return `${hours}:${minutes} ${ampm}`;
//       }

//       let formattedSunrise = formatTime(sunriseTime);
//       let formattedSunset = formatTime(sunsetTime);

//       sunrise.innerHTML = `
//   <div>
//     <p>Sunrise</p>
//     <h2 style="color:white;">${formattedSunrise}</h2>
//   </div>
// `;

//       sunset.innerHTML = `
//   <div>
//     <p>Sunset</p>
//     <h2 style="color:white;">${formattedSunset}</h2>
//   </div>
// `;

//       humidity.innerHTML = `
// <div class="card-item">

//                 <h2 id="humidityval">${data.main.humidity}%</h2>
//               </div>`;

//       pressure.innerHTML = `
//       <div class="card-item">

//         <h2 id="pressureval">${data.main.pressure}hPA</h2>
//       </div>`;

//       visibility.innerHTML = `
//       <div class="card-item">

//                 <h2 id="visibilityval">${data.visibility}km</h2>
//               </div>`;

//       wind.innerHTML = `
//               <div class="card-item">
//                 <h2 id="windval">${data.wind.speed}m/s</h2>
//               </div>
//               `;

//       feels.innerHTML = `
//   <div class="card-item">
//     <h2 id="thermometerval">${(data.main.feels_like - 273.5).toFixed(2)}°C</h2>
//   </div>
// `;
//     })
//     .catch((err) => {
//       alert("Failed to fetch current weather");
//       location.reload();
//     });

//   //fetch  forecast api

//   fetch(forecast_api_url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       //hourlyforecast

//       let hourlyforecast = data.list;

//       hourlyforecastcard.innerHTML = ``;

//       for (let i = 0; i <= 7; i++) {
//         let hrforecastdate = new Date(hourlyforecast[i].dt_txt);
//         let hr = hrforecastdate.getHours();
//         let a = "PM";
//         if (hr < 12) a = "AM";
//         if (hr == 0) hr = 12;
//         if (hr > 12) hr = hr - 12;

//         let icon = hourlyforecast[i].weather[0].icon;

//         hourlyforecastcard.innerHTML += `
//     <div class="card">
//       <p>${hr} ${a}</p>
//       <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon" />
//       <p>${hourlyforecast[i].main.temp.toFixed(1)}&deg;C</p>
//     </div>`;
//       }
//       let unique_forecastdays = [];
//       let fivedaysforecast = data.list.filter((forecast) => {
//         let forecastdate = new Date(forecast.dt_txt).getDate();

//         if (!unique_forecastdays.includes(forecastdate)) {
//           return unique_forecastdays.push(forecastdate);
//         }
//       });

//       fivedaysforecastcard.innerHTML = "";
//       for (let i = 1; i < fivedaysforecast.length; i++) {
//         let date = new Date(fivedaysforecast[i].dt_txt);
//         fivedaysforecastcard.innerHTML += `
//     <div class="forecast-item">
//       <div class="icon-wrapper">
//         <img src="https://openweathermap.org/img/wn/${
//           fivedaysforecast[i].weather[0].icon
//         }.png" alt="" />
//         <span>${fivedaysforecast[i].main.temp.toFixed(1)}&deg;C</span>
//       </div>
//       <p>${date.getDate()} ${months[date.getMonth()]}</p>
//       <p>${days[date.getDay()]}</p>
//     </div>
//   `;
//       }
//     })
//     .catch(() => {
//       alert("failed to weather forecast");
//     });
// }

// // For searching the city
// function getcitycoordinates() {
//   let cityname = cityInput.value.trim();
//   if (cityname === "") {
//     alert("Please enter the city name!");
//     return; // Stop the function if input is empty
//   }

//   // Correct API call
//   let GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${api_key}`;

//   fetch(GEOCODING_API_URL)
//     .then((res) => res.json())
//     .then((data) => {
//       let { name, lat, lon, country, state } = data[0];
//       getweatherdetailes(name, lat, lon, country, state);
//     })
//     .catch((err) => {
//       alert(`Failed to fetch coordinates of ${cityname}`);
//     });
// }

// // for enter the key
// cityInput.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     getcitycoordinates();
//   }
// });

// //function for location (your location where you used this site)

// function getusercordinates() {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       let { latitude, longitude } = position.coords;
//       let reverse_GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api_key}`;

//       fetch(reverse_GEOCODING_API_URL)
//         .then((res) => res.json())
//         .then((data) => {
//           let { name, country, state } = data[0];
//           getweatherdetailes(name, latitude, longitude, country, state);
//         })
//         .catch(() => {
//           alert("Failed to fetch user coordinates");
//         });
//     },
//     (error) => {
//       if (error.code == error.PERMISSION_DENIED) {
//         alert(
//           "Geolocation permission denied. please reset location permission to grant access again"
//         );
//       }
//     }
//   );
// }

// // Add event listener
// searchbtn.addEventListener("click", getcitycoordinates);
// locationbtn.addEventListener("click", getusercordinates);

// Main DOM Elements
const cityInput = document.getElementById("city_input");
const searchBtn = document.getElementById("seachBtn");
const locationBtn = document.getElementById("locationBtn");

const currentWeatherCard = document.querySelector(".weather-left .card");
const fiveDaysForecastCard = document.querySelector(".day-forecast");
const aqiCard = document.querySelector(".highlights .card");
const hourlyForecastCard = document.querySelector(".hourly-forecast");

// Detail Fields
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const humidity = document.getElementById("humidityval");
const pressure = document.getElementById("pressureval");
const visibility = document.getElementById("visibilityval");
const wind = document.getElementById("windval");
const feels = document.getElementById("thermometerval");

const API_KEY = "2a60daa5623d45a1c432490fc58041a7";
const AQI_LIST = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// Utilities
function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
}
function displayError(message) {
  alert(message);
}

// Fetch Weather Details
function getWeatherDetails(name, lat, lon, country, state) {
  const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const airPollutionAPI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  // Fetch AQI
  fetch(airPollutionAPI)
    .then((res) => res.json())
    .then((data) => {
      const { co, no, no2, so2, pm2_5, pm10, nh3, o3 } =
        data.list[0].components;
      const aqiLevel = data.list[0].main.aqi;

      aqiCard.innerHTML = `
        <div class="card-head">
          <p>Air Quality Index</p>
          <p class="air-index aqi-${aqiLevel}">${AQI_LIST[aqiLevel - 1]}</p>
        </div>
        <div class="air-indices">
          <img src="wind.svg" alt="wind" />
          ${["PM2.5", "PM10", "SO2", "CO", "NO", "NO2", "NH3", "O3"]
            .map(
              (pollutant, i) => `
            <div class="item">
              <p>${pollutant}</p>
              <h2>${[pm2_5, pm10, so2, co, no, no2, nh3, o3][i]}</h2>
            </div>`
            )
            .join("")}
        </div>
      `;
    })
    .catch(() => displayError("Failed to fetch air pollution data"));

  // Fetch Current Weather
  fetch(weatherAPI)
    .then((res) => res.json())
    .then((data) => {
      const date = new Date();
      const tempC = (data.main.temp - 273.5).toFixed(2);
      const feelsLikeC = (data.main.feels_like - 273.5).toFixed(2);
      const weatherIcon = data.weather[0].icon;
      const description = data.weather[0].description;

      currentWeatherCard.innerHTML = `
        <div class="current-weather">
          <div class="details">
            <p>Now</p>
            <h2>${tempC}&deg;C</h2>
            <p>${description}</p>
          </div>
          <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${weatherIcon}d@2x.png" alt="" />
          </div>
        </div>
        <hr />
        <div class="card-footer">
          <p><i class="fa-solid fa-calendar"></i> ${
            DAYS[date.getDay()]
          } ${date.getDate()} ${
        MONTHS[date.getMonth()]
      } ${date.getFullYear()}</p>
          <p><i class="fa-solid fa-location-dot"></i> ${name}, ${country}</p>
        </div>
      `;

      sunrise.innerHTML = `<div><p>Sunrise</p><h2>${formatTime(
        new Date(data.sys.sunrise * 1000)
      )}</h2></div>`;
      sunset.innerHTML = `<div><p>Sunset</p><h2>${formatTime(
        new Date(data.sys.sunset * 1000)
      )}</h2></div>`;
      humidity.innerHTML = `<div class="card-item"><h2>${data.main.humidity}%</h2></div>`;
      pressure.innerHTML = `<div class="card-item"><h2>${data.main.pressure} hPA</h2></div>`;
      visibility.innerHTML = `<div class="card-item"><h2>${data.visibility} km</h2></div>`;
      wind.innerHTML = `<div class="card-item"><h2>${data.wind.speed} m/s</h2></div>`;
      feels.innerHTML = `<div class="card-item"><h2>${feelsLikeC}&deg;C</h2></div>`;
    })
    .catch(() => {
      displayError("Failed to fetch current weather");
      location.reload();
    });

  // Fetch Forecast
  fetch(forecastAPI)
    .then((res) => res.json())
    .then((data) => {
      hourlyForecastCard.innerHTML = data.list
        .slice(0, 8)
        .map((forecast) => {
          const hr = new Date(forecast.dt_txt).getHours();
          const time = formatTime(new Date(forecast.dt_txt));
          const icon = forecast.weather[0].icon;
          return `
          <div class="card">
            <p>${time}</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon" />
            <p>${forecast.main.temp.toFixed(1)}&deg;C</p>
          </div>`;
        })
        .join("");

      const seenDates = new Set();
      const fiveDayForecast = data.list.filter((f) => {
        const day = new Date(f.dt_txt).getDate();
        return seenDates.has(day) ? false : seenDates.add(day);
      });

      fiveDaysForecastCard.innerHTML = fiveDayForecast
        .slice(1)
        .map((f) => {
          const date = new Date(f.dt_txt);
          return `
          <div class="forecast-item">
            <div class="icon-wrapper">
              <img src="https://openweathermap.org/img/wn/${
                f.weather[0].icon
              }.png" alt="" />
              <span>${f.main.temp.toFixed(1)}&deg;C</span>
            </div>
            <p>${date.getDate()} ${MONTHS[date.getMonth()]}</p>
            <p>${DAYS[date.getDay()]}</p>
          </div>`;
        })
        .join("");
    })
    .catch(() => displayError("Failed to fetch weather forecast"));
}

// Get city coordinates by name
function getCityCoordinates() {
  const cityName = cityInput.value.trim();
  if (!cityName) return displayError("Please enter the city name!");

  const geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
  fetch(geoAPI)
    .then((res) => res.json())
    .then((data) => {
      const { name, lat, lon, country, state } = data[0];
      getWeatherDetails(name, lat, lon, country, state);
    })
    .catch(() => displayError(`Failed to fetch coordinates of ${cityName}`));
}

// Get user's current location
function getUserCoordinates() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const reverseGeoAPI = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
      fetch(reverseGeoAPI)
        .then((res) => res.json())
        .then((data) => {
          const { name, country, state } = data[0];
          getWeatherDetails(name, latitude, longitude, country, state);
        })
        .catch(() => displayError("Failed to fetch user coordinates"));
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        displayError(
          "Geolocation permission denied. Please allow location access."
        );
      }
    }
  );
}

// Event Listeners
searchBtn.addEventListener("click", getCityCoordinates);
locationBtn.addEventListener("click", getUserCoordinates);
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getCityCoordinates();
});
