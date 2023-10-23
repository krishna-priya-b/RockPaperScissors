
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore()

let computerMove= '';

function pickComputerMove(){
    const randomNumber= Math.random();
    

    if(randomNumber< 1/3){
        computerMove= 'Rock';
    }
    else if(randomNumber>= 1/3 && randomNumber< 2/3){
        computerMove= 'Paper';
    }
    else{
        computerMove= 'Scissors';
    }
    return(computerMove);
}

function game(myClick){
    pickComputerMove();
    let result = '';

    if(myClick === computerMove){
        result = 'Tie.';
    }
    else if(
        (myClick === 'Rock' && computerMove === 'Scissors') ||
        (myClick === 'Paper' && computerMove === 'Rock') ||
        (myClick === 'Scissors' && computerMove === 'Paper')
    ){
        result = 'You Win.';
    }
    else{
        result='You lose.';
    }



    if(result==='You Win.'){
        score.wins +=1;
    }
    else if (result==='You lose.'){
        score.losses +=1;
    }
    else if( result==='Tie.'){
        score.ties +=1;
    }

    //to store the score in the local storage.
    localStorage.setItem('score', JSON.stringify(score));


   updateScore();

   document.querySelector('.result').innerHTML= result;
   document.querySelector('.moves').innerHTML= `You: ${myClick}, Computer: ${computerMove}`;


}


function updateScore(){
    document.querySelector('.score').innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScore();
    document.querySelector('.result').innerHTML= '';
    document.querySelector('.moves').innerHTML= '';
}




