function homebutton() {
    window.location.href = 'Home.html';
}

let yourWin = 0;
let computerWin = 0;
let tieMatch = 0;

function rock() {
    clearresult();
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove = 'rock';
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'rock') {
        result = 'tie';
    } else if (computerMove === 'paper') {
        result = 'you lose';
    } else {
        result = 'you won';
    }
    

    if (result === 'you won') {
        yourWin++;
    } else if (result === 'you lose') {
        computerWin++;
    } else {
        tieMatch++;
    }
    document.getElementById('yourwinnings').textContent = yourWin;
    document.getElementById('computerwinnings').textContent = computerWin;
    document.getElementById('tiematches').textContent = tieMatch;

    function displayScore(){
        document.getElementById('yoursmove').textContent = 'Rock';
         document.getElementById('computersmove').textContent=computerMove;
         document.getElementById('outcomeresult').textContent=result;
    }
    displayScore();
    

}

function paper() {
    clearresult();
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove = 'rock';
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'rock') {
        result = 'you won';
    } else if (computerMove === 'paper') {
        result = 'tie';
    } else {
        result = 'you lose';
    }
    

    if (result === 'you won') {
        yourWin++;
    } else if (result === 'you lose') {
        computerWin++;
    } else {
        tieMatch++;
    }
    document.getElementById('yourwinnings').textContent = yourWin;
    document.getElementById('computerwinnings').textContent = computerWin;
    document.getElementById('tiematches').textContent = tieMatch;

    function displayScore(){
        document.getElementById('yoursmove').textContent = 'Paper';
         document.getElementById('computersmove').textContent=computerMove;
         document.getElementById('outcomeresult').textContent=result;
    }
    displayScore();
    

    
}

function scissors() {
    clearresult();
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove = 'rock';
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'rock') {
        result = 'you lose';
    } else if (computerMove === 'paper') {
        result = 'you won';
    } else {
        result = 'tie';
    }
    

    if (result === 'you won') {
        yourWin++;
    } else if (result === 'you lose') {
        computerWin++;
    } else {
        tieMatch++;
    }
    document.getElementById('yourwinnings').textContent = yourWin;
    document.getElementById('computerwinnings').textContent = computerWin;
    document.getElementById('tiematches').textContent = tieMatch;

    function displayScore(){
        document.getElementById('yoursmove').textContent = 'Rock';
         document.getElementById('computersmove').textContent=computerMove;
         document.getElementById('outcomeresult').textContent=result;
    }
    displayScore();
}


function clearresult(){
    document.getElementById('yoursmove').innerHTML="";
    document.getElementById('computersmove').innerHTML="";
    document.getElementById('outcomeresult').innerHTML="";
}

function reset(){
    document.getElementById('yourwinnings').innerHTML="0";
    document.getElementById('computerwinnings').innerHTML="0";
    document.getElementById('tiematches').innerHTML="0";
    clearresult();
}

