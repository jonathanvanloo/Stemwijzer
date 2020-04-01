window.onload = start();

	var	statement = document.querySelector("#statement");
	var	title = document.querySelector("#title");
	var	button_agree = document.querySelector("#button-eens");
	var	button_disagree = document.querySelector("#button-oneens");
	var	button_unknown = document.querySelector("#button-geen");
	var back = document.querySelector("#backbutton");
	var all_buttons = document.querySelector(".vragenbuttons");
	var score;



function start(){
	var statement = subjects[0].statement;	
	var title = subjects[0].title;
	document.getElementById("title").innerHTML = title;
	document.getElementById("statement").innerHTML = statement;
	showPartyOpinion();
}

function showPartyOpinion(){

for (var subjectsNR = 0; subjectsNR < subjects.length; subjectsNR++){
	for (var partiesNR = 0; partiesNR < parties.length; partiesNR++){

		var partyposition = subjects[subjectsNR].parties[partiesNR].position;
		var partyname = subjects[subjectsNR].parties[partiesNR].name;
		var partyopinion = subjects[subjectsNR].parties[partiesNR].opinion;	

		var party = document.createElement("DETAILS");
		party.className = "partijstatement";

		var partysummary = document.createElement("SUMMARY");
		var partysummarytext = document.createTextNode(partyname);
		partysummary.appendChild(partysummarytext);

		var partylong = document.createElement("P");
		var partylongtext = document.createTextNode(partyopinion);
		partylong.appendChild(partylongtext);

		party.appendChild(partysummary);
		party.appendChild(partylong);

		if (partyposition == 'pro') {
			document.getElementById('meningeens').appendChild(party);
		} else if (partyposition == 'contra') {
			document.getElementById('meningoneens').appendChild(party);
		} else {
			document.getElementById('meninggeen').appendChild(party);
		}
		}
	}
}

function nextQuestion() {
	subjectsNR++;
	partiesNR++;
}






// function showQuestion(){

// for (subjectsNR = 0; subjectsNR < subjects.length; subjectsNR++){
// 	console.log(subjects[subjectsNR].title);
// 	console.log(subjects[subjectsNR].statement);
// }	
// 	var statement = subjects[0].statement;	
// 	var title = subjects[0].title;
// 	document.getElementById("title").innerHTML = title;
// 	document.getElementById("statement").innerHTML = statement;
// }
