window.addEventListener("load", () => {

    const parent = document.querySelector("#parentcontainer");

    for (let i = 0; i < 10; i++) {
        const newEle = parent.children[0].cloneNode(true);
        newEle.style.display = "flex";

        parent.insertBefore(newEle, parent.firstChild)
    }
});