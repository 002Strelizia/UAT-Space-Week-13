function playCraps() {
    console.log("playCraps() started");
    //create variable die 1 for die 1 roll
    var die1 = 0;
    //create variable die 2 for die 2 roll
    var die2 = 0;
    //create variable that adds die 1 and die 2
    var sum = 0;

    //rolling die 1
    //looking for a whole number between 1-6
    die1 = Math.ceil(Math.random() * 6);
    //logging result in console
    console.log("Die 1 = " + die1);

    //same for die 2
    die2 = Math.ceil(Math.random() * 6);
    console.log("Die 2 = " + die2);

    //determine sum of die 1 and die 2
    sum = die1 + die2;
    console.log("The sum of the two dice is: " + sum);

    //display values on the webpage
    //displaying die 1
    document.getElementById("die1Res").innerHTML = die1
    //displaying die 2
    document.getElementById("die2Res").innerHTML = die2
    //displaying sum of die 1 and die 2
    document.getElementById("diceSum").innerHTML = sum

    //determine game result
    //looking for 7 or 11 (losing numbers)
    if (sum == 11 || sum == 7) {
        console.log("Game result: loss");
        document.getElementById("gameRes").innerHTML = "CRAPS - you lose."
    //looking for even doubles (win condition)
    } else if (die1 == die2 && die1 % 2 == 0) {
        console.log("Game result: win");
        document.getElementById("gameRes").innerHTML = "DOUBLES - you win!"
    //looking for any other number which is a push (no win or loss)
    } else {
        console.log("Game result: push");
        document.getElementById("gameRes").innerHTML = "Push - You did not win or lose."
    }
}