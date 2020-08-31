let AjaxCall = function () {

    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const jsonref = JSON.parse(xhr.responseText);
        DomLogic(jsonref);
    }
    xhr.open("GET", "https://reqres.in/api/users?page=2");


    xhr.send();
};

let DomLogic = function (jarr) {

    let parent = document.querySelector("#parent");

    for (let i = 0; i < jarr.data.length; i++) {
        const item = jarr.data[i];

        let newEle = parent.children[0].cloneNode(true);

        newEle.innerHTML = item.first_name;

        parent.insertBefore(newEle, parent.firstChild);
    }
}