var hourin, minin, sin, mer;
var rate, counter;
var done, remove;

var taskCounter = 0;
var shift = 0;
var dandr = 0;
var td = 0;

var taskArray, compArray = [];

var ct = setInterval(cTime, 100);

var notice = document.querySelector(".notice");
var usertimein = document.querySelector(".usertimein");
var usertimeout = document.querySelector(".usertimeout");
var greetings = document.querySelector(".greetings")

var taskButton = document.querySelector(".taskButton");

var taskToday = document.querySelector(".taskToday");
var scheduler = document.querySelector(".scheduler");

var taskDone = document.querySelector(".taskDone");
var completedToday = document.querySelector(".completedToday");

function login(){
	task.disabled = false;
	document.getElementById("taskButton").disabled = false;
	document.getElementById("logoff").disabled = false;
	document.getElementById("login").disabled = true;
	greetings.textContent = "Welcome Intern!";
	notice.textContent = "You have now logged-in. Please note that your rate is $3 per hour. Don't worry, we calculate by the minute with additional 30% rate for overtime.";
	
	counter = setInterval(function(){
		shift++;
	},60000);
	
	inandout();
	usertimein.textContent = "Time in: " + hourin + ":" + minin + ":" + sin + " " + mer;
	usertimein.style.color = "green";
	usertimeout.textContent = "";
	taskArray = [];
	compArray = [];
	taskCounter = 0;
	dandr = 0;
	td = 0;
	alert('You are now logged-in.');
}

function logoff(){
	task.disabled = true;
	document.getElementById("taskButton").disabled = true;
	document.getElementById("login").disabled = false;

	if (shift > 480){
		rate = (24 + ((shift-480) * 0.065)).toFixed(2);
		shift = 0;
		clearInterval(counter);
	}
	else
		rate = (shift * 0.05).toFixed(2);
		shift = 0;
		clearInterval(counter);

	if ((taskCounter - td) == 1){
		alert("You have some unfinished task. Have it done by tomorrow.");
	}
	else if (td == 0) {
		alert("You didn't do anything today!");
	}
	else if ((taskCounter - td) > 1){
		alert("You let some unfinished tasks. Get it done by tomorrow!");	
	}
	else if (taskCounter == 0){
		alert("Congratulations! You have finished all your tasks today!");
	}

	rusure();
	inandout();
	usertimeout.textContent = "Time out: " + hourin + ":" + minin + ":" + sin + " " + mer;
	usertimeout.style.color = "red";
	task.value = "";
	scheduler.textContent = "";
	taskDone.textContent = "";
	document.querySelector(".makesure").style.display = "none";
	notice.textContent = "You are now logged-off. Please login again to start. Your earning for your last session is: $" + rate;
	document.getElementById("logoff").disabled = true;
	done.parentNode.removeChild(done);
	remove.parentNode.removeChild(remove);
	
}

function inandout(){
	var t = new Date();
	var th = (t.getHours())*100;
	var tm = t.getMinutes();
	var ts = t.getSeconds();
	mer = 0;
	hourin = (th > 1200)? ((th-1200)/100):(th/100);
	minin = (tm < 10)? ("0"+tm):(tm);
	sin = (ts < 10)? ("0"+ts):(ts);

		if (th < 1200) {
			mer = "AM";
		}
		else
			mer = "PM";		
}

function cTime(){
	var t = new Date();
	document.getElementById("currentTime").innerHTML = t.toLocaleTimeString();
}

