function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

let flippedCards = [];

function handleCardClick() {
  // this will point to the card node
  if(this.children[0].style.display == "none") {
    this.children[0].style.display = "";
    this.children[1].style.display = "none";
  } else {
    this.children[1].style.display = "";
    this.children[0].style.display = "none";
  }

  if(flippedCards.length < 2) {
    flippedCards.push(this);
  }
  else if(flippedCards.length == 1) {
    if(this.children[1].innerHTML == flippedCards[0].children[1].innerHTML) {
        console.log('YOU WIN!');
    } else {
        
    }
  }
  
}

let deck = [];
let excludeCards = [127151, 127152, 127167, 127168, 127184];
const cardBack = "&#127136;"

for (let i = 127137; i < 127137 + 62; i++) {
    if (excludeCards.includes(i)) {
        continue;
    }
    let cardString = `&#${i};`;
    deck.push(cardString);
}

shuffle(deck);
let cardChoice = deck.slice(0, 10);
let gameCards = [];

for (let card of cardChoice) {
    gameCards.push(card);
    gameCards.push(card);
}

shuffle(gameCards);

for (let card of gameCards) {
    let newNode = document.createElement('div');
    let frontNode = document.createElement('div')
    let backNode = document.createElement('div')
    newNode.className = "card";
    frontNode.className = "front";
    backNode.className = "back";
    frontNode.innerHTML = card;
    backNode.innerHTML = cardBack;
    frontNode.style = "display: none";
    newNode.appendChild(frontNode);
    newNode.appendChild(backNode);
    newNode.onclick = handleCardClick;
    document.getElementById('cardGrid').appendChild(newNode);
}

