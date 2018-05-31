// remember that JS renders code based on most recent

var cards = ["queen", "queen", "king", "king"]; //these two arrays are global
var cardsInPlay = []; //this will hold the cards that are in play/flipped

var checkForMatch = function() { //defining checkformatch function so we can call it when user flips card
    if (cardsInPlay[0] === cardsInPlay[1]) { //condition met: queen match true
      console.log("You found a match!");
      alert("You found a match!") //print message if condition is true
    } else {
      console.log("Sorry, try again"); //print message if not
      alert("Sorry, try again");
    }
};

var flipCard = function(cardId) { //defining flipcard function
  console.log("User flipped " + cards[cardId]);//print message showing which cards were flipped
  cardsInPlay.push(cards[cardId]); //cards are now 'in play'
  if (cardsInPlay.length === 2) { //check whether two cards are in play
    checkForMatch(); //call checkformatch function
  }
};

flipCard(0); //user flips Queen

flipCard(2); //user flips king

//console.log should show : user flipped queen, user flipped king, sorry, try again




/*Create function that will store all steps related to selecting or flipping
a card. When user flips, the card is added to array of cards in cardsInPlay.
If user has flipped two, check for match.

Create a function to group togerher the logic to check to see if two cards
flipped match or if they should try again. */
