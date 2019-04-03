var startNum;
var limit;
var increment;

var feedback = document.querySelector('.feedback');
var acres = document.querySelector('.acres');

function generate(){
  var startNum = document.querySelector('.startNum');
  var limit = document.querySelector('.limit');
  var increment = document.querySelector('.increment');	
  var feedback = document.querySelector('.feedback');
  
  var start = Number(startNum.value);
  var end = Number(limit.value);
  var i = Number(increment.value);

  acres.textContent = '';

  if (isNaN(start) || isNaN(end) || isNaN(i)){
	feedback.textContent = 'Only numbers are accepted!';
  feedback.style.color = 'red';
  acres.textContent = 'Invalid Input';
  acres.style.color = 'red';
  }
  else if (i == 0){
  feedback.textContent = 'Invalid Input';
  feedback.style.color = 'red';
  acres.textContent = 'Increment must not be zero!';
  acres.style.color = 'red';
  }
  else if (start > end && i > 0){
  feedback.textContent = 'Invalid Input';
  feedback.style.color = 'red';
  acres.textContent = 'No Result. Starting Number is already greater than the limit!';
  acres.style.color = 'red';
  }
  else if (start < end && i < 0){
  feedback.textContent = 'Invalid Input';
  feedback.style.color = 'red';
  acres.textContent = 'No Result. Starting Number is already less than the limit!';
  acres.style.color = 'red';
  }
  else if (start > end){
    acres.style.color = 'black';
    acres.style.textAlign = 'left';
    while (start >= end){
      acres.textContent += start + ' ';
      start = start + i;
    }
  }
  else if (start < end){
    acres.style.color = 'black';
    acres.style.textAlign = 'left';
  	while (start <= end){
      acres.textContent += start + ' ';
      start = start + i;
  	}
  }
  else{
    feedback.textContent = 'Invalid Input';
    feedback.style.color = 'red';
    acres.textContent = 'No Result. Please check input.';
    acres.style.color = 'red';
  }
  var g = document.createElement('p');
  document.querySelector('.feedback').appendChild(g);
}

function reset(){
  feedback.textContent = '';
  acres.textContent = '';
  var g = document.createElement('br');
  document.querySelector('.feedback').appendChild(g);

  document.querySelector(".startNum").value = "";
  document.querySelector(".limit").value = "";
  document.querySelector(".increment").value = ""; 
}
