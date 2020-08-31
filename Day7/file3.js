const fs = require('fs');

let readDemo = () => {

    const filepath1 = "/home/vikas/Desktop/Files/temp.txt";
    fs.readFile(filepath1, {
        encoding: "utf-8"
    }, (err, data) => {
        console.log("1", data);


        const filepath2 = "/home/vikas/Desktop/Files/temp1.txt";
        fs.readFile(filepath2, {
            encoding: "utf-8"
        }, (err, data) => {
            console.log("2", data);

            const filepath3 = "/home/vikas/Desktop/Files/temp2.txt";
            fs.readFile(filepath3, {
                encoding: "utf-8"
            }, (err, data) => {
                console.log("3", data);

            });
        });
    });
};
readDemo();