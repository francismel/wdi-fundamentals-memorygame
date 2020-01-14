


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

function checkForMatch(cardsInPlay){
	console.log(cardsInPlay[0].rank +" "+ cardsInPlay[1].rank);
	if(cardsInPlay[0].rank === cardsInPlay[1].rank){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}

function createBoard(){
	for(var i = 0; i<cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		let reset = document.getElementsByTagName('button')[0];
		reset.addEventListener('click',resetCardsInPlay);
	}
}

function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	console.log()
	if(cardsInPlay.length == 2){
		
		checkForMatch(cardsInPlay);
	}
}

function resetCardsInPlay(){
	cardsInPlay = [];
	cardElements = document.getElementsByTagName('img');
	console.log(cardElements.length);
	for(var i = 0; i<cardElements.length; i++){
		cardElements[i].setAttribute('src',"images/back.png")

	}
}




createBoard();





