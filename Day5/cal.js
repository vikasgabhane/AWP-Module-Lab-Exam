let x, y;
class Calculator {
    constructor(a, b) {
        x = a;
        y = b;
    }

    add() {
        let z = x + y;
        console.log(z);
    }
    sub() {
        let z = x - y;
        console.log(z);
    }
    mul() {
        let z = x * y;
        console.log(z);
    }

    div() {
        let z = x / y;
        console.log(z);
    }

    static main() {
        let c = new Calculator(20, 10);
        console.log("Addition :- ");
        c.add();
        console.log("Substraction :- ");
        c.sub();
        console.log("Multiplication :- ");
        c.mul();
        console.log("Division :- ");
        c.div();

        /*let cal = prompt("Enter operation you want to perform 1)add 2)sub 3)mul 4)div");
        switch (cal) {
            case "add":
                console.log("Addition :- ");
                c.add();
                break;

            case "sub":
                console.log("Substraction :- ");
                c.sub();
                break;

            case "mul":
                console.log("Multiplication :-");
                c.mul();
                break;

            case "div":
                console.log("Division :-");
                c.div();
                break;
            
    }
    */
    }
}

Calculator.main();