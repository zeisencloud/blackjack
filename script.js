// Version 1.0


let dealerSum = 0
let youSum = 0

let playerWins = 0
let dealerWins = 0
// Cards 2-10 are face value
// Jack, Queen, King are worth 10.
// Ace is either 1 or 11, player's choice
const cardChoices = [1,2,3,4,5,6,7,8,9,10,10,10,11]
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
    let random = Math.floor(Math.random() * cardChoices.length)
    youSumValue.innerText = parseFloat(this.youSum.innerText) + parseFloat(cardChoices[random])

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
    let random = Math.floor(Math.random() * cardChoices.length)
    dealerSumValue.innerText = parseFloat(this.dealerSum.innerText) + parseFloat(cardChoices[random])

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
    hitButton.disabled = true;
    standButton.disabled = true;

    startButton.disabled = false;
    startButton.innerText = 'Play Again'
}
// Disable buttons before user can press start
hitButton.disabled = true;
standButton.disabled = true;
startButton.disabled = false;

const startGame = () => {
    // Player Start
    let random = Math.floor(Math.random() * cardChoices.length) // Pick two random numbers for starting deck
    this.youSum.innerText = cardChoices[random] + cardChoices[random]
    youSum = this.youSum.innerText
    
    // Dealer Start
    let randomDealer = Math.floor(Math.random() * cardChoices.length)
    this.dealerSum.innerText = cardChoices[randomDealer] + cardChoices[randomDealer]
    dealerSum = this.dealerSum.innerText

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
});

startButton.addEventListener("click", () => {
    startGame();
});


