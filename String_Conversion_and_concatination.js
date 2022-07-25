// conversion


// 1. Number to String 
let num=23;

num=num+"";
    // OR
num=String(num);

console.log(num);
console.log(typeof num);





// 2. String to Number 

let str="45";

str=+str;
    // OR
str=Number(str);

console.log(str);
console.log(typeof str);





// string Concatination

let firstName="Akash";
let lastName="Singh";


let fullName=firstName+ " " +lastName;
console.log(fullName);




let String1="23";
let String2="27";


let newString1= String1 + String2;  

let newString2= +String1 + +String2;   /*Converting String to number */

console.log(newString1);
console.log(newString2);

