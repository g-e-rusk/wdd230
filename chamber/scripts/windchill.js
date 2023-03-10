const temp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const wind = document.querySelector("#windspeed");
//console.log(temp);
//console.log(wind);

const url = "https://api.openweathermap.org/data/2.5/weather?id=5346111&units=imperial&appid=ebdaadb1a16dbc7d0637954f5c47ac64"

async function weatherFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

weatherFetch();

function displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    wind.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

const windchill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16)));

if (temp <= 50 && wind > 3) {
    document.querySelector("#windchill").innerHTML = `${windchill}&deg;F`;
} else {
    document.querySelector("#windchill").innerHTML = ("N/A");
}
