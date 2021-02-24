let userNum = Number(prompt("Enter a number between 1 - 100"));
do {
    userNum = Number(prompt("Please enter a number between 1 - 100"))
} while (userNum < 1 || userNum > 100 || isNaN(userNum))

if (userNum >= 90 && userNum <= 100) {
    console.log("You received an A")
} else if (userNum >= 80 && userNum <= 89) {
    console.log("You received a B")
} else if (userNum >= 70 && userNum <= 79) {
    console.log("You received a C")
} else if (userNum >= 60 && userNum <= 69) {
    console.log("You received a D")
} else {
    console.log("You received an F")
}