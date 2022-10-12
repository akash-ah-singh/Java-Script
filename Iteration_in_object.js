// there are two ways to iterate an object 

// 1---> for in loop
// 2---> Object.keys with for of loop


const person={
    name: "Akash",
    age: 23,
    "my hobbie": ["abc","xyz","pqr"]
}


// 1) for in loop


// for keys 

for(let keys in person){
    console.log(keys)
}


// for values

for(let keys in person){
    console.log(person[keys])
}


// for keys and values both  

            // there are 3 ways to print it 

for(let keys in person){
    console.log(keys , person[keys])
}


// OR 

for(let keys in person){
    console.log(keys ,":", person[keys])
}

//  OR 

for(let keys in person){
    console.log(`${keys} : ${person[keys]}`)
}



// 2) Object.keys with for of loop

// for keys
console.log(Object.keys(person));


// for values

for(let keys of Object.keys(person)){
    console.log(person[keys])
}

// for keys and values both 

for(let keys of Object.keys(person)){
    console.log(Object.keys(person),person[keys])
}


for(let keys of Object.keys(person)){  
    console.log(`${Object.keys(person)} : ${person[keys]}`)
}
