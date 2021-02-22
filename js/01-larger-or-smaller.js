let num1 = Number(prompt("Enter a number."))
let num2 = Number(prompt("Enter another number."))

if(num1 > num2) {
    document.write(`${num1} is larger`)
} else if (num2 > num1) {
    document.write(`${num2} is larger`)
} else {
    alert("Choose two different numbers")
}