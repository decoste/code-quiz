// variables for page elements
let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
let score = document.querySelector("#score");
const intro = document.querySelector("#intro");
const questionsEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let questionCount = 0;
const answers = document.querySelector("#answers");
const finalEl = document.querySelector("#final");
let initialsInput = document.querySelector("#initials");
const highScores = document.querySelector("#highscores");
let scoreListEl = document.querySelector("#score-list");
let scoreList = [];
const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("button.ansBtn")
const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");
const submitScrBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScrBtn = document.querySelector("#clearscores");
const viewScrBtn = document.querySelector("#view-scores");

// questions
const questions = [ 
    {

        question: "Which array method inserts an element at the end of the array?",
        answers: [".pop()", ".push()", ".length", ".join()"],
        correctAnswer: "1"
    }, 
    {
        question: "Which type of pop up box will allow a user to type a response?",
        answers: ["input", "prompt", "alert", "confirm"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in Javascript can be used to store",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "3"
    },
    {
        question: "Commonly used data type Do Not include",
        answers: ["strings","boolean","alerts", "numbers"],
        correctAnswer: "2"
    },
    {
        question: "Which of these is not used to loop?",
        answers: ["for", "while", "foreach", "sequence"],
        correctAnswer: "3"
    }
];


// Functions
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}

function startQuiz() {
    intro.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

function checkAnswer(event) {
    event.preventDefault();

    answers.style.display = "block";
    let p = document.createElement("p");
    answers.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}
