let fs = require("fs");

let readWithException = () => {

    try {
        let filepath1 = "/home/vikas/Desktop/Files/temp.txt"
        let fileDemo1 = fs.readFileSync(filepath1, {
            encoding: "utf-8"
        });

        console.log(fileDemo1);
    } catch (err) {
        console.log(err.message);
    }
};

let readWithoutException = () => {
    let filepath = "/home/vikas/Desktop/Files/temp.txt";

    let fileDemo = fs.readFileSync(filepath, {
        encoding: "utf-8"
    });
    console.log(fileDemo);
};

readWithoutException();