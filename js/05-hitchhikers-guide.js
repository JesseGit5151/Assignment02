let playReady = prompt("Are you ready to play the game? (enter yes or no)")

while (playReady !== 'yes' && playReady !== 'no') {
    playReady = prompt("Please enter yes or no")
}

if (playReady === "no") {
    alert("Thank you for playing.")
} else {
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.")

    let direction = prompt("Which direction would you like to head (please enter forward, left, or right).")
    console.log(direction)

    switch (direction) {
        case "left":
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!")
            break;
        case "foward":
            alert("You walk 100 yards and safely make your way out of the cave.")
            break;
        case "right":
            alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!")
            break;
        default:
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.")
    }

    let userRate = Number(prompt("Please rate the game on a scale of 1 - 10"))

    if (userRate < 1 || userRate > 10) {
        alert("Thank you for playing")
    } else if (userRate > 5 && userRate < 11) {
        alert(`Thanks! Play again?`)
    } else if (userRate > 0 && userRate < 6) {
        alert(`We are working hard to improve the game`)
    } else {
        console.log("error")
    }
        }
