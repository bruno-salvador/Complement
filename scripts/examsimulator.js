
let currentQuestion;
/*definir todos los elementos html*/
let excerciseContainer = document.querySelector(".excercise-container");
let optionOne = document.querySelector(".option1");
let hideOptionOne = document.query
let optionTwo = document.querySelector(".option2");
let optionThree = document.querySelector(".option3");
let optionFour = document.querySelector(".option4");
let prompt = document.querySelector(".prompt");
let answer1 = document.forms["quiz"]["option1"];
let answer2 = document.forms["quiz"]["option2"];
let answer3 = document.forms["quiz"]["option3"];
let answer4 = document.forms["quiz"]["option4"];
let imageSvg = document.querySelector(".imageprompt");
let point = document.querySelector(".note");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
hours.innerHTML = 0;
minutes.innerHTML = 0;
seconds.innerHTML = 2;


function hideUI() {
  excerciseContainer.style.display = "none"
}
hideUI();

/*constructor de preguntas*/
class question {
  constructor(
    prompt, option1, option2, option3, option4,
    answer1, answer2, answer3, answer4, image, points, category) {
    this.prompt = prompt;
    this.option1 = option1 = {
      option: option1, answer: answer1,
      class: optionOne
    };
    this.option2 = option2 = { answer: answer2, option: option2 };
    this.option3 = option3 = { answer: answer3, option: option3 };
    this.option4 = option4 = { answer: answer4, option: option4 };
    this.image = image;
    this.points = points;
    this.category = category;
    let imagesvg = document.querySelector(".imageprompt");
    imagesvg.src = image;
  }

}

/*function excercisePlacer(object) {
  prompt.innerHTML = object.prompt;
  optionOne.innerHTML = object.option1.option;
  answer1.value = object.option1.answer;
  optionTwo.innerHTML = object.option2.option;
  answer2.value = object.option2.answer;
  optionThree.innerHTML = object.option3.option;
  answer3.value = object.option3.answer;
  optionFour.innerHTML = object.option4.option;
  answer4.value = object.option4.answer;
  point.innerHTML = object.points;
  return currentQuestion = object;
}
*/function excercisePlacer(
  { prompt, optionOne, optionTwo, optionThree, optionFour,
    option1, option2, option3, option4 }) {
  prompt.innerHTML = prompt;
  optionOne.innerHTML = option1.option;
  answer1.value = option1.answer;
  optionTwo.innerHTML = option2.option;
  answer2.value = option2.answer;
  optionThree.innerHTML = option3.option;
  answer3.value = option3.answer;
  optionFour.innerHTML = option;
  answer4.value = option4.answer;
  point.innerHTML = object.points;
  return currentQuestion = object;

  function start() {
    excerciseContainer.style.display = "block";

  }

  console.log(document.querySelector('input[name="option"]:checked'));
  function questionChecker() {
    let selectedInput = document.querySelector('input[name="option"]:checked').value;
    let input = selectedInput.toLowerCase() == 'true' ? true : false;
    if (input == true) {
      console.log("correct");
      calification = +point.innerHTML;
      console.log(point.innerHTML)
      console.log(`your total calification is ${calification}`);
    }
    else {
      console.log("false")

    }
  }
}
