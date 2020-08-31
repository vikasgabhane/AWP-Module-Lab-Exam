const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");


let readData = async () => {
    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM student";

    let result = await connection.queryAsync(sql);

    await connection.endAsync();

    console.log(result);
};


let readData1 = async (data) => {
    try {
        const connection = mysql.createConnection(config.DBConfig);

        await connection.connectAsync();

        let sql = "SELECT * FROM student where city = ?";

        let result = await connection.queryAsync(sql, [data]);

        await connection.endAsync();

        console.log(result);
    } catch (err) {
        console.log(err);
    }
};


module.exports = {
    readData,
    readData1
}