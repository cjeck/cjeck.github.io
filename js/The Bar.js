var counter = 0;
var x;

function timer(){
	counter++;
	if (counter == 3){
		alert("Bouncer: Who's there?!");
		var x = prompt("Bouncer: You, how old are you?");
		document.querySelector("button").disabled = true;
	  if (x < 0 || isNaN(Number(x))){
		alert("Bouncer: Are you kidding me!? Get out of my sight!");
		var par = document.createElement("P");
		par.innerHTML="Leave before I call the cops, weirdo!!";
		document.querySelector(".wrapper").appendChild(par);
	  }
	  else if (x < 18){
		alert("Bouncer: Get off, loser!");
		var par = document.createElement("P");
		par.innerHTML="Leave before I call your parents, loser!";
		document.querySelector(".wrapper").appendChild(par);
	  }
	  else if (x == 21){
		alert("Bouncer: Alright, happy 21st birthday!!");
		var par = document.createElement("P");
		par.innerHTML="Come on in and Enjoy!!!";
		document.querySelector(".wrapper").appendChild(par);
	  }
	  else if (x > 21 && (Math.sqrt(x) % 1 == 0)){
		alert("Bouncer: Woah! Such a perfect age!!!");
		var par = document.createElement("P");
		par.innerHTML="Come on in and Enjoy!!!";
		document.querySelector(".wrapper").appendChild(par);
	  }
	  else if (x > 21 && (x % 2 == 0)){
		alert("Bouncer: An even age.. Great! Come on in!");
		var par = document.createElement("P");
		par.innerHTML="Come on in and Enjoy!!!";
		document.querySelector(".wrapper").appendChild(par);
	  }
	  else if (x > 21 && (x % 2 == 1)){
		alert("Bouncer: Such an odd age... get it?");
		var par = document.createElement("P");
		par.innerHTML="Come on in and Enjoy!!!";
		document.querySelector(".wrapper").appendChild(par);
	  }
	  else
	  console.log("Ding---dong...")
	}
}
