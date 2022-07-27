// nested if_else....i.e(if_else inisde If or else)



// winning number-----> 19

// =19----->your guess is right

// >19-------> too high
// <19-------> too low



let winningGuess=19;
let userGuess=+prompt("Guess ur number");

// prompt---->used to take input in JS ...and it take input as String, to convert input string into number we use '+' operator before prompt .

if(userGuess===winningGuess){
    console.log("Your guess is right");
}
else{
    if(userGuess>winningGuess){
        console.log("Too high");
    }
    else{
        console.log("Too low");
    }

}




