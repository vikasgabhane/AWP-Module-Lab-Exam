let ajaxSearch = function () {

    let city = "pune";

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=f87b4c95aa4565d0fb1ad5c3729d8a6b&units=metric&q=" + city;

    $.ajax(url).done((data1) => {

        DomLogic(data1);
    });

};

let DomLogic = (data1) => {
    const parent = document.querySelector("#parent");

    const newEle = parent.children[0].cloneNode(true);
    newEle.innerHTML = data1.name + " " + data1.main.temp_max;

    parent.insertBefore(newEle, parent.firstChild);
};