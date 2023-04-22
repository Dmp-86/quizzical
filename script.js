// https://opentdb.com/api.php?amount=10&type=multiple

const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');


let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;


document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
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
}
