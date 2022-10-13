
const key1="objKey1"
const key2="objKey2"


const value1="myValue1"
const value2="myValue2"




// Simple Method 

const newObject={};


newObject[key1]=value1;
newObject[key2]=value2;

console.log(newObject);


//OR


// Computed Properties method 

const newObj={
    [key1]:value1,
    [key2]:value2,

}


console.log(newObj);