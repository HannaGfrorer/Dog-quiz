function runGame(gameType) {

    document.getElementById("question");
   

    // questions//
    let insertQuestion = document.getElementById("question");
    let altOne = getElementById("alternativ-one");
    let alttwo = getElementById("alternativ-two");
    let altthree = getElementById("alternativ-three");
    let newImage = document.getElementById("image-source");

}

/**
 * My questions and answers list
 */
const myQuestions = [{
    question: `What is the most popular dog breed??`,
    answers: [
        { text: 'French bulldog', correct: false },
        { text: 'Labrador retriever', correct: true },
        { text: 'Chihuahua', correct: false },
    ],
    image: '', 
},
{
    question: 'Which dog is the smartest?',
    answers: [
        {text: 'Labrador retriever', correct: false},
        {text: 'Poodle', correct: false}, 
        {text: 'Border collien', correct: true}
    ],
    image: '', 
},
{
    question: 'How old does a dog get on average?',
    answers: [
        {text: '10-20 years', correct: false},
        {text: '7-10 years', correct: false},
        {text: '10-13 years', correct: true}
    ],
    image: '', 
},
{
    question: 'How many teeth does a dog have?',
    answers: [
        {text: '42', correct: true}, 
        {text: '25', correct: false},
        {text: '48', correct: false}, 
    
    ],
    image: '', 
}, 
{
    question: 'The famous cartoon dog Snobben is on the roof of his doghouse most of the time. What race is the Snob?',
    answers: [
        {text: 'Bloodhound', correct: false}, 
        {text: 'Dalmatians', correct: false},
        {text: 'Beagle', correct: true},
      
    ],
    image: '', 
    
}
];



/**