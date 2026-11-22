const state = {
  location: "London",
  latitude: 51.5085,
  longitude: -0.1257
};

const weatherCodes = {
  0: ["Clear sky", "☀"],
  1: ["Mainly clear", "🌤"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁"],
  45: ["Fog", "🌫"],
  48: ["Rime fog", "🌫"],
  51: ["Light drizzle", "🌦"],
  53: ["Drizzle", "🌦"],
  55: ["Heavy drizzle", "🌧"],
  61: ["Light rain", "🌦"],
  63: ["Rain", "🌧"],
  65: ["Heavy rain", "🌧"],
  71: ["Light snow", "🌨"],
  73: ["Snow", "🌨"],
  75: ["Heavy snow", "❄"],
  80: ["Rain showers", "🌦"],
  81: ["Rain showers", "🌧"],
  82: ["Heavy showers", "🌧"],
  95: ["Thunderstorm", "⛈"],
  96: ["Thunderstorm", "⛈"],
  99: ["Heavy thunderstorm", "⛈"]
};

const elements = {
  form: document.querySelector("#search-form"),
  input: document.querySelector("#search-input"),
  locationButton: document.querySelector("#location-button"),
  locationName: document.querySelector("#location-name"),
  currentDate: document.querySelector("#current-date"),
  status: document.querySelector("#weather-status"),
  icon: document.querySelector("#current-icon"),
  temp: document.querySelector("#current-temp"),
  feels: document.querySelector("#feels-like"),
  humidity: document.querySelector("#humidity"),
  wind: document.querySelector("#wind"),
  pressure: document.querySelector("#pressure"),
  forecast: document.querySelector("#forecast-list"),
  timezone: document.querySelector("#timezone"),
  toast: document.querySelector("#toast")
};

function weatherFor(code) {
  return weatherCodes[code] || ["Unknown", "🌡"];
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("visible"), 2800);
}

async function searchLocation(query) {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`);
  if (!response.ok) throw new Error("Could not search for that location.");
  const data = await response.json();
  if (!data.results || data.results.length === 0) throw new Error("Location not found.");
  const place = data.results[0];
  const region = place.admin1 ? `, ${place.admin1}` : "";
  return {
    name: `${place.name}${region}`,
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: place.timezone
  };
}

async function fetchWeather(location = state) {
  elements.forecast.innerHTML = '<p class="loading">Loading forecast...</p>';
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    timezone: "auto",
    forecast_days: "7"
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error("Weather service is unavailable.");
  const data = await response.json();
  renderWeather(data, location.name);
}

function renderWeather(data, name) {
  const current = data.current;
  const [status, icon] = weatherFor(current.weather_code);
  const date = new Date(current.time);

  elements.locationName.textContent = name || state.location;
  elements.currentDate.textContent = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(date);
  elements.status.textContent = status;
  elements.icon.textContent = icon;
  elements.temp.textContent = Math.round(current.temperature_2m);
  elements.feels.textContent = `Feels like ${Math.round(current.apparent_temperature)}°`;
  elements.humidity.textContent = `${current.relative_humidity_2m}%`;
  elements.wind.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  elements.pressure.textContent = `${Math.round(current.surface_pressure)} hPa`;
  elements.timezone.textContent = data.timezone_abbreviation || "Local time";

  elements.forecast.innerHTML = data.daily.time.map((time, index) => {
    const forecastDate = new Date(`${time}T12:00:00`);
    const day = index === 0
      ? "Today"
      : new Intl.DateTimeFormat("en", { weekday: "short" }).format(forecastDate);
    const [description, forecastIcon] = weatherFor(data.daily.weather_code[index]);
    return `
      <div class="forecast-row">
        <span class="forecast-day">${day}</span>
        <span class="forecast-icon" title="${description}">${forecastIcon}</span>
        <span class="forecast-desc">${description}</span>
        <span class="forecast-temp">${Math.round(data.daily.temperature_2m_max[index])}° <span>/ ${Math.round(data.daily.temperature_2m_min[index])}°</span></span>
      </div>
    `;
  }).join("");
}

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = elements.input.value.trim();
  if (!query) return;

  try {
    elements.input.disabled = true;
    const location = await searchLocation(query);
    state.location = location.name;
    state.latitude = location.latitude;
    state.longitude = location.longitude;
    await fetchWeather(location);
  } catch (error) {
    showToast(error.message);
  } finally {
    elements.input.disabled = false;
  }
});

elements.locationButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    showToast("Geolocation is not supported by your browser.");
    return;
  }

  elements.locationButton.disabled = true;
  navigator.geolocation.getCurrentPosition(async (position) => {
    const location = {
      name: "Your location",
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    try {
      await fetchWeather(location);
    } catch (error) {
      showToast(error.message);
    } finally {
      elements.locationButton.disabled = false;
    }
  }, () => {
    elements.locationButton.disabled = false;
    showToast("Location access was denied.");
  });
});

fetchWeather(state).catch((error) => {
  elements.locationName.textContent = "Weather unavailable";
  elements.forecast.innerHTML = '<p class="loading">Please check your connection.</p>';
  showToast(error.message);
});
