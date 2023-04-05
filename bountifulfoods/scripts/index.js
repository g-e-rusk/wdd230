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
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data= await response.json();
            console.log(data)
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

forecastFetch();

// const date = new Date();
// let dayWeek = date.getDay();

// let day = "";
// switch(dayWeek) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break; 
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }
// const dayWeek1 = document.querySelector("#dayWeek1");
// const dayWeek2 = document.querySelector("#dayWeek2");
// const dayWeek3 = document.querySelector("#dayWeek3");
//     dayWeek1.innerHTML = day;
//     dayWeek2.innerHTML = day;
//     dayWeek3.innerHTML = day;

function displayForecastResults(forecastData) {
    

    const iconsrc = `https://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`;
    const desc = forecastData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    humidity.innerHTML = `<strong>Humidity:${forecastData.main.humidity.toFixed(0)}&percnt;</strong>`;
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