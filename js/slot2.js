// what can they do
// what do they expect 
// what do they see 

// Set default reel images
document.querySelector('.reelOne').src = 'questionmark.png';
document.querySelector('.reelTwo').src = 'questionmark.png';
document.querySelector('.reelThree').src = 'questionmark.png';



// start balance with 2500 
    let balance = 2500
    let bet = 0
    document.querySelector('.balance').innerText = `Balance: $${balance}`;
    document.querySelector('.bet').innerText = `Bet: $${bet}`;


//20 bet click button
// event listener that call 20 bet function
    document.querySelector('.twenty').addEventListener('click', addTwenty)

//50 bet click button
    //event listener that calls 50 bet button
    document.querySelector('.fifty').addEventListener('click', addFifty)

//100 bet click button
    //event listener that calls 100 bet button
    document.querySelector('.oneHundred').addEventListener('click', addHundred)


// bet 20 function
    function addTwenty() {
        bet = 20
        document.querySelector('.bet').innerText = `Bet: $${bet}`
    }


// bet 50 function
    function addFifty() {
        bet = 50
        document.querySelector('.bet').innerText = `Bet: $${bet}`
}

// bet 100 function
function addHundred() {
        bet = 100
        document.querySelector('.bet').innerText = `Bet: $${bet}`    

}



//default reels
document.querySelector('.spin').addEventListener('click',spinReels)
let reelOne = document.querySelector('.reelOne').src = 'questionmark.png'
let reelTwo = document.querySelector('.reelTwo').src = 'questionmark.png'
let reelThree = document.querySelector('.reelThree').src = 'questionmark.png'


    //display result
//  directions for each reel to spin 
function spinReels() {

    if (bet === 0) {
        alert("Place a bet first!");
        return;
    }
    
    if (balance < bet) {
        alert("Not enough balance!");
        return;
    }
    
    
    balance -= bet;
    

    // Random numbers for each reel
    let randomOne = Math.floor(Math.random() * 5) + 1;
    let randomTwo = Math.floor(Math.random() * 5) + 1;
    let randomThree = Math.floor(Math.random() * 5) + 1;

    // Grab reel elements
    let reelOne = document.querySelector('.reelOne');
    let reelTwo = document.querySelector('.reelTwo');
    let reelThree = document.querySelector('.reelThree');

    // Symbol names for comparison
    let symbol1 = '';
    let symbol2 = '';
    let symbol3 = '';

    // Assign image and symbol1
    if (randomOne === 1) { reelOne.src = 'afroPick.png'; symbol1 = 'afroPick'; }
    else if (randomOne === 2) { reelOne.src = 'goldGrillz.png'; symbol1 = 'goldGrillz'; }
    else if (randomOne === 3) { reelOne.src = 'lavaLamp.png'; symbol1 = 'lavaLamp'; }
    else if (randomOne === 4) { reelOne.src = 'anhk.png'; symbol1 = 'anhk'; }
    else if (randomOne === 5) { reelOne.src = 'sweetPotatoPie.png'; symbol1 = 'sweetPotatoPie'; }

    // Assign image and symbol2
    if (randomTwo === 1) { reelTwo.src = 'afroPick.png'; symbol2 = 'afroPick'; }
    else if (randomTwo === 2) { reelTwo.src = 'goldGrillz.png'; symbol2 = 'goldGrillz'; }
    else if (randomTwo === 3) { reelTwo.src = 'lavaLamp.png'; symbol2 = 'lavaLamp'; }
    else if (randomTwo === 4) { reelTwo.src = 'anhk.png'; symbol2 = 'anhk'; }
    else if (randomTwo === 5) { reelTwo.src = 'sweetPotatoPie.png'; symbol2 = 'sweetPotatoPie'; }

    // Assign image and symbol3
    if (randomThree === 1) { reelThree.src = 'afroPick.png'; symbol3 = 'afroPick'; }
    else if (randomThree === 2) { reelThree.src = 'goldGrillz.png'; symbol3 = 'goldGrillz'; }
    else if (randomThree === 3) { reelThree.src = 'lavaLamp.png'; symbol3 = 'lavaLamp'; }
    else if (randomThree === 4) { reelThree.src = 'anhk.png'; symbol3 = 'anhk'; }
    else if (randomThree === 5) { reelThree.src = 'sweetPotatoPie.png'; symbol3 = 'sweetPotatoPie'; }

    // Compare symbols to see if all three match
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        balance += bet * 10;
        document.querySelector('.winner').innerText = '✨ You Win!! ✨';
    } else {
        balance -= bet;
        document.querySelector('.winner').innerText = 'Try again, winning is in your future!';
    }

    // Update the balance display
    document.querySelector('.balance').innerText = `Balance: $${balance}`;
}



// RESET BUTTON FUNCTION
document.querySelector('.reset').addEventListener('click', resetReels);

function resetReels() {
    // Reset balance and bet
    balance = 2500;
    bet = 0;

    // Reset DOM
    document.querySelector('.balance').innerText = `Balance: $${balance}`;
    document.querySelector('.bet').innerText = `Bet: $${bet}`;
    document.querySelector('.winner').innerText = "";

    // Reset reel images
    let reelOne = document.querySelector('.reelOne');
    let reelTwo = document.querySelector('.reelTwo');
    let reelThree = document.querySelector('.reelThree');

    reelOne.src = 'questionmark.png';
    reelTwo.src = 'questionmark.png';
    reelThree.src = 'questionmark.png';
}
