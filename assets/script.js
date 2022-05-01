//Create variables to store the quiz questions

var questions = [
    {question:
       "Commonly included data types do NOT include:",
       answers: ["strings", "booleans", "alerts", "numbers"],
       correct: "alerts"
    },

   {question: 
       "the condition in an if/else statement is enclosed with ______.",
       answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
       correct: "curly brackets"
   },

   {question:
       "arrays in javascript can be used to store _____.",
       answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
       correct: "all of the above"
   },

   {question:
       "string values must be enclosed within ______ when being assigned to variables.",
       answers: ["commas", "curly brackets", "quotes", "parenthesis"],
       correct: "quotes"
   },

   {question:
       "a very useful tool used during development and debugging for printing content to the debugger is:",
       answers: ["javascript", "terminal/bash", "for loops", "console.log"],
       correct: "console.log"
   },

   {question:
       "What can you get at the concession stand for $10, $10 or $13?",
       answers: ["Luke Wilson", "16:9 Anamorphic", "Hot, Hot Buttery Popcorn", "Battleship Potemkin"],
       correct: "Hot, Hot Buttery Popcorn"
   }
];

var wholeQuiz = document.getElementById("quiz");
var timer = document.getElementById("timer");
var titleScreen = document.getElementById("title-screen")
var startButton = document.getElementById("start-button");
var quizQuestion = document.getElementById("the-question");
var theAnswers = document.getElementById("the-answers");
var answerAlert = document.getElementById("answer-alert");
var endScreen = document.getElementById("end-page");

document.getElementById("the-answers").addEventListener('click', clickAnswer);


var questionArr = 0;

var seconds = 50;


var end = document.getElementById("end-page");
var highScores = document.getElementById("score-page");

//Use mouse-click events to start the quiz

var startButton = document.getElementById("start-button");
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    titleScreen.style.display = "none";
    questionArr = 0;
 //Create a time limit for the game using time functions
    var startTime = setInterval(function() {
        timer.textContent = seconds;
        seconds-=1;

        if (seconds === 0 || questions.length === questionArr+1)
        {
           gameOver();
           clearInterval(startTime);
           
        }
      }, 1000);

    nextQuestion(questionArr);
};



//Write for loops to cycle through quiz questions

function nextQuestion() {

    var displayQuestion = questions[questionArr];
    var answers = displayQuestion.answers;
    

    quizQuestion.textContent = displayQuestion.question;

    for (var i = 0; i < answers.length; i++) {
        var displayAnswers = answers[i];
        var choiceBtn = document.createElement("button");
        choiceBtn.innerText = displayAnswers;
        document.getElementById("the-answers").appendChild(choiceBtn);
        
    }

};


//Use key-press events to receive user input in the form of answers to quiz questions

function clickAnswer(event) {
    event.preventDefault();
    console.dir(clickAnswer);

    var choice = event.target;
    console.log(choice);
    console.log("choice");
    var correctAnswer = questions[questionArr].correct;
    console.log("correctAnswer", correctAnswer);

//Write conditional statements to determine wrong and right answers
    if (choice.textContent === correctAnswer) {
        answerAlert.textContent = "Correct!";

    } else {
        answerAlert.textContent = "Wrong!";
        seconds -=10;
        nextQuestion();
    }

    if (questionArr < questions.length) {
        theAnswers.innerHTML = "";
        answerAlert.textContent = "";
        questionArr++;
        nextQuestion();
        
    } else {
       gameOver();
    }
};


//Use client-side storage to store high scores

function gameOver() {
    if (questions.length === questionArr+1 || seconds === 0) {
        quizQuestion.style.display = "none";
        theAnswers.style.display = "none";
        clearInterval(startTime);
        var end = document.createElement("h1");
        end.innerText = "CONGRATS! You won! (or maybe lost)";
        document.getElementById("quiz").appendChild(end);
    }

}


