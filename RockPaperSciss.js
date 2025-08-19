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

        for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice(); /*every time the for loop is ran, humanSelection call getHumanChoice() to return a new move each round. */
        const compSelection = getComputerChoice();
        playRound(humanSelection, compSelection);
        }

        if (humanScore > computerScore) {
            console.log('Human wins the game!');
        }

        else {
            console.log('Computer wins the game!');
        }



    }

    playGame(); 

        
         