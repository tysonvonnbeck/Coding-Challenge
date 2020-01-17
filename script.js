var quizTimer = 120;
var wrong = 15;
var startButtonElem = document.getElementById("startButton");
var landingElem = document.getElementById("landing");
var highScoresElem = document.getElementById("highScoresDisplay")
var questionDispElem = document.getElementById("questionDisplay");
var questionContent = document.getElementById("question");
var currentQuestion = questions[0];
var choices = currentQuestion.choices;
const viewScore = document.getElementById("highScores");
var initials = document.getElementById("initials")
var initTxt = document.getElementById("initTxt")
var saveBtn = document.getElementById("initBtn")
var highScore = 0;
var players = [];
var highScoresBtn = document.getElementById("highScoresBtn")
var scoreBoard = document.getElementById("scoreBoard")
var score = document.getElementById("score")
var returnBtn = document.getElementById("returnBtn")

// function timer() {
//   quizTimer = quizTimer - 1;

//   if (quizTimer <= 0) {
//     clearInterval(counter);
//     //counter ended, do something here
//     return;
//   }
//   document.getElementById("timer").innerHTML = quizTimer + " seconds";
// }

function wrongAnswer(num1, num2, operator) {
  if (operator === "-") {
    return num1 - num2;
  }
}

startButtonElem.addEventListener("click", function () {
  //  console.log("Good Job!");
  function timer() {
    quizTimer = quizTimer - 1;
  
    if (quizTimer <= 0) {
      clearInterval(counter);
      //counter ended, do something here
      return;
    }
    document.getElementById("timer").innerHTML = quizTimer + " seconds";
  }
  
  var counter = setInterval(timer, 1000);
  timer();
  landingElem.classList.add("hideElem");
  highScoresElem.classList.add("hideElem");
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

  document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.textContent == currentQuestion.answer) {
      document.getElementById("result").textContent = "Correct!";
      setTimeout(question2, 1000);
      console.log("Correct");
      return;
    } else {
      quizTimer = wrongAnswer(quizTimer, wrong, "-");
      document.getElementById("result").textContent = "Wrong! -Try again-";
      console.log("Incorrect");
      return;
      
    }
  });
  
});


// question 2
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

  document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.textContent == currentQuestion.answer) {
      document.getElementById("result").textContent = "Correct!";
      setTimeout(question3, 1000);
      return;
    } else {
      document.getElementById("result").textContent = "Wrong! -Try again-";
      // quizTimer = wrongAnswer(quizTimer, wrong, "-");
      return;
      
    }
  });
}

// question 3
function question3() {
  var list = document.getElementById("choices");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    document.getElementById("result").textContent = "";
  }

  // fix value to dynamically update
  var currentQuestion = questions[2];

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

  document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.textContent == currentQuestion.answer) {
      document.getElementById("result").textContent = "Correct!";
      setTimeout(question4, 1000);
    } else {
      (event.target.textContent === !currentQuestion.answer)
      document.getElementById("result").textContent = "Wrong! -Try again-";
      quizTimer = wrongAnswer(quizTimer, wrong, "-");
      
    }
  });
}

// question 4
function question4() {
  var list = document.getElementById("choices");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    document.getElementById("result").textContent = "";
  }

  var currentQuestion = questions[3];

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

  document.getElementById("choices").addEventListener("click", function (event) {
    if (event.target.textContent == currentQuestion.answer) {
      document.getElementById("result").textContent = "Correct!";
      endGame()
    } else {
      document.getElementById("result").textContent = "Wrong! -Try again-";
      quizTimer = wrongAnswer(quizTimer, wrong, "-");
    }
    highScore = quizTimer
    endGame()
  });
}

function endGame() {
  initials.classList.remove("hideElem");
  landingElem.classList.add("hideElem");
  questionDispElem.classList.add("hideElem")

}

saveBtn.addEventListener("click", function () {
  players.push({
    initals: initTxt.value,
    highScore: highScore
  })
  localStorage.setItem("players", JSON.stringify(players))
})

highScoresBtn.addEventListener("click", function () {
  initials.classList.add("hideElem")
  scoreBoard.classList.remove("hideElem")
  landingElem.classList.add("hideElem");
  var finalScore = JSON.parse(localStorage.getItem("players"))
  // console.log(finalScore);
  score.innerHTML = finalScore[0].highScore + " by " + finalScore[0].initials

})

returnBtn.addEventListener("click", function () {
  landingElem.classList.remove("hideElem");
  initials.classList.add("hideElem")
  scoreBoard.classList.add("hideElem")
  })
