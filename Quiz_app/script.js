// set the questions

const questions = [

    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: "false" },
            { text: "Blue Whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: "false" },
            { text: "Austrelia", correct: "true" },
            { text: "Arctic", correct: "false" },
            { text: "Africa", correct: "false" }
        ]
    },
    {
        question: "Which is the largest desert i the world?",
        answers: [
            { text: "Kalahari", correct: "false" },
            { text: "Gobi", correct: "false" },
            { text: "Sahara", correct: "false" },
            { text: "Antarctica", correct: "true" }
        ]
    },
    {
        question: "Which is the code for Maharashtra?",
        answers: [
            { text: "MH", correct: "true" },
            { text: "GJ", correct: "false" },
            { text: "KA", correct: "false" },
            { text: "MP", correct: "false" }
        ]
    }

]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("ans-btns")
const nextButton = document.getElementById("next-btn")

// store ll changing 

let currentQIndex = 0;
let score = 0

function startQuiz() {
    currentQIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}
function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQIndex]
    let questionNo = currentQIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    // display ans
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e) {
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true"
    if (isCorrect) {
        selectBtn.classList.add("correct")
        score++;
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore() {
    resetState()
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextBtn() {
    currentQIndex++;
    if (currentQIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if (currentQIndex < questions.length) {
        handleNextBtn()
    } else {
        startQuiz()
    }
})
startQuiz()

