const questions = [
    {
      Question: "The minimum number of times a do loop would definitely get executed is",
      Answer: [
        { text: "0", correct: false },
        { text: "1", correct: true },
        { text: "2", correct: false },
        { text: "3", correct: false },
      ],
    },
    {
      Question: "The variables that can be used only within the function in which it is declared is called as",
      Answer: [
        { text: "Global Variable", correct: false },
        { text: "local Variable", correct: true },
        { text: "both", correct: false },
        { text: "None", correct: false },
      ],
    },
    {
      Question: "How many values can be returned by a C++ function?",
      Answer: [
        { text: "1", correct: true },
        { text: "0", correct: false },
        { text: "infinity", correct: false },
        { text: "none", correct: false },
      ],
    },
    {
      Question: "The variable that contains address of another variable is called as",
      Answer: [
        { text: "array", correct: false },
        { text: "union", correct: false },
        { text: "pointer", correct: true },
        { text: "index", correct: false },
      ],
    },
    {
      Question: "What notation is used to represent destructors in the C++ program?",
      Answer: [
        { text: "!", correct: false },
        { text: "=", correct: false }, 
        { text: "x", correct: false },
        { text: "~", correct: true },
      ],
    },
  ];
  
  const questionElement = document.getElementById("questions");
  const answerButton = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const prevButton = document.getElementById("prev-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    prevButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.Question}`;
  
    currentQuestion.Answer.forEach((answer, index) => {
      const label = document.createElement("label");
      label.classList.add("option");
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = answer.correct;
      radio.classList.add("radio");
      radio.addEventListener("click", selectAnswer);
  
      const answerText = document.createTextNode(answer.text);
  
      label.appendChild(radio); 
      label.appendChild(answerText); 
      answerButton.appendChild(label);
    });
  
    prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? "block" : "none";
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const isCorrect = e.target.value === "true";
    if (isCorrect) {
      score++;
    }
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      handleprevButton();
    }
  });
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Your Score: ${(score / questions.length) * 100}%`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
    prevButton.style.display = "none";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function handleprevButton() {
    currentQuestionIndex--;
    showQuestion();
  }
  
  startQuiz();
  