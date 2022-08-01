// Array   (ordered collection of items/elements)


// example 1

let fruits=['mango' ,'banana', 'apple' ,'orange'];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits[2]='grapes';
console.log(fruits);


// example 2


let num=[1,2,3,4,5,6,7];

console.log(num);

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
console.log(num[5]);
console.log(num[6]);

num[4]=10;
console.log(num);




// example 3


let mixed=[1,'banana' , 1.23 ,null ,undefined];

console.log(mixed);

console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[4]);


mixed[3]=5.2222222;
console.log(mixed);


// to check fruits variable is array or not 


console.log(typeof fruits);
console.log(Array.isArray(fruits));



// to check obj variable is array or not 


let obj={};

console.log(typeof obj);
console.log(Array.isArray(obj));

