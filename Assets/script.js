var startEl = document.getElementById("startButton");
var quizEl = document.getElementById("quiz");
var statEl = document.getElementById("stat-page");
var questionsEl = document.getElementById("questions");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var timerEl = document.getElementById("timer");

quizEl.style.display = "none"
statEl.style.display = "none"

let timer;
let timeRemaining = 90;

var questionsList = [
    {
        question: "Test",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "Test - second",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "Test - last",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },

];

var questionDisp = 0;
var score = 0;

option1El.addEventListener("click", check);
option2El.addEventListener("click", check);
option3El.addEventListener("click", check);
option4El.addEventListener("click", check);

startEl.addEventListener("click", function () {
    quizEl.style.display = "block"
    startEl.style.display = "none"
    displayQuestion()
    startTimer()
});

function displayQuestion() {
    questionsEl.textContent = questionsList[questionDisp].question
    option1El.textContent = questionsList[questionDisp].choices[0]
    option2El.textContent = questionsList[questionDisp].choices[1]
    option3El.textContent = questionsList[questionDisp].choices[2]
    option4El.textContent = questionsList[questionDisp].choices[3]
};


function check(event) {
    var optionSelected = event.target.textContent
    console.log(optionSelected)
    if (optionSelected == questionsList[questionDisp].answer) {
        score++ // score = score + 1
    } else {
// timer -=5
    }
    if (questionDisp < questionsList.length - 1) {
        questionDisp++
        displayQuestion()
    } else {
 // display stat page
    }
};

function startTimer() {
    timer = setInterval(function () {
        if (timeRemaining <= 0) {
            endQuiz();
        } else {
            timeRemaining--;
        }
    }, 1000);
}