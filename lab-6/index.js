document.addEventListener('DOMContentLoaded', function () {
  const quizContainer = document.getElementById('quiz-container');
  const startQuizButton = document.getElementById('start-quiz-button');
  const submitButton = document.getElementById('submit-button');
  const resultContainer = document.getElementById('result');

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe'],
      correctAnswer: 'Blue Whale'
    },
  ];

  let currentQuestionIndex = 0;
  let userAnswers = [];

  function startQuiz() {
    startQuizButton.style.display = 'none';
    submitButton.style.display = 'block';
    resultContainer.style.display = 'none';

    loadQuestion(currentQuestionIndex);
  }

  function loadQuestion(index) {
    const currentQuestion = questions[index];
    const optionsHTML = currentQuestion.options.map(option => `<input type="radio" name="answer" value="${option}">${option}<br>`).join('');

    quizContainer.innerHTML = `
      <h3>${currentQuestion.question}</h3>
      <form id="quiz-form">${optionsHTML}</form>
    `;
  }

  function submitQuiz() {
    const userAnswer = document.querySelector('input[name="answer"]:checked');

    if (userAnswer) {
      userAnswers.push(userAnswer.value);
    } else {
      alert('Please select an answer.');
      return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      showResult();
    }
  }

  function showResult() {
    startQuizButton.style.display = 'none';
    submitButton.style.display = 'none';

    const correctAnswers = questions.filter((question, index) => question.correctAnswer === userAnswers[index]);
    const score = correctAnswers.length;

    resultContainer.innerHTML = `
      <h3>Quiz Completed!</h3>
      <p>Your Score: ${score} out of ${questions.length}</p>
    `;

    resultContainer.style.display = 'block';
  }

  startQuizButton.addEventListener('click', startQuiz);
  submitButton.addEventListener('click', submitQuiz);
});