/* //Exercise 1

const checkAge = (age) => age > 18 ? true : confirm("Do you have your parents permission to access this page?");

checkAge(17); */



/* // Exercise 2

function pow(x,n){
    if(n < 1){
        return "This program only accepts exponents up from 1.";
    } else if (n == 0 && x >= 1){
        return 0;
    } else{
        let result = 1
        for (let i = 1; i <= Math.abs(n); i++){
            result = result * x;
        }
        return result;
    }
}

console.log(pow(0, -2));
console.log(pow(3, -2));
console.log(pow(0, 0));
console.log(pow(3, 0));
console.log(pow(0, 1));
console.log(pow(5, 2)); */



/* // Exercise 3

const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution.") ) */



/* // Exercise 4

let calculator = {
    firstValue: null,
    secondValue: null,
    read(){
        this.firstValue = +prompt("Enter the first value");
        this.secondValue = +prompt("Enter the second value");
    },
    sum(){
        let sumTotal = 0;
        sumTotal = this.firstValue + this.secondValue;
        return sumTotal;
    },
    mul(){
        let mulTotal = 0;
        mulTotal = this.firstValue * this.secondValue;
        return mulTotal;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul()); */


/* // Exercise 5

a = +prompt("Enter the first value");
b = +prompt("Enter the second value");

const min = (a,b) => a < b ? a : b;

console.log(min(a,b)); */