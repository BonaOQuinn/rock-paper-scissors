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