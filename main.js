

//Grabbing the Elements
var inputOne = document.querySelector('#num_one');
var inputTwo = document.querySelector('#num_two');
var submitBtn = document.querySelector('#calculateBtn');
var myAnswer = document.querySelector('#answer');

//Variable Declarations
var answer1, answer2, sumofAnswers, calculation;

//Function to Perform the calculation
var calculateBtn = function () {
  answer1 = inputOne.value;
  answer2 = inputTwo.value;
  sum = Number(answer1) + Number(answer2);
  return sum;
};

//Function to Show Answer
  calculation = function () {
  sumofAnswers = calculateBtn();
  myAnswer.textContent = calculateBtn();
}

//Submit button Click
submitBtn.addEventListener('click', calculation);



