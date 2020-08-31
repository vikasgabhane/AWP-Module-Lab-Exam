const fs = require('fs');

const promise = require('bluebird');

promise.promisifyAll(fs);

let readDemo = () => {

    const filepath = "/home/vikas/Desktop/Files/temp.txt";

    fs.readFileAsync(filepath, {
            encoding: "utf-8"
        })
        .then((data) => {
            console.log(data);

            const filepath1 = "/home/vikas/Desktop/Files/temp1.txt";

            fs.readFileAsync(filepath1, {
                    encoding: "utf-8"
                })
                .then((data) => {
                    console.log(data);

                    const filepath2 = "/home/vikas/Desktop/Files/temp2.txt";
                    fs.readFileAsync(filepath2, {
                            encoding: "utf-8"
                        })
                        .then((data) => {
                            console.log(data);
                        })
                })
        })
        .catch((err) => {
            console.log(err);
        });
};

readDemo();