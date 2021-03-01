let coinFlip = Math.round(Math.random())
let choice;

do {
    choice = prompt("Please enter heads or tails")
} while (choice !== 'heads' && choice !== 'tails');

if (coinFlip === 0) {
    coinFlip = "heads"
    console.log(coinFlip)
    if(coinFlip === "heads" && choice === "heads") {
        alert("The flip was heads and you chose heads...you win!")
    } else {
        alert("The flip was heads but you chose tails...you lose!")
    }
} else {
    coinFlip = "tails"
    console.log(coinFlip)
    if (coinFlip === "tails" && choice === "tails") {
        alert("The flip was tails and you chose tails...you win!")
    } else {
        alert("The flip was tails but you chose heads...you lose!")
    }
}

