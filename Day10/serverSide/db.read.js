const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let readData = async () => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM student";

    const result = await connection.queryAsync(sql);

    await connection.endAsync();

    return result;
    console.log(result);
};


module.exports = {
    readData
};