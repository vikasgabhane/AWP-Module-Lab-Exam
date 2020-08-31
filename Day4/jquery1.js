let jquerySearch = function () {

    let city = $("#input1").val() || "nashik";
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=f87b4c95aa4565d0fb1ad5c3729d8a6b&units=metric&q=" + city;

    $.ajax(url).done((data1) => {

        DomLogic5(data1);
    });
};

let DomLogic1 = (data1) => {

    let parent = document.querySelector("#parent");

    let newEle = parent.children[0].cloneNode(true);

    newEle.style.display = "flex"

    newEle.innerHtml = data1.name + " " + data1.main.temp_max;

    parent.insertBefore(newEle, parent.firstChild);

    document.querySelector("#input1").value = "";
};

let DomLogic2 = (data1) => {

    //const parent = document.querySelector("#parent");
    //const parent = $("#parent");

    //parent.children[0]
    //$("#parent").children().first();
    //$("#parent :nth-child(1)");
    //$("#parent :first-child");

    //const newEle = parent.children[0].cloneNode(true);

    const newEle = $("#parent :nth-child(1)").clone(true).css("display", "flex");

    newEle.html(data1.name + " " + data1.main.temp_max);

    newEle.insertBefore($("#parent :nth-child(1)"));

    $("#input1").val(" ");
};

let DomLogic3 = (data1) => {
    const newEle = $("#parent :nth-child(1)").clone(true).css("display", "flex");
    newEle.html(data1.name + " " + data1.main.temp_max);

    newEle.insertBefore($("#parent :nth-child(1)"));

    $("#input1").val(" ");
};

let DomLogic4 = (data1) => {
    const newEle = $("#parent :nth-child(1)")
        .clone(true)
        .html(data1.name + " " + data1.main.temp_max).css("display", "flex");

    newEle.insertBefore($("#parent :nth-child(1)"));

    $("#input1").val(" ");
};

let DomLogic5 = (data1) => {

    const newEle = $("#parent :nth-child(1)")
        .clone(true)
        .html(data1.name + " " + data1.main.temp_max).css("display", "flex")
        .insertBefore($("#parent :nth-child(1)"));

    $("#input1").val(" ");
};