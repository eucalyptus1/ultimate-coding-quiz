//Create variables to store the quiz questions

var questions = [
    {question:
       "Commonly included data types do NOT include:",
       choices: choices[0]
    },

   {question: 
       "the condition in an if/else statement is enclosed with ______.",
       choices: choices[1]
   },

   {question:
       "arrays in javascript can be used to store _____.",
       choices: choices[2]
   },

   {question:
       "string values must be enclosed within ______ when being assigned to variables.",
       choices: choices[3]
   },

   {question:
       "a very useful tool used during development and debugging for printing content to the debugger is:",
       choices: choices [4]
   },

   {question:
       "What can you get at the concession stand for $10, $10 or $13?",
       choices: choices [5]
   }
]


var choices = [["strings", "booleans", "alerts", "numbers"]
["quotes", "curly brackets", "parenthesis", "square brackets"],
["numbers and strings", "other arrays", "booleans", "all of the above"],
["commas", "curly brackets", "quotes", "parenthesis"],
["javascript", "terminal/bash", "for loops", "console.log"],
["Luke Wilson", "16:9 Anamorphic", "Hot, Hot Buttery Popcorn", "Battleship Potemkin"]]

//Use mouse-click events to start the quiz

//Write for loops to cycle through quiz questions

//Use key-press events to receive user input in the form of answers to quiz questions

//Create a time limit for the game using time functions

//Write conditional statements to determine wrong and right answers

//Use client-side storage to store high scores





var thirdQuestion = questions[2].question

var mainDiv = document.getElementById("main")
var quizQuestion = document.getElementById("question")
var choices = document.getElementById("choices")

var startButton = document.createElement("button")
startButton.innerHTML = "start the quiz"
mainDiv.appendChild(startButton)

function nextQuestion() {
    for (let i = 0; i < questions.length; i++) {
        quizQuestion.innerHTML = questions[i].question;

        for (let j = 0; j < questions[i].choices.length; j++) {
            var choiceList = document.createElement("li")
            choiceList.innerHTML = questions[i].choices[j]
            choices.appendChild(choiceList)
        }
        

        // for (let j = 0; j < choices.length; j++) {
        //     var choiceList = document.createElement("li")
        //     choiceList.innerHTML = choices[j]
        //     choices.appendChild(choiceList)
        //     console.log(choiceList);

        // }
    }
    
}

startButton.addEventListener("click", nextQuestion)