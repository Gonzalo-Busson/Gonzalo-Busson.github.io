let userScore = 0 ;
let computerScore = 0;
const userSctore_span = document.getElementById('user-score');
const computerScore_span= document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scrore-board');
const result_p = document.querySelector('.result > p');
const rock_div= document.getElementById('r');
const paper_div= document.getElementById('p');
const scissor_div= document.getElementById('s');

function getComputerChoice() {
	const choice = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choice[randomNumber];
}
function convertToWord(letter){
	if (letter === 'r') return'Rock';
	if (letter === 's') return'Scissor';
	else return 'Paper'
}

function wins(userChoice ,computerChoice ) {
	userScore++;
	userSctore_span.innerHTML = userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML=`${convertToWord(userChoice)}  beats   ${convertToWord(computerChoice)}. You win!`;
	document.getElementById(userChoice).classList.add('green-glow');

	setTimeout(()=> document.getElementById(userChoice).classList.remove('green-glow'),500);

}

function lose(userChoice,computerChoice){
	computerScore++;
	userSctore_span.innerHTML = userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML=`${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You Lose!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(()=> document.getElementById(userChoice).classList.remove('red-glow'),500);

}

function drow(userChoice,computerChoice){
	userSctore_span.innerHTML = userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML= `${convertToWord(computerChoice)} equals  ${convertToWord(userChoice)}. Its a draw!`;
	document.getElementById(userChoice).classList.add('grey-glow');

	setTimeout(()=> document.getElementById(userChoice).classList.remove('grey-glow'),500);

}
function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice+computerChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			wins(userChoice,computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice,computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			drow(userChoice,computerChoice);
			break;

	}
}

function main () {
	paper_div.addEventListener('click', () => game('p'));

	scissor_div.addEventListener('click', ()=> game('s'));

	rock_div.addEventListener('click', () => game('r'));
}

main();