function addTask(){
	var task = document.querySelector(".task").value;
	var time = document.querySelector(".time").value;
	if (task == ''){
		alert("Please Enter a task.");
		return;
	}

	var meridian = document.querySelector(".meridian").checked;
	var timer = (parseInt(time)*100)+parseInt(time.substring(time.indexOf(":")+1))
	var t = new Date();
	var th = (t.getHours())*100;
	var tm = t.getMinutes();
	var timer2 = th+(tm+1);

		if (timer == 1200 && meridian == true){
			var newTime = 0;
			var meridian = "AM";
		}
		else if (timer == 1230 && meridian == true){
			var newTime = 30;
			var meridian = "AM";
		}
		else if (timer == 1200 && meridian == false) {
			var newTime = 1200;
			var meridian = "PM";
		}
		else if (timer == 1230 && meridian == false) {
			var newTime = 1230;
			var meridian = "PM";
		}
		else if (meridian == true){
			var newTime = timer;
			var meridian = "AM";
		}
		else if (meridian == false){
			var newTime = ((parseInt(time)+12)*100)+parseInt(time.substring(time.indexOf(":")+1));
			var meridian = "PM";
		}

	if (newTime < timer2){
		alert('Cannot add task due to time restrictions.');
		return;
	}

	var tempArray = [newTime,time,meridian,task];
	taskArray.push(tempArray);
	taskArray.sort(function sorting(a,b){
		if (a[0] === b[0]){
			return 0;
		}
		else {
			return (a[0] < b[0])? -1 : 1;
		}
	});

	var listing = "<ul>";
	for (i = 0; i < taskArray.length; i++){
		for (i = 0; i < taskCounter+1; i++){
		listing += "<li>" + "<input type='checkbox'>  " + taskArray[i][3] + " at " + taskArray[i][1] + " " + taskArray[i][2] + "</input>" + "</li>";
		}
	}

	listing += "</ul>";
	document.querySelector(".scheduler").innerHTML = listing;

	taskCounter++

	if (taskCounter == 1 && dandr == 0){
		done = document.createElement("button");
		done.textContent = "Done";
		document.querySelector(".taskDiv").appendChild(done);
		done.addEventListener("click",checkBox);

		var sp = document.createElement("span");
		sp.textContent = " ";
		document.querySelector(".taskDiv").appendChild(sp);
		
		remove = document.createElement("button");
		remove.textContent = "Remove";
		document.querySelector(".taskDiv").appendChild(remove);
		remove.addEventListener("click",rem);

		dandr++;
	}
}

function checkBox(){
	var z = document.getElementsByTagName("input");
	var s = 0;
	var d = [];
	inandout();
	var com = "Time Done: " + hourin + ":" + minin + ":" + sin + " " + mer;

	for(i=0; i < z.length; i++){
		if(z[i].type == "checkbox" && z[i].checked == true){
			taskDone.innerHTML += "&#10004; " + taskArray[s][3] + " at " + taskArray[s][1] + " " + taskArray[s][2] + " &rarr; " + com + "<br>";
			taskCounter--;
			d.push(s);
			s++;
			td++;	
		}
		else if ((z[i].type == "checkbox" && z[i].checked == false)){
			s++;
		}
	}
	for (i = (d.length-1); i > -1; i--){
		taskArray.splice(d[i],1);
	}
	rewrite();
	if (td > 10){
		alert("Awesome! You're on fire today!");
	}
	else if (td > 5){
		alert("Great Job! Keep it up!");
	}
	else if (td > 2){
		alert("Nice. Good work!");
	}
}

function rem(){
	var z = document.getElementsByTagName("input");
	var s = 0;
	var d = [];

	for(i=0; i < z.length; i++){
		if(z[i].type == "checkbox" && z[i].checked == true){
			taskCounter--;
			d.push(s);
			s++;
		}
		else if ((z[i].type == "checkbox" && z[i].checked == false)){
			s++;
		}
	}
	for (i = (d.length-1); i > -1; i--){
		taskArray.splice(d[i],1);
	}
	rewrite();
}

function rewrite(){
	var listing = "<ul>";
	for (i = 0; i < taskArray.length; i++){
		for (i = 0; i < taskCounter; i++){
			listing += "<li>" + "<input type='checkbox'>  " + taskArray[i][3] + " at " + taskArray[i][1] + " " + taskArray[i][2] + "</input>" + "</li>";
		}
	}
	listing += "</ul>";
	document.querySelector(".scheduler").innerHTML = listing;

	dandr++;

	if (taskCounter == 0){
		done.parentNode.removeChild(done);
		remove.parentNode.removeChild(remove);
		dandr = 0;
	}
}

// Javascript for animation goes here

function rusure(){
	var x = document.querySelector(".makesure");
	if (x.style.display === 'block'){
		x.style.display = 'none';
		document.getElementById("logoff").disabled = false;
	}
	else {
		x.style.display = 'block';
		document.getElementById("logoff").disabled = true;
	}
}


