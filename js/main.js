console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queenh";
var cardFour = "kingh";
*/

var cards = ["queen", "queen", "king", "king"]
var cardsInPlay =["queen", "king"]
var cardOne = "queen";
var cardTwo = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

    if (cardsInPlay === "queen") {
        console.log("User flipped " + cardOne);
    }
    if (cardsInPlay === "king") {
        console.log("User flipped " + cardTwo);
    }
if (cardsInPlay[0] === cardsInPlay[1])  {
    console.log("You found a match!");
} else {
    console.log("Sorry, try again.");
}