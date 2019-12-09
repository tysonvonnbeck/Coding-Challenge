var quizTimer = 120;
var wrong = 15
var startButtonElem = document.getElementById("startButton");
var landingElem = document.getElementById("landing");
var questionDispElem = document.getElementById("questionDisplay");
var questionContent = document.getElementById("question");
var currentQuestion = questions[0];
var choices = currentQuestion.choices;

function timer() {
  quizTimer = quizTimer - 1;
  if (quizTimer <= 0) {
    clearInterval(counter);
    //counter ended, do something here
    return;
  }
  document.getElementById("timer").innerHTML = quizTimer + " seconds";
}

function wrongAnswer(num1, num2, operator) {
  if (operator === '-') {
    return num1 - num2;
  }

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
    if (event.target.textContent == currentQuestion.answer) {
      document.getElementById("result").textContent = "Correct!";
      setTimeout(question2, 1000);
    } else {
      document.getElementById("result").textContent = "Wrong! -Try again-";
      quizTimer = wrongAnswer(quizTimer, wrong, '-' )
    }
  });
});

function question2() {
  var list = document.getElementById("choices");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    document.getElementById("result").textContent = "";
  }

  // fix value to dynamically update
  var currentQuestion = questions[1];

  questionContent.textContent = currentQuestion.title;

  function makeBtns() {
    for (let i = 0; i < choices.length; i++) {
      var btn = document.createElement("button");
      var pick = document.createTextNode(currentQuestion.choices[i]);
      btn.appendChild(pick);
      document.getElementById("choices").appendChild(btn);
    }
  }
  makeBtns();

  document.getElementById("choices").addEventListener("click", function(event) {
    if (event.target.textContent == currentQuestion.answer) {
      document.getElementById("result").textContent = "Correct!";
      setTimeout(NextQuestion, 1000);
    } else {
      document.getElementById("result").textContent = "Wrong! -Try again-";
      quizTimer = wrongAnswer(quizTimer, wrong, '-' )
    }
  });
}
