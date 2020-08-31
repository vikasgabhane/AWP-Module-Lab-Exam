const Promise = require("bluebird");
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readData = async () => {

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "mydb",
    });

    await connection.connectAsync();

    let sql = "SELECT * FROM student";
    let result = await connection.queryAsync(sql);

    await connection.endAsync();

    console.log(result);
};

readData();