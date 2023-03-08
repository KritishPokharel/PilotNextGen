$(document).ready(function() {
	const url = "https://api.weather.gov/gridpoints/LWX/98,72/forecast";

	$.getJSON(url, function(data) {
		const forecast = data.properties.periods;
		const weatherForecast = $(".weather-forecast");
		let weatherCards = "";

		forecast.forEach((day) => {
			weatherCards += `
				<div class="weather-card">
					<h2>${day.name}</h2>
					<i class="icon ${day.icon}"></i>
					<p class="temp">${day.temperature}&deg;F</p>
					<p class="desc">${day.detailedForecast}</p>
				</div>
			`;
		});

		weatherForecast.html(weatherCards);
	});
});
