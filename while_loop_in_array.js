// while loop  


// Note:-> to create an array we always use const. 

const name1=["Akash","Abhi","Rahul"]

let i1=0;
while(i1<name1.length){
    console.log(name1[i1]);
    i1++
}


            //OR


const name2=["Akash","Abhi","Rahul"]

let i2=0;
while(i<name2.length){
    console.log(name2[i2].toUpperCase());
    i2++
}


            //OR


const name3=["Akash","Abhi","Rahul"]

let i3=0;
const fruit=[];
while(i3<name3.length){
    fruit.push(name3[i3].toUpperCase())
    i3++
}
console.log(fruit);
