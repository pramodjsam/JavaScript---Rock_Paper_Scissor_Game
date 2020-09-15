const game= function(){
	let pScore=0;
	let cScore=0;

	const startGame= function(){
		const playBtn= document.querySelector(".intro button");
		const introScreen= document.querySelector(".intro");
		const match= document.querySelector(".match");

		playBtn.addEventListener("click",function(){
			introScreen.classList.add("fadeout");
			match.classList.add('fadein')
		})
	}

	const playMatch= function(){
		const options= document.querySelectorAll(".options button");
		const playerHand= document.querySelector(".player-hand");
		const computerHand= document.querySelector(".computer-hand");
		const hands= document.querySelectorAll(".hands img");

		hands.forEach(function(hand){
			hand.addEventListener("animationend",function(){
				this.style.animation="";
			})
		})

		const computerOptions= ["rock","paper","scissors"];
		options.forEach(function(option){
			option.addEventListener("click",function(){
				const computerNumber= Math.floor(Math.random()*3);
				const computerChoice= computerOptions[computerNumber];
				setTimeout(function(){
					compareHands(this.textContent,computerChoice);
					playerHand.src=`./assets/${this.textContent}.png`;
					computerHand.src=`./assets/${computerChoice}.png`
				}.bind(this),2000);
				

				playerHand.style.animation="shakePlayer 2s ease";
				computerHand.style.animation="shakeComputer 2s ease";
			})
		})		
	}

	const updateScore= function(){
		const playerScore= document.querySelector(".player-score p");
		const computerScore= document.querySelector(".computer-score p");
		playerScore.innerHTML= pScore;
		computerScore.innerHTML= cScore;
	}

	const compareHands= function(playerChoice,computerChoice){
		const winner= document.querySelector(".winner");
		if(playerChoice === computerChoice){
			winner.innerHTML="It's a tie";
			return
		}

		//check for rock
		if(playerChoice==="rock"){
			if(computerChoice==="scissors"){
				winner.innerHTML="Player wins";
				pScore++;
				updateScore();
				return
			}else{
				winner.innerHTML="Computer wins";
				cScore++;
				updateScore();
				return
			}
		}

		//check for paper
		if(playerChoice==="paper"){
			if(computerChoice==="scissors"){
				winner.innerHTML="Compuer wins";
				cScore++;
				updateScore();
				return
			}else{
				winner.innerHTML="Player wins";
				pScore++;
				updateScore();
				return
			}
		}

		//check for scissors
		if(playerChoice==="scissors"){
			if(computerChoice==="rock"){
				winner.innerHTML="Computer wins";
				cScore++;
				updateScore();
				return
			}else{
				winner.innerHTML="Player wins";
				pScore++;
				updateScore();
				return
			}
		}
	}

	startGame();
	playMatch();
}

game();