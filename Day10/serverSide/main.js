const readDB = require("./db.read");
const addDB = require("./db.add");

const express = require("express");
const dbAdd = require("./db.add");


const app = express();

app.use(express.json());



let input = {
    name: "jagan",
    city: "pune",
    mobile: 65987
};

//addDB.addData(input);

//readDB.readData();

/*app.get("/readData", async (req, res) => {

    try {
        const result = await readDB.readData();
        res.json(result);

    } catch (err) {
        res.json({
            message: "Error Ocured"
        });
    }

});*/

app.get("/addData", async (req, res) => {

    try {
        let input = req.query;

        await dbAdd.addData(input);
        res.json({
            message: "Success",
            name: input.name,
        });

    } catch (err) {
        res.json({
            message: "Failure"
        });
    }

});

/*app.post("/addData", async (req, res) => {

    try {
        let input = req.body;

        await dbAdd.addData(input);

        res.json({
            message: "success",
            name: input.name,
        });

        console.log(input);

    } catch (err) {
        res.json({
            message: "fail"
        });
    }
});
*/
app.listen(4000);