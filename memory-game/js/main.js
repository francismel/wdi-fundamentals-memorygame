


cardOne = {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}

cardTwo = {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}

cardThree = {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}

cardFour = {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

let cardsInPlay = [];
let cards = [];
cards[0] = cardOne;
cards[1] = cardTwo;
cards[2] = cardThree;
cards[3] = cardFour;

function checkForMatch(){

	if(cardsInPlay[0] == cardsInPlay[1]){
		console.log("You found a match!");
	}
	else{
		alert("Sorry, try again.")
	}
	}


function flipCard(cardId){

	console.log("User flipped "+cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId]);

	if(cardsInPlay.length === 2){
		checkForMatch();
	}
	
}

flipCard(0);
flipCard(2);






