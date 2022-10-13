// Spread opertator in Array 

// This method know as Spread Operator Method ...
// it spreads the element two arrays in single array


const arr1 =[1,2,3];
const arr2 =[4,5,6];


const mixedArray1=[...arr1,...arr2];
const mixedArray2=[...arr1,arr2];
const mixedArray3=[...arr1,...arr2 ,7,8,9,10];

 
console.log(mixedArray1)
console.log(mixedArray2)
console.log(mixedArray3)

// we can also Spread String in array ... because String is Itterable 
const newArr1=[..."abcde"];
const newArr2=[..."12345"];   // here 1,2,3,4,5 are in form of String 

console.log(newArr1);
console.log(newArr2);


// Spread operator in Object 

const obj1={
    key1:"value1",
    key2:"value2"
    
}

const obj2={
    key1:"UniqueValue",
    key3:"value3",
    key4:"value4"
}


const newObj1={...obj1, ...obj2};
const newObj2={...obj1, obj2};
const newObj3={...obj1,...obj2, key69:"value69"};
const newObj4={...obj1, ...obj2};
const newObj5={...obj2, ...obj1};


console.log(newObj1);
console.log(newObj2);
console.log(newObj3);
console.log(newObj4);
console.log(newObj5);


// we can also Spread String in object ... because String is Itterable 
const newArr3={..."abcde"};
const newArr4={..."12345"}; // here 1,2,3,4,5 are in form of String 

console.log(newArr3);
console.log(newArr4);



// we can also Spread Array in object ... because Array is Itterable 


const newArr5={...["item1","item2","item3"]}

console.log(newArr5);