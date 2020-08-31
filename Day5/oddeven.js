class OddEven {
    constructor(n) {
        //let n = prompt("Enter Number", 10);
        if (n % 2 == 0) {
            console.log("Even No");
        } else {
            console.log("Odd No");
        }
    }

    static main() {
        let obj = new OddEven(13);
    }
}

OddEven.main();