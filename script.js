const choice = ["rock","paper","scissor"];
const buttons = document.querySelectorAll('.button')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const textComputer = document.querySelector('.textPc');
const textPlayer = document.querySelector('.textPl');
const scoreComputer = document.querySelector('.scorePc');
const scorePlayer = document.querySelector('.scorePl');
const sentence = document.querySelector('.result');
let round = 0;
let playerScore = 0;
let computerScore =0;

//Random Choice
function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}



//User input
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            const playerChoice = button.getAttribute('id');
            const computerChoice = getComputerChoice(choice);

            playGame(playerChoice, computerChoice);
            
        })
    })

function playGame(player, computer){
    if(round < 5){
            //Computer moves
        if (computer == 'rock'){
            textComputer.textContent += "✊ "
        }
        if (computer == 'paper'){
            textComputer.textContent += "🤚 "
        }
        if (computer == 'scissor'){
            textComputer.textContent += "🖖 "
        }

    //Player moves
        if (player == 'rock'){
            textPlayer.textContent += "✊ "
        }
        if (player == 'paper'){
            textPlayer.textContent += "🤚 "
        }
        if (player == 'scissor'){
            textPlayer.textContent += "🖖 "
        }

        //game
        if(player == computer){
            sentence.innerHTML="Tie game!"
            setTimeout( () => sentence.innerHTML ="", 1000 );
            playerScore+=1;
            computerScore+=1
            updateScore()
        }
        if(
            (player == "rock" && computer =="scissor") || 
            (player == "scissor" && computer =="paper") || 
            (player == "paper" && computer =="rock") 
        ){
            sentence.innerHTML="Player Win!"
            setTimeout( () => sentence.innerHTML ="", 1000 );
            playerScore+=1;
            updateScore();
        }
        if(
        (computer == "rock" && player =="scissor") || 
        (computer == "scissor" && player =="paper") || 
        (computer == "paper" && player =="rock") 
    ){
        sentence.innerHTML="Computer Win!"
        setTimeout( () => sentence.innerHTML ="", 1000 );
        computerScore+=1;
        updateScore();
    }  
    round+=1;
    console.log(round)
    }
}
    
    function updateScore(player, computer){
        console.log("score pl", playerScore);
        console.log("score pc", computerScore);
        scoreComputer.innerHTML = computerScore;
        scorePlayer.innerHTML = playerScore;
        }
