var quizTimer = 120;
var startButtonElem = document.getElementById("startButton");
var landingElem = document.getElementById("landing");
var questionDispElem = document.getElementById("questionDisplay");
var questionContent = document.getElementById("question");
var currentQuestion = questions[0];
var choices = currentQuestion.choices;
var answerElem = currentQuestion.answer;

function nextItem() {
  if ((currentQuestion = 0)) {
    currentQuestion = 1;
  } else {
    if ((currentQuestion = 1)) {
      currentQuestion = 2;
    } else {
      if ((currentQuestion = 2)) {
        currentQuestion = 3;
      }
    }
  }
}

// function reload() {
//   var content = (questionDispElem.innerHTML = "");
// }

function timer() {
  quizTimer = quizTimer - 1;
  if (quizTimer <= 0) {
    clearInterval(counter);
    //counter ended, do something here
    return;
  }

  document.getElementById("timer").innerHTML = quizTimer + " seconds";
}

startButtonElem.addEventListener("click", function() {
  //  console.log("Good Job!");
  var counter = setInterval(timer, 1000);
  timer();
  landingElem.classList.add("hideElem");
  questionDispElem.classList.remove("hideElem");

  questionContent.textContent = currentQuestion.title;

  function makeBtns() {
    for (let i = 0; i < choices.length; i++) {
      var btn = document.createElement("button");
      var pick = document.createTextNode(choices[i]);
      btn.appendChild(pick);
      document.getElementById("choices").appendChild(btn);
    }
  }

  makeBtns();

  document.getElementById("choices").addEventListener("click", function(event) {
    // console.log(event.target.textContent);
    if (event.target.textContent == answerElem) {
      document.getElementById("result").textContent = "Correct!";
      // coorect answer ding
    } else {
      document.getElementById("result").textContent = "Wrong!";
      //quiz timer decrement -15 seconds
      // buzz
    }
    nextItem();
  
  });
});
