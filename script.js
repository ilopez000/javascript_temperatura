function obtenerTemperatura() {
    var apiKey = '15b7fe0cfea4a4cbe609f96b2e97e96e'; // Reemplaza con tu clave API de OpenWeatherMap
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var temp = data.main.temp;
            document.getElementById('temperatura').innerText = `La temperatura en Barcelona es: ${temp} °C`;
        })
        .catch(error => console.error('Error:', error));
}
