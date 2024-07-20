const wform = document.querySelector(".wform");
const cityInput = document.querySelector(".city-input");
const stateInput = document.querySelector(".state-input");
const countryInput = document.querySelector(".country-input");
const note = document.getElementById("note");
const card = document.querySelector(".card");
const api = "4dd712765926b7c66e7f5b37f6b81589";

wform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;
  const state = stateInput.value;
  const country = countryInput.value;

  if (city) {
    try {
      const weatherdata = await getWeatherData(city, state, country);
      displayWeatherData(weatherdata);
    } catch (error) {
      console.error(error);
      displayerror(error.message);
    }
  } else {
    displayerror("Please enter a city");
  }
});

async function getWeatherData(city, state, country) {
  let query = `q=${city}`;
  if (state) query += `,${state}`;
  if (country) query += `,${country}`;
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${api}&units=metric`;

  const response = await fetch(apiurl);

  if (!response.ok) {
    note.textContent = `Make sure to spell correctly`;
    throw new Error("Could not fetch data");
  }
  return await response.json();
}

function displayWeatherData(data) {
  const cityname = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const weatherId = data.weather[0].id;
  const emoji = getweatheremoji(weatherId);
  const climateMessage = getClimateMessage(temperature, weatherId);

  card.querySelector(".cityname").textContent = cityname;
  card.querySelector(".temperater").textContent = `${temperature}°C`;
  card.querySelector(".description").textContent = description;
  card.querySelector(".emoji").textContent = emoji;
  card.querySelector(".climate-message").textContent = climateMessage;

  card.style.display = "block";
}

function getweatheremoji(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "⛈️";
  } else if (weatherId >= 300 && weatherId < 500) {
    return "🌧️";
  } else if (weatherId >= 500 && weatherId < 600) {
    return "🌦️";
  } else if (weatherId >= 600 && weatherId < 700) {
    return "❄️";
  } else if (weatherId >= 700 && weatherId < 800) {
    return "🌫️";
  } else if (weatherId === 800) {
    return "☀️";
  } else if (weatherId > 800) {
    return "☁️";
  } else {
    return "❓";
  }
}

function getClimateMessage(temperature, weatherId) {
  if (weatherId >= 200 && weatherId < 600) {
    return "Bad weather, stay safe!";
  } else if (weatherId >= 600 && weatherId < 700) {
    return "Moderate weather, dress warmly!";
  } else if (weatherId >= 700 && weatherId < 800) {
    return "Moderate weather, drive carefully!";
  } else if (weatherId === 800 && (temperature < 0 || temperature > 35)) {
    return "Extreme temperature, take precautions!";
  } else {
    return "Good weather, enjoy your day!";
  }
}

function displayerror(message) {
  const errodisplay = document.createElement("p");
  errodisplay.textContent = message;
  errodisplay.classList.add("errordisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.append(errodisplay);
}
