console.log("Hello, World! This is a simple JavaScript file.");

/*
var name="bob";
var name="marlon";
//can be declared multiple time with var but only the last value will be used
name="bob marlon";
console.log(name);
*/

let name="bob";
//let name="marlon"; //cannot be declared multiple time with let
name="bob marlon"; //can be updated but not redeclared with let

//difference between var and let
console.log(name);
{
    let a=20;
    let b=10;
    var sum=a+b;
    console.log("The sum of a and b is: " + sum);
}
//console.log(a); // This will cause an error because sum is not defined outside the block
console.log("The value of sum is: " + sum); // This will work because sum is declared with var, which has function scope, not block scope

const pi=3.14;
//pi=3.14159; // This will cause an error because pi is a constant and cannot be reassigned
console.log("The value of pi is: " + pi);

const obj={
    //key:value
    name:"bob",
    age:30
};
console.log(obj.name);

//work of 24-02-2026