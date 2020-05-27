function playRound(playerSelection, computerSelection) {
  console.log({
    playerSelection,
    computerSelection
  });
  if (playerSelection === computerSelection) { return 'draw'; }

  const combinations = {
    paper: 'rock',
    rock: 'scissors', 
    scissors: 'paper'
  };

  if (typeof combinations[playerSelection] !== 'undefined'
  && combinations[playerSelection] === computerSelection) {
    return 'player';
  } else if (typeof combinations[computerSelection] !== 'undefined'
  && combinations[computerSelection] === playerSelection) {
    return 'computer';
  }
}

function computerPlay() {
  const items = ['rock', 'paper', 'scissors'];

  return items[Math.floor(Math.random() * items.length)];
}

function handleClick(e) {
  console.log('clicked', e);
  const selected = e.target;
  selected.classList.add('selected');

  const computerSelection = computerPlay();
  const playerSelection = selected.dataset.player;
  console.log(playRound(playerSelection, computerSelection));
}

const playerAll = document.querySelectorAll('[data-player]');
playerAll.forEach(player => {
  player.addEventListener('click', handleClick);
});