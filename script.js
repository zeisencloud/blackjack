// Version 1.1

let dealerSum = 0
let youSum = 0

let playerWins = 0
let dealerWins = 0
let cardChoices = [1,2,3,4,5,6,7,8,9,10,10,10,11]
//
const hitButton = document.getElementById("hit");
const standButton = document.getElementById("stand");
const startButton = document.getElementById("start");

const dealerSumValue = document.getElementById("dealerSum");
const youSumValue = document.getElementById("youSum");

const dealerCards = document.getElementById("dealerCards");
const youCards = document.getElementById("yourCards");

const winorLose = document.getElementById("winorLose");
const hiddenCard = document.getElementById("hiddenCard");

const dealerWinsNum = document.getElementById("dealerWinsNum");
const playerWinsNum = document.getElementById("playerWinsNum");
// Functions
const hit = () => {
    let random = Math.floor(Math.random() * cardChoices.length);

    let randomCardYou = parseFloat(cardChoices[random]);

    cardChoices.splice(cardChoices[random] - 1, 1)
    // console.log(cardChoices);

    youSumValue.innerText = parseFloat(this.youSum.innerText) + randomCardYou;
    youCards.innerText = youCards.innerText + "  " + randomCardYou;

    // Win/lose conditions

    // Exceed 21, lose
    if (parseFloat(youSumValue.innerText) > 21) {
        winorLose.innerText = 'Bust! Dealer Wins'
        dealerWins += 1
        dealerWinsNum.innerText = dealerWins;
        playAgain();
    }

    if (parseFloat(youSumValue.innerText) == 21) {
        winorLose.innerText = '21! You win!'
        playAgain();
    }

}


const stand = () => {
    let random = Math.floor(Math.random() * cardChoices.length);

    let randomCardDealer = parseFloat(cardChoices[random]);

    cardChoices.splice(cardChoices[random] - 1, 1)
    // console.log(cardChoices);

    dealerSumValue.innerText = parseFloat(this.dealerSum.innerText) + randomCardDealer;
    dealerCards.innerText = dealerCards.innerText + "  " + randomCardDealer;

    if (parseFloat(dealerSumValue.innerText) > 21)
    {
        winorLose.innerText = 'Congrats! You win!'
        playerWins += 1
        playerWinsNum.innerText = playerWins;

        playAgain();
    }

    if (parseFloat(dealerSumValue.innerText) == 21) 
    {
        winorLose.innerText = 'Dealer gets 21! You lose!'
        playAgain();
    }
}

const playAgain = () => {
    cardChoices = [1,2,3,4,5,6,7,8,9,10,10,10,11]
    hitButton.disabled = true;
    standButton.disabled = true;
    startButton.disabled = false;

    youCards.innerText = "";
    dealerCards.innerText = "";
    
    startButton.innerText = 'Play Again'
}
// Disable buttons before user can press start
hitButton.disabled = true;
standButton.disabled = true;
startButton.disabled = false;


const startGame = () => {
    cardChoices = [1,2,3,4,5,6,7,8,9,10,10,10,11]
    // Player Start
    let random = Math.floor(Math.random() * cardChoices.length); 
    let anotherRandom = Math.floor(Math.random() * cardChoices.length);
    this.youSum.innerText = cardChoices[random] + cardChoices[anotherRandom];
    youSum = this.youSum.innerText;
    youCards.innerText = cardChoices[random] + " " + cardChoices[anotherRandom];
    
    // Dealer Start
    let randomDealer = Math.floor(Math.random() * cardChoices.length);
    let anotherRandomDealer = Math.floor(Math.random() * cardChoices.length);
    this.dealerSum.innerText = cardChoices[randomDealer] + cardChoices[anotherRandomDealer];
    dealerSum = this.dealerSum.innerText;
    dealerCards.innerText = cardChoices[randomDealer] + " " + cardChoices[anotherRandomDealer];

    // Re-enable the main butts!
    hitButton.disabled = false;
    standButton.disabled = false;
    
    // Hide start button after start
    startButton.innerText = ''
    startButton.disabled = true;

    winorLose.innerText = ''
    
}

// Event listeners
hitButton.addEventListener("click", () => {
    hit();
});

standButton.addEventListener("click", () => {
    stand();
    stand();
});

startButton.addEventListener("click", () => {
    startGame();
});


