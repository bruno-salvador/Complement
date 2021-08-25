export  let excerciseContainer=document.querySelector(".excercise-container");
export let optionOne=document.querySelector(".option1");
export let optionTwo=document.querySelector(".option2");
export let optionThree=document.querySelector(".option3");
export let optionFour= document.querySelector(".option4");
export let prompt=document.querySelector(".prompt");
export let answer1=document.forms["quiz"]["option1"];
export let answer2=document.forms["quiz"]["option2"];
export let answer3=document.forms["quiz"]["option3"];
export let answer4=document.forms["quiz"]["option4"];
export let imageSvg=document.querySelector(".imageprompt");
export let point=document.querySelector(".note")
export  class question 
 {
    constructor(prompt,option1,option2,option3,option4,answer1,answer2,answer3,answer4,image,points,category)
    {
  this.prompt=prompt;
  this.option1=option1={  option:option1,  answer:answer1,
  class:optionOne};
  this.option2=option2={answer:answer2, option:option2};
  this.option3=option3={answer:answer3,option:option3};
  this.option4=option4={answer:answer4, option:option4};
  this.image=image;
this.points=points;
this.category=category;
 let imagesvg= document.querySelector(".imageprompt");
    imagesvg.src=image;
   }
 }
export function start() {
  
    
    excerciseContainer.style.display="block"

   
  };
  export function questionChecker() {
    let selectedInput = document.querySelector('input[name="option"]:checked').value;
    let input = selectedInput.toLowerCase() == 'true' ? true : false;
    if (input == true) {
      console.log("correct");
      calification = +point.innerHTML;
      console.log(point.innerHTML)
      console.log(`your total calification is ${calification}`);
    }
  }
  export function excercisePlacer(object) {
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