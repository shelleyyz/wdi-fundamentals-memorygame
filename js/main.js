// remember that JS renders code based on most recent

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; /*this will hold the cards that are in play/flipped*/

var cardOne = cards[0]; //queen
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2]; //king
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again");
}
}
