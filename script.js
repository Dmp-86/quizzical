// https://opentdb.com/api.php?amount=10&type=multiple

const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again')

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

// event listeners
function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);

}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});



async function loadQuestion(){
    const APIUrl ='https://opentdb.com/api.php?amount=10&type=multiple' ;
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    // console.log(data.results[0]);
    showQuestion(data.results[0]);
}

// display question and options
function showQuestion(data){
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length +1)), 0, correctAnswer); 

    _question.innerHTML = `${data.question} <br> <span class = "category">${data.category} </span>`;
    _options.innerHTML = `
    ${optionsList.map((option, index) => `
        <li> ${index + 1}. <span> ${option} </span> </li>
        `).join('')}
    `;

    selectOption();
}

// option selection
function selectOption(){
    _options.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
    console.log(correctAnswer);
}

// answer checking 
function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = options.querySelector('.selected span').textContent;
        if(selectedAnswer === correctAnswer){
            correctScore++;
            _result.innerHTML = `<p> <i class = "fas fa-check"></i>Correct Answer! </p>`;
        } else {
            _result.innerHTML = `<p> <i class = "fas fa-times"></i>Incorrect Answer! <small><b>Correct Answer: </b> ${correctAnswer}</small></p>`;
        }
    }
}
