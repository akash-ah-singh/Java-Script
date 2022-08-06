let num1=["Akash","Abhi","Rahul","Sid"];
for(let i=0;i<num1.length;i++){
    console.log(num1[i]);
}


// name in upper case letter

let num2=["Akash","Abhi","Rahul","Sid"];
for(let i=0;i<num2.length;i++){
    console.log(num2[i].toUpperCase());
}

                //OR

let fruits1=[]
let num3=["Akash","Abhi","Rahul","Sid"];
for(let i=0;i<num3.length;i++){
    fruits1=num3[i].toUpperCase()
    console.log(fruits1);
    
}


                //OR

let fruits2=[]
let num4=["Akash","Abhi","Rahul","Sid"];
for(let i=0;i<num4.length;i++){
    fruits2.push(num4[i].toUpperCase())   
    
}
console.log(fruits2);
