var quizTimer = 120
var startButtonElem = document.getElementById("startButton")
var landingElem = document.getElementById("landing")
var questionDispElem = document.getElementById("questionDisplay")
var questionContent = document.getElementById('question')
var currentQuestion = 0;


function timer()
{
    quizTimer=quizTimer-1;
  if (quizTimer <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  document.getElementById("timer").innerHTML=quizTimer + " secs";
}

startButtonElem.addEventListener("click", function() {
//  console.log("Good Job!");
    var counter=setInterval(timer, 1000); 
    timer();
    landingElem.classList.add('hideElem')
    questionDispElem.classList.remove('hideElem')

    questionContent.textContent = questions[currentQuestion].title

    for (let i = 0; i < answersArray.length; i++) {
        console.log(answersArray[i]);
     }
    
    var btn = document.createElement(ul="BUTTON");
    btn.innerHTML = questions[currentQuestion].choices;
    // btn.innerHTML = questions[currentQuestion].choices;                  
    // document.body.appendChild(btn); 
    
})




//create list item li
// input information answersArray[i] - (<ul id="answers">)
// UL.appendChild

// answer cklick functiom
// updates score
// moves to next question


console.log(questions[currentQuestion].choices)