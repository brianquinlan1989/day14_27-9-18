let xhr = new XMLHttpRequest();

function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    let htmlString = `<strong>Name:</strong> ${apiData.name} <br />`;
    htmlString += `<strong>Eye Color:</strong> ${apiData.eye_color} <br />`;
    htmlString += `<strong>Height:</strong> ${apiData.height} <br />`;
    htmlString += `<strong>Mass:</strong> ${apiData.mass} <br />`;
    htmlString += `<strong>Skin Color:</strong> ${apiData.skin_color} <br />`;
    htmlString += `<strong>Gender:</strong> ${apiData.gender} <br />`;
    document.getElementById("returnedData").innerHTML = htmlString;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
};

xhr.open("GET", "https://swapi.co/api/people5/");

xhr.send();