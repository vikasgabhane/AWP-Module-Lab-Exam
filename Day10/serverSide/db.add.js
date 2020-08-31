const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let addData = async (input) => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "INSERT INTO student (name , city, mobile) VALUES (?,?,?)";

    const result = await connection.queryAsync(sql, [
        input.name,
        input.city,
        input.mobile
    ]);

    await connection.endAsync();

    console.log(result);
};


module.exports = {
    addData
};