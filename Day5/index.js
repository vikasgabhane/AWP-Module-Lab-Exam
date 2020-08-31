class Test {

    constructor() {
        console.log("Hi Constructor");
    }

    Hello() {
        console.log("Hello Fun!..");
    }

    static main() {
        console.log("Hi this main function");
        let t = new Test();
        t.Hello();

    }
}

Test.main();