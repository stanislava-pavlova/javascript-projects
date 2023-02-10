const body = document.querySelector('body');
const searchBtn = document.querySelector('#searchBtn');
const searchBar = document.querySelector('#searchBar');

const weather = document.querySelector('.weather');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temp');
const iconImg = document.querySelector('.icon');
const descrip = document.querySelector('.description');
const humid = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

function search() {
  fetchWeather(searchBar.value);
}

function fetchWeather(city) {
  const apiKey = '49cc8c821cd2aff9af04c9f98c36eb74';

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => {
      alert('No weather information found in your city');
    });
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  city.innerText = `Weather in ${name}`;
  temperature.innerText = temp.toFixed() + '°C';
  descrip.innerText = description;
  humid.innerText = `Humidity: ${humidity}%`;
  wind.innerText = `Wind speed: ${speed} km/h`;

  iconImg.src = 'https://openweathermap.org/img/wn/' + icon + '.png';

  //Generates a random photo from the passed city
  body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
}

fetchWeather('Plovdiv');

searchBtn.addEventListener('click', search);
searchBar.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    search();
  }
});
