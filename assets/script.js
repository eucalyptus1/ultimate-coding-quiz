//Create variables to store the quiz questions

var questions = [
    {question:
       "Commonly included data types do NOT include:",
       answers: ["strings", "booleans", "alerts", "numbers"],
       correctAnswer: ["alerts"]
    },

   {question: 
       "the condition in an if/else statement is enclosed with ______.",
       answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
       correctAnswer: ["curly brackets"]
   },

   {question:
       "arrays in javascript can be used to store _____.",
       answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
       correctAnswer: ["all of the above"]
   },

   {question:
       "string values must be enclosed within ______ when being assigned to variables.",
       answers: ["commas", "curly brackets", "quotes", "parenthesis"],
       correctAnswer: ["quotes"],
   },

   {question:
       "a very useful tool used during development and debugging for printing content to the debugger is:",
       answers: ["javascript", "terminal/bash", "for loops", "console.log"],
       correctAnswer: ["console.log"],
   },

   {question:
       "What can you get at the concession stand for $10, $10 or $13?",
       answers: ["Luke Wilson", "16:9 Anamorphic", "Hot, Hot Buttery Popcorn", "Battleship Potemkin"],
       correctAnswer: ["Hot, Hot Buttery Popcorn"]
   }
];

var titleScreen = document.getElementById("title-screen")
var startButton = document.getElementById("start-button");
var quizQuestion = document.getElementById("the-question");

var questionArr = 0;
// var ansArr = 0;
var choiceList = document.getElementById("the-answers");
var a1 = document.getElementById("ans1");
var a2 = document.getElementById("ans2");
var a3 = document.getElementById("ans3");
var a4 = document.getElementById("ans4");

// var displayQuiz = document.getElementById("quiz");
var end = document.getElementById("end-page");
var highScores = document.getElementById("score-page");

//Use mouse-click events to start the quiz

var startButton = document.getElementById("start-button");
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    nextQuestion();
    if (startQuiz) {
        titleScreen.style.display = "none";
    }


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
    for (var i = 0; i < questions.length; i++) {
        var displayQuestion = questions[questionArr].question;
        var displayAnswers = questions[questionArr].answers;
        quizQuestion.textContent = displayQuestion;
        choiceList.textContent = displayAnswers;

        

    }

}

   

//Use key-press events to receive user input in the form of answers to quiz questions

//Create a time limit for the game using time functions

//Write conditional statements to determine wrong and right answers

//Use client-side storage to store high scores





// var thirdQuestion = questions[2].question

