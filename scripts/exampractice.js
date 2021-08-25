import {geometry, functions, polinomios } from "/scripts/EjerciciosPorMateria/EjIngresoModuloB/ingresoExercises.js";
import { excerciseContainer, optionOne, optionTwo, optionThree, optionFour, prompt, answer1,answer2,answer3,answer4,point, question, start,excercisePlacer } from "./constructorAndselectors.js"
let currentQuestion;
let siguiente=document.querySelector(".next-button");

let ejercicios = [functions, polinomios, geometry];
console.log(ejercicios);
let randomQ = function (currentQuestion) {
 return  currentQuestion = geometry[Math.ceil(Math.random * ejercicios.length - 1)]
};
randomQ(currentQuestion);
console.log(geometry[0])
console.log(currentQuestion);
function hideUI() {
  excerciseContainer.style.display = "none";
}
hideUI();
console.log(optionOne)



/*function excercisePlacer(object) {
  prompt.innerHTML = object.prompt;
  optionOne.innerHTML = object.option1;
  answer1.value = object.option1.answer;
  optionTwo.innerHTML = object.option2;
  answer2.value = object.option2.answer;
  optionThree.innerHTML = object.option3;
  answer3.value = object.option3.answer;
  optionFour.innerHTML = object.option4;
  answer4.value = object.option4.answer;
  point.innerHTML = object.points;

}
*/
excercisePlacer(geometry[0]);
console.log(optionOne);
/* let question1=new question("cuanto es 2+2",1,3,4,6,false,false,true,false,"");*/
let calification = 0;;
console.log(prompt);
document.querySelector(".aleatorio").addEventListener("click", start);

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
siguiente.addEventListener("click",questionChecker);

localStorage.setItem("lastpage",window.location.href);
