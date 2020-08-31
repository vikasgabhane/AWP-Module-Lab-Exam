window.addEventListener("load", () => {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://reqres.in/api/users?page=2");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
            let sjson = JSON.parse(xhr.responseText);
            console.log(sjson.data);
            nodeLogic(sjson.data);
        }
    }

    xhr.send();
});

let nodeLogic = function (jarr) {

    const parent = document.querySelector("#parentcontainer");

    for (let i = 0; i < jarr.length; i++) {
        let item = jarr[i];
        const newEle = parent.children[0].cloneNode(true);


        newEle.style.display = "flex";

        newEle.children[0].innerHTML = "<img src=" + item.avatar + " >" +
            "<br> ID :" + item.id +
            " <br> Name : " + item.first_name + " " + item.last_name +
            " <br> Email : " + item.email;

        parent.insertBefore(newEle, parent.firstChild);
    }
}