const matchPlayer = document.getElementById('match-player');
const matchComputer = document.getElementById('match-computer');
const matchResult = document.getElementById('match-result');

const scorePlayer = document.getElementById('score-player');
const scoreComputer = document.getElementById('score-computer');
let player = 0;
let computer = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) { return 'equals'; }

  const combinations = {
    paper: 'rock',
    rock: 'scissors', 
    scissors: 'paper'
  };

  if (typeof combinations[playerSelection] !== 'undefined'
  && combinations[playerSelection] === computerSelection) {
    player += 1;
    return 'greater-than';
  } else if (typeof combinations[computerSelection] !== 'undefined'
  && combinations[computerSelection] === playerSelection) {
    computer += 1;
    return 'less-than';
  }
}

function computerPlay() {
  const items = ['rock', 'paper', 'scissors'];

  return items[Math.floor(Math.random() * items.length)];
}

function cleanMatch() {
  matchPlayer.className = 'icons';
  matchComputer.className = 'icons';
  matchResult.className = 'icons';
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

  scorePlayer.innerHTML = `<i>${player}</i>`
  scoreComputer.innerHTML = `<i>${computer}</i>`

}

const playerAll = document.querySelectorAll('[data-player]');
playerAll.forEach(player => {
  player.addEventListener('click', handleClick);
});