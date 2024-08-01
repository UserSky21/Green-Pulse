const quizData = [
    {
        question: " 1. What is renewable energy?",
        a: "Energy from fossil fuels",
        b: "Energy from sources that are naturally replenishing",
        c: "Energy from nuclear reactions",
        d: "Energy from non-renewable resources",
        correct: "b"
    },
    {
        question: " 2. Which of the following is a type of renewable energy?",
        a: "Coal",
        b: "Oil",
        c: "Solar",
        d: "Natural Gas",
        correct: "c"
    },
    {
        question: " 3. Which of the following is a renewable energy source?",
        a: "Coal",
        b: "Natural Gas",
        c: "Wind",
        d: "Nuclear",
        correct: "c"
    },
    {
        question: " 4. Which of the following energy sources uses windmills for mechanical power?",
        a: "Solar energy",
        b: "Biomass",
        c: "Hydropower",
        d: "Wind power",
        correct: "d"
    },
    {
        question: " 5. What is the primary advantage of hydropower?",
        a: "Uses irrigation",
        b: "Uses watermills",
        c: "Uses domestic lifts",
        d: "All of the above",
        correct: "d"
    },
    {
        question: " 6. Which of the following is a benefit of wind energy?",
        a: "Renewable and free",
        b: "Long operating life",
        c: "Not too expensive",
        d: "All of the above",
        correct: "d"
    },
    {
        question: " 7. What are the advantages of solar power?",
        a: "Sunlight is free",
        b: "Doesn’t produce greenhouse gases",
        c: "Both A and B",
        d: "None of the above",
        correct: "c"
    },
    {
        question: " 8. Which of the following is a non-renewable energy resource?",
        a: "Solar",
        b: "Wind",
        c: "Fossil fuels",
        d: "Hydropower",
        correct: "c"
    },
    {
        question: " 9. What is the main disadvantage of biomass energy?",
        a: "Renewable",
        b: "Versatile",
        c: "Can lead to deforestation if overused",
        d: "None of the above",
        correct: "c"
    },
    {
        question: " 10. What is the source of tidal energy?",
        a: "Movement of seawater",
        b: "Movement of tides",
        c: "Sunlight",
        d: "Wind",
        correct: "b"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
}

function getSelected() {
    const answers = document.getElementsByName('answer');
    let answer;
    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

function nextQuestion() {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            `;
            document.getElementById('next-button').style.display = 'none';
        }
    }
}

// Load the first question
loadQuiz();
