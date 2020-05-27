const matchPlayer = document.getElementById('match-player');
const matchComputer = document.getElementById('match-computer');
const matchResult = document.getElementById('match-result');

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) { return 'equals'; }

  const combinations = {
    paper: 'rock',
    rock: 'scissors', 
    scissors: 'paper'
  };

  if (typeof combinations[playerSelection] !== 'undefined'
  && combinations[playerSelection] === computerSelection) {
    return 'greater-than';
  } else if (typeof combinations[computerSelection] !== 'undefined'
  && combinations[computerSelection] === playerSelection) {
    return 'less-than';
  }
}

function computerPlay() {
  const items = ['rock', 'paper', 'scissors'];

  return items[Math.floor(Math.random() * items.length)];
}

function cleanMatch() {
  matchPlayer.className = 'separator';
  matchComputer.className = 'separator';
  matchResult.className = 'separator';
}

function handleClick(e) {
  const selected = e.target;
  cleanMatch();

  const computerSelection = computerPlay();
  const playerSelection = selected.dataset.value;
  const playResult = playRound(playerSelection, computerSelection);

  // Match result
  matchPlayer.innerHTML = `<i class="far fa-hand-${playerSelection}"></i>`;
  matchResult.innerHTML = `<i class="fas fa-${playResult}"></i>`;
  matchComputer.innerHTML = `<i class="far fa-hand-${computerSelection}"></i>`;

}

const playerAll = document.querySelectorAll('[data-player]');
playerAll.forEach(player => {
  player.addEventListener('click', handleClick);
});