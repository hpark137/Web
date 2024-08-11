document.addEventListener('DOMContentLoaded', function() {

    const weatherApiKey = '97e340534d070341d3ddfdc03f5e27a4';  
    const city = 'Toronto';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            weatherElement.innerHTML = `Temperature: ${temperature}°C, ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = 'Unable to load weather data.';
        });
});
