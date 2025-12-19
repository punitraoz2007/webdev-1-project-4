// A Quiz Game

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "What does CSS stand for?",
    answer: "cascading style sheets"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answer: "let"
  },
  {
    question: "Which method is used to display a popup message in JavaScript?",
    answer: "alert"
  },
  {
    question: "Which method is used to take input from the user in JavaScript?",
    answer: "prompt"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answer: "//"
  },
  {
    question: "Which loop is used to repeat a block of code a fixed number of times?",
    answer: "for"
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    answer: "function"
  },
  {
    question: "Which data type is used to store true or false values?",
    answer: "boolean"
  },
  {
    question: "Which method converts text to lowercase in JavaScript?",
    answer: "tolowercase"
  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct answer ✅");
      score++;
    } else {
      alert(
        "Wrong answer ❌\nCorrect answer is: " +
        quizQuestions[i].answer
      );
    }
  }

  alert(
    "Quiz completed!\nYour Score: " +
    score +
    " out of " +
    quizQuestions.length
  );
}

// Start the quiz
runQuiz();
