let addByGet = () => {
    let name = document.querySelector("#nameId").value;
    let city = document.querySelector("#cityId").value;
    let mobile = document.querySelector("#mobileId").value;

    let url = `http://localhost:4000/addData?name=${name}&city=${city}&mobile=${mobile}`;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {

        const res = xhr.responseText;
        console.log(res);

        document.querySelector("#nameId").value = "";
        document.querySelector("#cityId").value = "";
        document.querySelector("#mobileId").value = "";
    };

    xhr.send();


};

let addByGet1 = async () => {

    let name = document.querySelector("#nameId").value;
    let city = document.querySelector("#cityId").value;
    let mobile = document.querySelector("#mobileId").value;



    let url = `http://localhost:4000/addData?name=${name}&city=${city}&mobile=${mobile}`;

    await fetch(url);

    document.querySelector("#nameId").value = "";
    document.querySelector("#cityId").value = "";
    document.querySelector("#mobileId").value = "";

};

let addByPost = async () => {

    let name = document.querySelector("#nameId").value;
    let city = document.querySelector("#cityId").value;
    let mobile = document.querySelector("#mobileId").value;

    let input = {
        name,
        city,
        mobile
    };

    let inputString = JSON.stringify(input);

    let url = `http://localhost:4000/addData`;

    await fetch(url, {
        method: "POST",
        body: inputString,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.querySelector("#nameId").value = "";
    document.querySelector("#cityId").value = "";
    document.querySelector("#mobileId").value = "";

};