const fs = require('fs');

let readDemo = () => {
    const filepath = "/home/vikas/Desktop/Files/temp.txt";
    fs.readFile(filepath, {
            encoding: "utf-8"
        },
        (err, data) => {
            console.log(data);

        });
};

let readDemo1 = () => {
    try {
        const filepath = "/home/vikas/Desktop/Files/temp.txt";
        fs.readFile(filepath, {
            encoding: "utf-8"
        }, (err, data) => {
            console.log(data);
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
};

readDemo1();