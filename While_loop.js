// print 0 to 9 number  (using While loop)

let i=0;
let n=10;

while (i<10) {
    console.log(i);
    i++
}



//       sum of N natural numbers


//Example 1.

let num=20;

let p=1;
let sum=0;

while(p<=num){
    sum=sum+p;
    p++
}
console.log(`Sum of ${num} natural number is : ${sum}`);




//              OR


// Using mathmetical formula  (fast method)


let num1=10;
let total=(num1*(num1+1))/2;

console.log(total);