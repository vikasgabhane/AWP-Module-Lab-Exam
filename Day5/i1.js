let name;
class Person {
    constructor(p) {
        name = p;
    }

    ShowName() {
        console.log(name);
    }

    static main() {
        let p = new Person("Vikas");
        p.ShowName();
    }
}

Person.main();