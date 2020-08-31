const express = require("express");

const app = express();

app.get("/", (req, res) => {

    const id = req.query.id;
    const username = req.query.username;

    const json = {
        id: 1,
        username: "Vikas Gabhane"
    };
    res.json(json);
});

app.get("/search", (req, res) => {

    const json = {
        id: 100,
        title: "I am Search Page!.."
    };
    res.json(json);

})
app.listen(3000);