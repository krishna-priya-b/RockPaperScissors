let computerMove= '';

function pickComputerMove(){
    const randomNumber= Math.random()
    

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
    pickComputerMove()
    let result = '';

    if(myClick === computerMove){
        result = 'Tie';
    }
    else if(
        (myClick === 'Rock' && computerMove === 'Scissors') ||
        (myClick === 'Paper' && computerMove === 'Rock') ||
        (myClick === 'Scissors' && computerMove === 'Paper')
    ){
        result = 'You Win';
    }
    else{
        result='You lose'
    }
 
    alert('You picked '+ myClick + ' Computer picked '+computerMove+'. '+ result);
}
