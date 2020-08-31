let JsonCall = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        let jsonref = JSON.parse(xhr.responseText);

        jsonDomlogic(jsonref);
    };

    xhr.send();
};

let jsonDomlogic = function (jarr) {

    let parent = document.querySelector("#parent");

    for (let i = 0; i < jarr.length; i++) {
        let item = jarr[i];
        let newEle = parent.children[0].cloneNode(true);

        newEle.innerHTML = item.FirstName;
        parent.insertBefore(newEle, parent.firstChild);
    }
};

let XmlCall = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");
    xhr.onload = () => {
        let xmldoc = xhr.responseXML;

        xmlDomLogic(xmldoc);
    };

    xhr.send();
};

let xmlDomLogic = function (xmldoc) {

    const parentEle = xmldoc.querySelector("ArrayOfAuthor");

    for (let i = 0; i < parentEle.children.length; i++) {
        let item = parentEle.children[i];

        let firstName = item.children[0].innerHTML;

        let parent = document.querySelector("#parent");
        let newEle = parent.children[0].cloneNode(true);

        newEle.innerHTML = firstName;

        parent.insertBefore(newEle, parent.firstChild);
    }
};