function toggleMenu() {
    document.querySelector("#nav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


const year = document.querySelector('#currentyear');
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#date").textContent = document.lastModified;

function readFunction() {
    let dots = document.querySelector("#dots");
    let moreText = document.querySelector("#more");
    let btnText = document.querySelector("#readBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



const temp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#currentCondition");
const captionDesc = document.querySelector("#figCaption1");
const humidity = document.querySelector("#humidity");

const url = "https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&appid=ebdaadb1a16dbc7d0637954f5c47ac64";

async function weatherFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data= await response.json();
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
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&#8457;</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}&percnt;</strong>`;
}

const dayCondition1 = document.querySelector("#dayCondition1");
const figCaption2 = document.querySelector("#figCaption2");
const dayCondition2 = document.querySelector("#dayCondition2");
const figCaption3 = document.querySelector("#figCaption3");
const dayCondition3 = document.querySelector("#dayCondition3");
const figCaption4 = document.querySelector("#figCaption4");

const hiTemp1 = document.querySelector("#hiTemp1");
const hiTemp2 = document.querySelector("#hiTemp2");
const hiTemp3 = document.querySelector("#hiTemp3");

const loTemp1 = document.querySelector("#loTemp1");
const loTemp2 = document.querySelector("#loTemp2");
const loTemp3 = document.querySelector("#loTemp3");


const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.158089&lon=-117.350594&units=imperial&appid=ebdaadb1a16dbc7d0637954f5c47ac64";

async function forecastFetch() {
        const response = await fetch(forecastUrl);
            const data= await response.json();
            displayForecastResults(data);
}

forecastFetch();

function displayForecastResults(forecastData) {
    day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    let tomorrow = new Date(date);
    let nextday = new Date(date);
    let dayafter = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextday.setDate(nextday.getDate() + 2);
    dayafter.setDate(dayafter.getDate() + 3);

    const day1 = day[tomorrow.getDay()];
    const day2 = day[nextday.getDay()];
    const day3 = day[dayafter.getDay()];

    const dayWeek1 = document.querySelector("#dayWeek1").innerHTML = day1;
    const dayWeek2 = document.querySelector("#dayWeek2").innerHTML = day2;
    const dayWeek3 = document.querySelector("#dayWeek3").innerHTML = day3;


    const iconsrc1 = `https://openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`;
    const des1 = forecastData.list[0].weather[0].description;

    dayCondition1.setAttribute('src', iconsrc1);
    dayCondition1.setAttribute('alt', des1);
    figCaption2.textContent = des1.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    const iconsrc2 = `https://openweathermap.org/img/w/${forecastData.list[1].weather[0].icon}.png`;
    const des2 = forecastData.list[1].weather[0].description;

    dayCondition2.setAttribute('src', iconsrc2);
    dayCondition2.setAttribute('alt', des2);
    figCaption3.textContent = des2.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    const iconsrc3 = `https://openweathermap.org/img/w/${forecastData.list[2].weather[0].icon}.png`;
    const des3 = forecastData.list[2].weather[0].description;

    dayCondition3.setAttribute('src', iconsrc3);
    dayCondition3.setAttribute('alt', des3);
    figCaption4.textContent = des3.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    hiTemp1.innerHTML = `<strong>High: ${forecastData.list[0].main.temp_max.toFixed(0)}&#8457;</strong>`;
    hiTemp2.innerHTML = `<strong>High: ${forecastData.list[1].main.temp_max.toFixed(0)}&#8457;</strong>`;
    hiTemp3.innerHTML = `<strong>High: ${forecastData.list[2].main.temp_max.toFixed(0)}&#8457;</strong>`;
    loTemp1.innerHTML = `<strong>Low: ${forecastData.list[0].main.temp_min.toFixed(0)}&#8457;</strong>`;
    loTemp2.innerHTML = `<strong>Low: ${forecastData.list[1].main.temp_min.toFixed(0)}&#8457;</strong>`;
    loTemp3.innerHTML = `<strong>Low: ${forecastData.list[2].main.temp_min.toFixed(0)}&#8457;</strong>`;
}

const juiceDisplay = document.querySelector("#juices");
let juiceNum = Number(window.localStorage.getItem("juices-ls"));
if (juiceNum !== 0) {
    juiceDisplay.textContent = `${juiceNum} juices`;
} else {
    juiceDisplay.textContent = `This is your first juice!`;
}
juiceNum++;
localStorage.setItem("juices-ls", juiceNum);

const rewardDisplay = document.querySelector("#rewards");
let reward = juiceNum / 10;
if (juiceNum > 10) {
    rewardDisplay.textContent = `${reward.toFixed(0)} free juices`;
} else {
    rewardDisplay.textContent = `0 free juices`;
}