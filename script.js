const container = document.querySelector('.js-content-container')
const questionNumber = document.querySelector('.js-question-number')
const score = document.querySelector('.js-score')
const answerChoices = document.querySelector('.js-answer-choices')
const question = document.querySelector('.js-question')

const triviaQA = [
    {
        question: 'Which one of these cartoon dads have less than 3 children?',
        answerChoices: ['Hank Hill', 'Bob Belcher', 'Peter Griffin', 'Homer Simpson'],
        correctAnswer: ['Hank Hill']
    },
    {
        question: 'What kind of fish was Nemo in the movie Finding Nemo?',
        answerChoices: ['Surgeon Fish', 'Goldfish', 'Clown Fish', 'Beluga Whale'],
        correctAnswer: ['Clown Fish']
    },
    {
        question: '_____ was the second president of the United States.',
        answerChoices: ['Abraham Lincoln', 'John Adams', 'Thomas Jefferson', 'John Quincy Adams'],
        correctAnswer: ['John Adams']
    },
    {
        question: 'Which of these celebrities has not served time in prison?',
        answerChoices: ['Mariska Hargitay', 'R. Kelly', 'Martha Stewart', 'Lori Loughlin'],
        correctAnswer: ['Mariska Hargitay']
    },
    {
        question: 'All of these are Spider-Man villians EXCEPT for _____',
        answerChoices: ['Green Goblin', 'Doctor Octopus', 'Man-Spider', 'The Thing'],
        correctAnswer: ['The Thing']
    },
]

document.addEventListener('DOMContentLoaded', () => {
    question.textContent = triviaQA[0].question

    for(let i = 0; i < triviaQA[0].answerChoices.length; i++){
        let answer = document.createElement('button')
        answer.textContent = triviaQA[0].answerChoices[i]
        answer.classList.add('answer')
        answerChoices.appendChild(answer)
    }

})