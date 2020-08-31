const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb",
};

let readData = async () => {

    const connection = mysql.createConnection(dbConfig);

    await connection.connectAsync();

    const sql = "SELECT * FROM student";

    const result = await connection.queryAsync(sql);

    await connection.endAsync();

    console.log(result);
    //console.log("SELECT Query Performed..");

};

let readData1 = async (name) => {

    const connection = mysql.createConnection(dbConfig);
    await connection.connectAsync();

    const sql = "SELECT * FROM student WHERE name = ?";

    const result = await connection.queryAsync(sql, [name]);

    await connection.endAsync();

    console.log(result);

    //console.log("SELECT WHERE CLAUSE Performed..");

};

let insertData = async () => {

    const connection = mysql.createConnection(dbConfig);

    await connection.connectAsync();

    const sql = "INSERT INTO student VALUES ('ganesh','nandgaon',65978)";

    const result = await connection.queryAsync(sql);

    await connection.endAsync();

    //console.log(result);
    console.log("INSERT Query Performed..");

};

let deleteData = async (name) => {
    const connection = mysql.createConnection(dbConfig);

    await connection.connectAsync();

    const sql = "DELETE FROM student WHERE name =?";

    await connection.queryAsync(sql, [name]);

    await connection.endAsync();

    console.log("DELETE Query Performed..");
};

//insertData();

deleteData("ganesh");

readData();

//readData1("vikas");