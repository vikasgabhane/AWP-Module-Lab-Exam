window.addEventListener("load", () => {

    const parent = document.querySelector("#parentcontainer");

    let jarr = [{
            no: 1,
            name: "Java"
        },
        {
            no: 2,
            name: "JavaScript"
        },
        {
            no: 3,
            name: "C++"
        },
        {
            no: 4,
            name: "C"
        },
        {
            no: 5,
            name: "PHP"
        },
        {
            no: 6,
            name: "Angular"
        },
        {
            no: 7,
            name: "Node js"
        },
    ];

    for (let i = 0; i < jarr.length; i++) {

        let item = jarr[i];

        const newEle = parent.children[0].cloneNode(true);
        newEle.style.display = "flex";

        newEle.children[0].textContent = item.name;

        parent.insertBefore(newEle, parent.firstChild);
    }
})