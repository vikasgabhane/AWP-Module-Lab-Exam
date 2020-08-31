let searchW = function () {

    let city = document.querySelector("#input").value || "nashik";

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=f87b4c95aa4565d0fb1ad5c3729d8a6b&units=metric&q=" + city;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {

        const wref = JSON.parse(xhr.responseText);

        weatherDomLogic(wref);

    };

    xhr.send();

};

let weatherDomLogic = function (wref) {

    let name = wref.name;
    let max_temp = wref.main.temp_max;
    let W_type = wref.weather.description;

    const parentEle = document.querySelector("#W-container");

    let newEle = parentEle.children[0].cloneNode(true);

    newEle.style.display = "flex";

    newEle.innerHTML = "City : " + name + "<br>Temprature : " + max_temp;

    parentEle.insertBefore(newEle, parentEle.firstChild);

    document.querySelector("#input").value = " ";

};