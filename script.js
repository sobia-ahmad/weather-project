// https://api.openweathermap.org/data/2.5/weather?q=$Edinburgh&units=metric&appid=$73b3dc969e9f5735a2989576a34ff684
// API key: 73b3dc969e9f5735a2989576a34ff684

// Grabbing weather elements

let cityEl = document.querySelector('.city');
let temperatureEl = document.querySelector('.temperature');
let iconEl = document.querySelector('.icon');
let descriptionEl = document.querySelector('.description');
let countryCodeEl = document.querySelector('.country-code');
let humidityEl = document.querySelector('.humidity');
let cloudsEl = document.querySelector('.clouds');
let latitudeEl = document.querySelector('.latitude');
let longitudeEl = document.querySelector('.longitude');

let weather = {
  
  apiKey: '73b3dc969e9f5735a2989576a34ff684',

  // Fetching weather
  getWeather: function(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
      .then((response) => {
        if (!response.ok) {
          alert('Sorry, no weather information could be found.');
          throw new Error('Sorry, no weather information could be found.');
        }
        return response.json();
      })
      // .then((data) => console.log(data));
      .then((data) => this.showWeather(data));
  },
  // Outputting weather
  showWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { country } = data.sys;
    const { temp, humidity } = data.main;
    const { all } = data.clouds;
    const { lat, lon } = data.coord;

    cityEl.innerText = `Current weather in ${name}`;
    temperatureEl.innerText = `${temp}°C`;
    iconEl.src = `https://openweathermap.org/img/wn/${icon}.png`;
    descriptionEl.innerText = description;
    countryCodeEl.innerText = `Country Code: ${country}`;
    humidityEl.innerText =`Humidity: ${humidity}%`;
    cloudsEl.innerText = `Clouds: ${all}`;
    latitudeEl.innerText = `Latitude: ${lat}`;
    longitudeEl.innerText = `Longitude: ${lon}`;
  },

  // Searching weather
  searchWeather: function () {
    this.getWeather(document.querySelector('.search-bar').value);
  },
};

// Events for click and keyup
document.querySelector('.search-button').addEventListener('click', function () {
  weather.searchWeather();
});

document.querySelector('.search-bar'),
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      weather.searchWeather();
    }
  });

  weather.getWeather('Edinburgh');


