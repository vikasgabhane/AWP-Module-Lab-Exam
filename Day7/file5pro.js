const fs = require('fs');
const promise = require('bluebird');

promise.promisifyAll(fs);

let readDemo = () => {

    const filepath = "/home/vikas/Desktop/Files/temp.txt";

    const mpromise = fs.readFileAsync(filepath, {
        encoding: "utf-8"
    });
    console.log(mpromise);

    mpromise.then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
};

let readDemo1 = () => {
    const filepath1 = "/home/vikas/Desktop/Files/temp.txt";

    fs.readFileAsync(filepath1, {
            encoding: "utf-8"
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

readDemo();
readDemo1();