// array destructuring 

// method 1 (noraml ways)

const myArray1=['item1','item2','item3'];

let arr1=myArray1[0];
let arr2=myArray1[1];
let arr3=myArray1[2];

console.log(arr1);
console.log(arr2);
console.log(arr3);


// method 2 (JavaScript way 1)

const myArray2=['item1','item2','item3'];

let [arr4,arr5,arr6]=myArray2;


console.log(arr4);
console.log(arr5);
console.log(arr6);



// method 3

const myArray3=['item1','item2'];

let [arr7,arr8,arr9]=myArray3;

console.log(arr7);
console.log(arr8);
console.log(arr9);


// method 4

const myArray4=['item1','item2','item3'];

let [arr10, ,arr11]=myArray4;

console.log(arr10);
console.log(arr11);



// method 5

const myArray5=['item1','item2','item3'];

let [arr12, ...arr13]=myArray5;

console.log(arr12);
console.log(arr13);



// method 6

const myArray6=['item1','item2','item3'];

let [arr14,arr15]=myArray6;

console.log(arr14);
console.log(arr15);
