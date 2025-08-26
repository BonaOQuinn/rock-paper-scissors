/*RockPaperSciss.js */

//this function is going to return 1 of three values based on the number generated
        let randNum; 
        function getComputerChoice() {
            const stringOne = "rock"; 
            const stringTwo = "paper"; 
            const stringThree = "scissors"; 

            randNum = Math.floor(Math.random() * 3); //Math.floor rounds to nearest whole num

            if (randNum == 0) {
                return stringOne; 
            }

            else if (randNum == 1) {
                return stringTwo;
            }

            else {
                return stringThree;
            }

        }

        /*this gets input from the user */
        /*when the user clicks the submit button, the function 
          getHumanChoice is called. Within that function, the 
          userMove var is updated to wtv the user types in the
          text box.*/
        let userMove;
        let newUserMove;

        /*document.getElementById("userSubmit").onclick = function getHumanChoice() {
            userMove = document.getElementById("userInput").value;
            newUserMove = userMove.toLowerCase(); //changes all letters to lower case
            console.log(newUserMove);
        } */

        function getHumanChoice() {
            userMove = window.prompt("Choose your move: Rock, Paper, Or Scissors");
            newUserMove = userMove.toLowerCase(); 
            return newUserMove;
        }

        
        /*let humanScore = 0; 
          let computerScore = 0;

        function playRound(humanChoice, compChoice) {
            if (humanChoice == "rock" && compChoice == "scissors" || humanChoice == "scissors" && compChoice == "paper" || humanChoice == "paper" && compChoice == "rock") {
                humanScore = humanScore + 1; 
                console.log(`Human wins that round, the score is now Human: ${humanScore} Computer: ${computerScore}`);
            }

            else if (compChoice == "rock" && humanChoice == "scissors" || compChoice == "scissors" && humanChoice == "paper" || compChoice == "paper" && humanChoice == "rock") {
                computerScore = computerScore + 1; 
                console.log(`Computer wins that round, the score is now Computer: ${computerScore} Human: ${humanScore}`);
            }

            else {
                console.log("It is a tie!!")
            }

            console.log(humanChoice + " " + compChoice);

        }

        const humanSelection = getHumanChoice(); 
        const compSelection = getComputerChoice();

        playRound(humanSelection, compSelection); */




        /*This function will exectute so that the rock paper scissors game is played for 5 rounds */
        function playGame() {

            /*single round function declaration*/
            let humanScore = 0; 
            let computerScore = 0;

            function playRound(humanChoice, compChoice) {
            if (humanChoice == "rock" && compChoice == "scissors" || humanChoice == "scissors" && compChoice == "paper" || humanChoice == "paper" && compChoice == "rock") {
                humanScore = humanScore + 1; 
                console.log(`Human wins that round, the score is now Human: ${humanScore} Computer: ${computerScore}`);
            }

            else if (compChoice == "rock" && humanChoice == "scissors" || compChoice == "scissors" && humanChoice == "paper" || compChoice == "paper" && humanChoice == "rock") {
                computerScore = computerScore + 1; 
                console.log(`Computer wins that round, the score is now Computer: ${computerScore} Human: ${humanScore}`);
            }

            else {
                console.log("It is a tie!!")
            }

            console.log(humanChoice + " " + compChoice);
            console.log(humanScore + " " + computerScore);


        }

        /*
        for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice(); //every time the for loop is ran, humanSelection call getHumanChoice() to return a new move each round.
        const compSelection = getComputerChoice();
        playRound(humanSelection, compSelection);
        }

        if (humanScore > computerScore) {
            console.log('Human wins the game!');
        }

        else {
            console.log('Computer wins the game!');
        }
        */
       


    }

    /*Further UI implementation: 
        - the game will start when the user selects start game 
        - initialize counter for user score and computer score
        - the computer will make its choice of the move for that round
        - the user will be prompted with 'rock' 'paper' 'scissors' buttons to make their choice
        - the winner of that round will be displayed along with the moves made by the user and computer
        - the game will until user or comp reaches 5 points / score will be reset to 0  / new game button will prompt user
    */

    let container = document.querySelector("div"); //container buttons will appened / removed from
    let button = document.querySelector("button"); //main button on html page


    button.addEventListener("click", () => {

        container.removeChild(button); 

        let rock = document.createElement("button"); 
        rock.textContent = "ROCK"; 
        
        let paper = document.createElement("button"); 
        paper.textContent = "PAPER"; 

        let scissors = document.createElement("button"); 
        scissors.textContent = "SCISSORS"; 

        container.appendChild(rock); 
        container.appendChild(paper);
        container.appendChild(scissors);

        let userScore = 0; //scores are initialized 
        let compScore = 0; 
        
        rock.addEventListener("click", () => {
            let userMove = "rock"; 
            let compMove = getComputerChoice(); 

            if (compMove == "paper") {
                ++compScore;
                console.log(`Your move: ${userMove} Computer move: ${compMove}`); 
                console.log("Computer wins this round"); 
                console.log(`Your score:${userScore} Computer Score:${compScore}`);
            }

            else if (compMove == "scissors") {
                ++userScore; 
                console.log(`Your move: ${userMove} Computer move: ${compMove}`); 
                console.log("You win this round"); 
                console.log(`Your score:${userScore} Computer Score:${compScore}`); 
            }

            else {
                console.log(`Your move: ${userMove} Computer move: ${compMove}`);
                console.log('This round is a tie');
            }

            if (userScore == 5) {
            restartGame(); 
            console.log("You win the game!"); 
        }

        else if (compScore == 5) {
            restartGame(); 
            console.log("Computer wins the game!"); 
           }
    
        })


        paper.addEventListener("click", () => {
            let userMove = "paper"; 
            let compMove = getComputerChoice();

            if (compMove == "scissors") {
                ++compScore;
                console.log(`Your move: ${userMove} Computer move: ${compMove}`); 
                console.log("Computer wins this round"); 
                console.log(`Your score:${userScore} Computer Score:${compScore}`);
            }

            else if (compMove == "rock") {
                ++userScore; 
                console.log(`Your move: ${userMove} Computer move: ${compMove}`); 
                console.log("You win this round"); 
                console.log(`Your score:${userScore} Computer Score:${compScore}`); 
            }

            else {
                console.log(`Your move: ${userMove} Computer move: ${compMove}`);
                console.log('This round is a tie');
            }            

            if (userScore == 5) {
            restartGame(); 
            console.log("You win the game!"); 
        }

        else if (compScore == 5) {
            restartGame(); 
            console.log("Computer wins the game!"); 
           }


            
        })

        scissors.addEventListener("click", () => {
            let userMove = "scissors"; 
            let compMove = getComputerChoice(); 

            if (compMove == "rock") {
                ++compScore;
                console.log(`Your move: ${userMove} Computer move: ${compMove}`); 
                console.log("Computer wins this round"); 
                console.log(`Your score:${userScore} Computer Score:${compScore}`);
            }

            else if (compMove == "paper") {
                ++userScore; 
                console.log(`Your move: ${userMove} Computer move: ${compMove}`); 
                console.log("You win this round"); 
                console.log(`Your score:${userScore} Computer Score:${compScore}`); 
            }

            else {
                console.log(`Your move: ${userMove} Computer move: ${compMove}`);
                console.log('This round is a tie');
            }


            if (userScore == 5) {
            restartGame(); 
            console.log("You win the game!"); 
           }

           else if (compScore == 5) {
            restartGame(); 
            console.log("Computer wins the game!"); 
           }
        })


        /* let restartGame = () => {
            container.removeChild(rock); 
            container.removeChild(paper); 
            container.removeChild(scissors); 

            userScore = 0; 
            compScore = 0; 

            let newGame = document.createElement("button"); 
            newGame.textContent = "NEW GAME"; 
            container.appendChild(newGame); 

            newGame.addEventListener("click", )
        } */



        



        

        
            
    })
    

    playGame(); 

        
         