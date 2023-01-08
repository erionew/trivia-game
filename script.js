const container = document.querySelector('.js-content-container')
const startBtn = document.querySelector('.js-start-btn')
const questionNumber = document.querySelector('.js-question-number')
const score = document.querySelector('.js-score')
const answerChoices = document.querySelector('.js-answer-choices')
const answers = document.querySelectorAll('.answer')
const question = document.querySelector('.js-question')
const gameOverScore = document.querySelector('.js-game-over-score')
let scoreValue = 0;
let currentQuestion = 0;

const triviaQA = [
    {
        question: 'Which one of these cartoon dads have less than 3 children?',
        answers: ['Hank Hill', 'Bob Belcher', 'Peter Griffin', 'Homer Simpson'],
        correctAnswer: ['Hank Hill']
    },
    {
        question: 'What kind of fish was Nemo in the movie Finding Nemo?',
        answers: ['Surgeon Fish', 'Goldfish', 'Clown Fish', 'Beluga Whale'],
        correctAnswer: ['Clown Fish']
    },
    {
        question: '_____ was the second president of the United States.',
        answers: ['Abraham Lincoln', 'John Adams', 'Thomas Jefferson', 'John Quincy Adams'],
        correctAnswer: ['John Adams']
    },
    {
        question: 'Which of these celebrities has not served time in prison?',
        answers: ['Mariska Hargitay', 'R. Kelly', 'Martha Stewart', 'Lori Loughlin'],
        correctAnswer: ['Mariska Hargitay']
    },
    {
        question: 'All of these are Spider-Man villians EXCEPT for _____',
        answers: ['Green Goblin', 'Doctor Octopus', 'Man-Spider', 'The Thing'],
        correctAnswer: ['The Thing']
    },
]



function populateQnA(){
    if(currentQuestion < triviaQA.length){
    question.textContent = triviaQA[currentQuestion].question 
    questionNumber.textContent = `${currentQuestion+1}/${triviaQA.length}`
    document.querySelector('.js-answer-1').textContent = triviaQA[currentQuestion].answers[0]
    document.querySelector('.js-answer-2').textContent = triviaQA[currentQuestion].answers[1]
    document.querySelector('.js-answer-3').textContent = triviaQA[currentQuestion].answers[2]
    document.querySelector('.js-answer-4').textContent = triviaQA[currentQuestion].answers[3]
    } else {
        document.querySelector('.container--game-over').style.display = 'flex'
        gameOverScore.textContent = `$${scoreValue-1}`;
        document.querySelector('.js-replay-btn').addEventListener('click', () => {
        location.reload();
    })
    }
    
}



let count = 0;

function handleAnswerClickEvent(e) {
    
        
        e.preventDefault()
        let choice = e.target.textContent
        
        if(choice == triviaQA[currentQuestion].correctAnswer[0]){
            let addPoints = setInterval(() => {
                score.textContent = `$${scoreValue++}`
                count++
                if(count == 101){
                    clearInterval(addPoints)
                    count = 1;
                }
            }, 5)
            currentQuestion++
        } else {
            currentQuestion++
        }
        
        populateQnA()
        
}

// generates question and answer when the page is loaded
startBtn.addEventListener('click', () => {
    document.querySelector('.container--main-menu').style.display = 'none'
    container.style.display = 'flex'
    

    populateQnA()
    
        for(let i = 0; i < answerChoices.children.length; i++){
            answerChoices.children[i].addEventListener('click', handleAnswerClickEvent)
        }
    

})

