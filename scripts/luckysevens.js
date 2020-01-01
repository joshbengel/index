
function startBet(display){
	var start=prompt(display);
	start=Number(start);
	if(isNaN(start) || start<0 ){
		start=startBet("Error: input not a number greater than 0. Please re-enter your starting bet");
		
		}
	else{
			start=start.toFixed(2);
			document.getElementById("square_output").innerHTML= "$"+start;
			if(start>0.0){
				start=playGame(start);
			}
			

		}
		
	}
			
function rollDice(){
	return Math.floor(Math.random() * 6) +1;
	}

function playGame(num){
var starting=num;
var max=num;
var rolls=0;
var rollsMax=0;
while(num>0.00){
	var d1=rollDice();
	var d2=rollDice();
	var sum= d1+d2;
	if(sum==7){
		num=num+4.00;
		rolls++;
		if(max<num){
			max=num;
			rollsMax=rolls;
		}
	}
	else{
		num=num-1;
		rolls++;
		}
	}

printTable(starting,rolls,max,rollsMax);
}

function printTable(start,rolls,max,rollsMax){
	document.getElementById("resulttable").style.display="block";
	document.getElementById("sb").innerText=start;
	document.getElementById("rolls").innerText=rolls;
	document.getElementById("max").innerText=max.toFixed(2);
	document.getElementById("rollsMax").innerText=rollsMax;
}
	
