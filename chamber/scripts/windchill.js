const temp =  39; //document.querySelector("#temp");
const wind = 5.8;  //document.querySelector("#windspeed");
console.log(temp);
console.log(wind);

const windchill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16)));

if (temp <= 50 && wind > 3) {
    document.querySelector("#windchill").innerHTML = windchill;
} else {
    document.querySelector("#windchill").innerHTML = ("N/A");
}