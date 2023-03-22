let botScore = 0
let playerScore = 0
document.getElementById("rock").addEventListener('click', playerThrowsRock);
document.getElementById('scissors').addEventListener('click',playerThrowsScissors);
document.getElementById('paper').addEventListener('click',playerThrowsPaper) ;

function playerThrowsRock() {
	const botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors() {
	const botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors")
}
function playerThrowsPaper() {
	const botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon, "paper")
}
function getRandomWeapon() {
	const randomNumber=Math.random();
	const botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon) {
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore() {
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore() {
 playerScore+=1;
 document.getElementById("humanScore").innerHTML=playerScore;
 displayCompleteMessage('You Won!');
}
function displayCompleteMessage(msg) {
	document.getElementById("status").innerHTML=msg;
}