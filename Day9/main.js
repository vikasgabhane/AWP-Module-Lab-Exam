const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");
const readDB = require("./db.read");

const express = require("express");

const app = express();

/*app.get("/", async (req, res) => {

    try {
        const name = "Chetan";
        const city = "Nashik";
        const mobile = 56985;

        const connection = mysql.createConnection(config.DBConfig);

        await connection.connectAsync();

        let sql = "INSERT INTO student (name, city, mobile) VALUES (?,?,?) ";

        await connection.queryAsync(sql, [name, city, mobile]);
        await connection.endAsync();

        const json = {
            message: "Data Inserted!..."
        };
        res.json(json);
    } catch (err) {
        const json = {
            message: "Error occured!!"
        };
        res.json(json);
    }
});
*/

app.get("/add", async (req, res) => {

    try {
        const result = await readDB.readData();

        res.json(result);
    } catch (err) {
        const json = {
            message: "Failure"
        };
        res.json(json);
    }

});

app.listen(3000);