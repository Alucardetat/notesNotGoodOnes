// Part 1 - Random Dog Generator

document.addEventListener("DOMContentLoaded", function () {
    const dogButton = document.querySelector("#dogButton");

    dogButton.addEventListener("click", function () {
        const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

        fetch(dogApiUrl)
            .then((data) => data.json())
            .then((response) => {
                const dogImage = document.querySelector("#dogImage");
                dogImage.src = response.message;
            })
            .catch((error) => console.log(error));
    });

    // Part 2 - Weather App

    const weatherForm = document.querySelector("#weatherForm");

    weatherForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cityInput = document.querySelector("#cityInput");
        const city = cityInput.value;

        const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=36.1659&longitude=-86.7844&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`;

        fetch(weatherApiUrl)
            .then((data) => data.json())
            .then((response) => {
                const temperatureDiv = document.querySelector("#temperature");
                const windDiv = document.querySelector("#wind");
                const descriptionDiv = document.querySelector("#description");

                temperatureDiv.textContent = `Temperature: ${response.current.temperature_2m} °F`;
                windDiv.textContent = `Wind Speed: ${response.current.wind_speed_10m} mph, Wind Direction: ${response.current.wind_direction_10m}°`;
                descriptionDiv.textContent = `Weather Code: ${response.current.weather_code}`;
            })
            .catch((error) => console.log(error));
    });
});
