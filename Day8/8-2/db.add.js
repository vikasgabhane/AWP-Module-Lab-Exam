const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let addData = async () => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "INSERT INTO student (name, city, mobile) VALUES (?,?,?)";

    await connection.queryAsync(sql, ["ganesh", "nandgaon", 695875]);

    await connection.endAsync();

    console.log("Insert complete");
};


let addData1 = async (user) => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "INSERT INTO student (name, city, mobile) VALUES (?,?,?)";

    await connection.queryAsync(sql, [user.name, user.city, user.mobile]);

    await connection.endAsync();

    console.log("Insert complete");
};


module.exports = {
    addData,
    addData1
};