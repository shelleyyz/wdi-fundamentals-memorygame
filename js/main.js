// remember that JS renders code based on most recent

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
]; //these two arrays are global

var cardsInPlay = []; //this will hold the cards that are in play/flipped

var checkForMatch = function() { //defining checkformatch function so we can call it when user flips card
    if (cardsInPlay[0] === cardsInPlay[1]) { //condition met: queen match true
      alert("You found a match!") //print message if condition is true
    } else {
      alert("Sorry, try again"); //print message if not
    }
};

var flipCard = function() { //defining flipcard function, removed cardID as no longer want to hard-code the index number of the card that should be flipped
  cardId = this.getAttribute('data-id'); //get data-id of card that was just flipped and save it
  console.log("User flipped " + cards[cardId].rank);//print message showing which cards were flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank); //cards are now 'in play'
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) { //check whether two cards are in play
    checkForMatch(); //call checkformatch function
    cardsInPlay = []; //empty for next try

  }
};

var createBoard = function() { //this function will create a new gameboard
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img'); //create img that will be used as a cards
      cardElement.setAttribute('src', 'images/back.png'); //add src to var
      cardElement.setAttribute('data-id', i); //set data-id to current element
      cardElement.addEventListener('click', flipCard); //add event listener so that when card is clicked, the function flipCard will run
      document.getElementById('game-board').appendChild(cardElement); //append current cardElement to board

//added click even to each card so that when each card is clicked, the flipcard
//function will run

    }
}

createBoard(); //invoking the function to create the board!




//console.log should show : user flipped queen, user flipped king, sorry, try again

//when user clicks on a card, the image with the face of the card should be displayed.
//If the user has selected two cards, an alert should pop up letting the User
//know if the two cards match
