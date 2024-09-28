// Function to get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice! Please select rock, paper, or scissors.');
    }
  };
  
  // Function to get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
    if (userChoice === 'rock') {
      return computerChoice === 'scissors' ? 'You win!' : 'Computer wins!';
    }
    if (userChoice === 'paper') {
      return computerChoice === 'rock' ? 'You win!' : 'Computer wins!';
    }
    if (userChoice === 'scissors') {
      return computerChoice === 'paper' ? 'You win!' : 'Computer wins!';
    }
  };
  
  // Function to start the game
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // Replace 'rock' with your choice
    const computerChoice = getComputerChoice();
  
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  