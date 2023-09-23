function getComputerChoise() {
   const getComputerSelection = ["rock", "paper, Scissors" ];

   const ramdon = Math.floor(Math.random() * cPSlection.length);
   return cPSlection [random];
}

function game () {
   const playerselection = prompt ("please chose beetween 'rock', 'paper', or 'scissors':")
   const getComputerSelection = getComputerChoise();
   let playerpoints = 0;
   let computerpoints = 0;

   function playRound(playerselection, getComputerSelection) {
      if (playerselection === getComputerSelection) {
         console.log(`tie! ${playerselection} is equal than ${ComputerSelection}` );
      }
      else if ((playerselection === 'scissors'&& ComputerSelection === 'paper') 
      ||

      (playerselection === 'paper' && ComputerSelection === 'rock')
      ||
      (playerselection === 'rock' && ComputerSelection === 'scissors')) {
         playerpoints++;
         console.log(`you win!  ${playerselection} beats $ {computerSelection}`);
      }
   {
      playRound(playerselection.toLocalelowerCase(),
      ComputerSelection);

      }
      function gameloop() {
         for (let i = 0; i < 10; i++) {
            if (playerpoints > 4) {
               return `ganaste ${playerpoints} and computer have ${computerpoints}`;

            }
            game();
         }
      }
   }

   gameLoop();
}