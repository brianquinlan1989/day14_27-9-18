let request = new XMLHttpRequest();
let APIKEY = "e1eede9e9e3ecebc151770185be29217";



function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    console.log(apiData);

let temp = (apiData.main.temp - 273.15).toFixed(2);


    htmlString = `<strong>Name:</strong> ${apiData.name} <br />`;
    htmlString += `<strong>Temperature(Celsius):</strong> ${temp} <br />`;
    htmlString += `<strong>Air Pressure:</strong> ${apiData.main.pressure} <br />`;
    htmlString += `<strong>Wind Speed:</strong> ${apiData.wind.speed} Knots <br />`;
    htmlString += `<strong>Current Conditions:</strong> ${apiData.weather[0].description} <br />;`
    htmlString += `<img src="http://openweathermap.org/img/w/${apiData.weather[0].icon}.png"> <br />`

    // htmlString = apiData.weather[0].description;
    // htmlString += apiData.air_pressure;

    document.getElementById("weatherData").innerHTML = htmlString;
}



function submitCity() {
    let cityName = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + APIKEY);
    request.send();
}

request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayNicely(this.responseText);
        }
        else if (this.status == 404) {
            document.getElementById("weatherData").innerHTML = "<h2>City not found!! Please try again.</h2>";
        }
    }
};
