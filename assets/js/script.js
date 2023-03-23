//quqestions and answers
var questionData = [{
        question: "What is the most popular dog breed?",
        a: "French bulldog",
        b: "Labrador retriver",
        c: "Chihuahua",
        correctAnswer: "B"
    },
    {
        question: "Which dog is the smartest?",
        a: "Labrador retriever",
        b: "Poodel",
        c: "Border collien",
        correctAnswer: "c"
    },
    {
        question: "How old does a dog get on average?",
        a: "10-20 years",
        b: "7-10 years",
        c: "10-13 years",
        correctAnswer: "c"
    },
    {
        question: "How many teeth does a dog have",
        a: "42",
        b: "25",
        c: "48",
        correctAnswer: "A"
    },
    {
        question: "The famous cartoon dog Snoopy is on the roof of his doghouse most of the time. What race is the Snoopy?",
        a: "Bloodhound",
        b: "Dalmatians",
        c: "Beagle",
        correctAnswer: "c"
    },
    {
        question: "Which dog breed is the fastest?",
        a: "Greyhounds",
        b: "Dalmatians",
        c: "Poodel",
        correctAnswer: "a"
    },

];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionP = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const submitButton = document.getElementById('submit');
const countObject =document.getElementById('count');


// counter
var count = 40;
var interval = setInterval(function () {
 countObject.innerHTML = count;
    count--;
    if (count === 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done';
    }

}, 1000);

let currentQuiz = 0;
let score = 0;

//start quiz function
function startQuiz() {
    deselectAnswer();
    const currentQuizData = questionData[currentQuiz];

    questionP.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
}

function deselectAnswer() {
    answers.forEach(answers => answers.checked = false);
}

function getSelected() {
    let answer;
    answers.forEach(answers => {
        if (answers.checked) {
            answer = answers.id;
        }
    });

    return answer;
}



submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer === questionData[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < questionData.length) {
        startQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score}/${questionData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`;
    }

});

startQuiz();