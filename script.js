// Function to simulate rolling a single die
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice values and total
function updateDice() {
  const dice = document.querySelectorAll('.die');
  const total = document.querySelector('p');
  
  const dice1 = rollDie();
  const dice2 = rollDie();
  const totalDice = dice1 + dice2;

  dice[0].textContent = `Die 1: ${dice1}`;
  dice[1].textContent = `Die 2: ${dice2}`;
  total.textContent = `Total: ${totalDice}`;
}

document.getElementById('button').addEventListener('click', updateDice);