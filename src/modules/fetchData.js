export default function fetchData(city, american) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=5589a5b1b0f545c1a04164843240304&q=${city}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((weather) => {
      const weatherData = weather.current;
      const wth = {
        temperature: american ? weatherData.temp_f : weatherData.temp_c,
        feelsLike: american ? weatherData.feelslike_f : weatherData.feelslike_c,
        precipation: american ? weatherData.precip_in : weatherData.precip_mm,
        humidity: weatherData.humidity,
        icon: weatherData.condition.icon,
        windSpeed: american ? weatherData.wind_mph : weatherData.wind_kph,
        pressure: american ? weatherData.pressure_in : weatherData.pressure_mb,
        visibility: american ? weatherData.vis_miles : weatherData.vis_km,
        cloudiness: weatherData.cloud,
        uv: weatherData.uv,
        details: weather.location,
      };
      return wth;
    });
}
