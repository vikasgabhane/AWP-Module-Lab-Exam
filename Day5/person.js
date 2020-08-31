const e = require('./emp.js');

let name;
class Person {
    constructor(nm) {
        name = nm;
    }

    showName() {
        console.log(name);
    }
    static main() {
        let p = new Person("Vikas");
        p.showName();
        //p.showDes();
    }
}
Person.main();