/*RockPaperSciss.js */

//this function is going to return 1 of three values based on the number generated
        function getComputerChoice() {
            const stringOne = "rock"; 
            const stringTwo = "paper"; 
            const stringThree = "scissors"; 

            let randNum = Math.floor(Math.random() * 3); //Math.floor rounds to nearest whole num

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

        document.getElementById("userSubmit").onclick = function getHumanChoice() {
            userMove = document.getElementById("userInput").value;
            console.log(userMove);
        }

        

        
         