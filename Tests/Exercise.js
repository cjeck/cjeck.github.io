var textinput;

var oddeven = document.querySelector('.oddeven');
var factorial = document.querySelector('.factorial');

function clickme(textinput){
  var textinput = Number(document.querySelector('.input').value);
  if (textinput % 2 === 0){
    oddeven.textContent = "The number " + textinput + " is even!";
  }
  else{
  	oddeven.textContent = "The number " + textinput + " is odd!";
  }
  for (var x = 0; x <= textinput; x++){
  	x = x * (x+1);
  }
}
