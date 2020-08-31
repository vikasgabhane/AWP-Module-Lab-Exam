const fs = require('fs');

const promise = require('bluebird');

promise.promisifyAll(fs);

let readDemo = async () => {
    console.log("Hello async await");

    const filepath = "/home/vikas/Desktop/Files/temp.txt";
    const data1 = await fs.readFileAsync(filepath, {
        encoding: "utf-8"
    });

    console.log(data1);

    const filepath1 = "/home/vikas/Desktop/Files/temp1.txt";
    const data2 = await fs.readFileAsync(filepath1, {
        encoding: "utf-8"
    });
    console.log(data2);

    const filepath2 = "/home/vikas/Desktop/Files/temp2.txt";
    const data3 = await fs.readFileAsync(filepath2, {
        encoding: "utf-8"
    });
    console.log(data3);
};

readDemo();