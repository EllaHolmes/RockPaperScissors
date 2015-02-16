function clickRock(){
	
	var num = randomNum();
	
	switch(num){
	case 0:	
		document.getElementById("instructions").textContent = "Computer picked Rock. It's a Tie!";
		break;
	case 1:
		document.getElementById("instructions").textContent = "Computer picked Paper. You Lose!";
		 break;
	case 2:
		document.getElementById("instructions").textContent = "Computer picked Scissors. You Win!";
		break;
	}
}

function clickPaper(){

	var num = randomNum();
	
	switch(num){
	case 0:
		document.getElementById("instructions").innerHTML = "Computer picked Rock. You Win!";
		break;
	case 1:
		document.getElementById("instructions").innerHTML = "Computer picked Paper. It's a Tie!";
		break;
	case 2:
		document.getElementById("instructions").innerHTML = "Computer picked Scissors. You Lose!";
		 break;
	}
}

function clickScissor(){

	var num = randomNum();
	
	switch(num){
	case 0:
		document.getElementById("instructions").innerHTML = "Computer picked Rock. You Lose!";
		 break;
	case 1:
		document.getElementById("instructions").innerHTML = "Computer picked Paper. You Win!";
		break;
	case 2:
		document.getElementById("instructions").innerHTML = "Computer picked Scissors. It's a Tie!";
		break;
	}
}


function randomNum(){
	var num = Math.floor( Math.random() * 3);
	return num;
}