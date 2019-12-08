var quizTimer = 120
var startButtonElem = document.getElementById("startButton")
var landingElem = document.getElementById("landing")
var questionDispElem = document.getElementById("questionDisplay")
var questionContent = document.getElementById('question')
var currentQuestion = 0;
var choices = questions[currentQuestion].choices
// var answerButtonElem = 




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

     function makeBtns() {
      for (let i = 0; i < choices.length; i++) {
      var btn = document.createElement("button");
      var pick = document.createTextNode(choices[i]);
      btn.appendChild(pick);
      document.getElementById("choices").appendChild(btn);
    }}

    makeBtns()

  })

// answerButtonElem.addEventListener("click", function(){}