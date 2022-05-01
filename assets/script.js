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

var titleScreen = document.getElementById("title-screen")
var startButton = document.getElementById("start-button");
var quizQuestion = document.getElementById("the-question");
var theAnswers = document.getElementById("the-answers");

var seconds = 50;

document.getElementById("the-answers").addEventListener('click', clickAnswer);



var questionArr = []
var questionOrder = 0;


var end = document.getElementById("end-page");
var highScores = document.getElementById("score-page");

//Use mouse-click events to start the quiz

var startButton = document.getElementById("start-button");
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    titleScreen.style.display = "none";
    questionCount = 0;
    startTime();
    nextQuestion(questionCount);
};

//Create a time limit for the game using time functions

var counter = setInterval(startTime, 1000);

function startTime() {
  seconds = seconds -1;
  if (seconds == 0)
  {
     clearInterval(counter);
     gameOver();
  }

  document.getElementById("timer").innerHTML = seconds;
};

//Write for loops to cycle through quiz questions

// function nextQuestion() {
//     for (let i = 0; i < questions.length; i++) {
//         var quizQuestion = document.createElement("h2")
//         var choiceList = document.createElement("button")
//         quizQuestion.innerHTML = questions[i].question;
//         questions.appendChild(quizQuestion);
//         answers.appendChild(choiceList);


        // for (let j = 0; j < questions[i].answers.length; j++) {
        //     var choiceList = document.createElement("button")
        //     choiceList.innerHTML = questions[i].answers[j]
        //     answers.appendChild(choiceList);
        // }
        
//     }
    
// };

function nextQuestion() {
    
    
    
    // for (var i = 0; i < questions.length; i++) {
    //     var displayQuestion = questions[questionArr].question;
    //     quizQuestion.textContent = displayQuestion;
    // }

    var displayQuestion = questions[questionOrder];
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
    var correctAnswer = questions[questionOrder].correct;
    console.log("correctAnswer", correctAnswer);

//Write conditional statements to determine wrong and right answers
    if (choice.textContent === correctAnswer) {
        console.log("right!");
        
    } else {
        console.log("wrong!");
        
    }
    if (questionOrder < questions.length) {
        theAnswers.innerHTML = "";
        questionOrder++;
        nextQuestion();

    }
    

    
};


//Use client-side storage to store high scores

function gameOver() {
    if (questionArr >= 5 || seconds <= 0) {

    
        clearInterval(quizTime);
      
    }

}


