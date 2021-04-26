class ui{
  constructor() {

  }

  showScreen(screenName){
    let screens = document.querySelectorAll('#wrapper > div');
    screens.forEach( (screens) => {
      screens.style.display = 'none';
    });

    let curentScreen = document.getElementById(screenName);
    curentScreen.style.display = 'block';
  }
  onStartBtnClick(callback){
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener('click', callback);
  }

  showQuestion(question) {
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answers[0];
    document.getElementById('answer_2').innerHTML = question.answers[1];
    document.getElementById('answer_3').innerHTML = question.answers[2];
    document.getElementById('answer_4').innerHTML = question.answers[3];
  }

  onclickAnswer(callback) {
    document.getElementById('answer_1').addEventListener('click', () => callback(0));
    document.getElementById('answer_2').addEventListener('click', () => callback(1));
    document.getElementById('answer_3').addEventListener('click', () => callback(2));
    document.getElementById('answer_4').addEventListener('click', () => callback(3));
  }

  setSelectedAnswer(answer) {
    let answerIndex = answer +1;
    let answerDiv = document.getElementById('answer_'+answerIndex);

    answerDiv.style.backgroundColor = "red";
    answerDiv.style.color = 'white';
  }

  resetAnswerStyle() {
    for(let i=0; i<4; i++){
      document.getElementById('answer_' +i).style.backgroundColor = 'while';
      document.getElementById('answer_' +i).style.color = 'black';
    }
  }

  showResult(currentAnswer, correctAnsưer) {
    let currentAnswerIndex = currentAnswer +1;
    let correctAnsưerIndex = correctAnsưer +1;
    document.getElementById('answer_' +currentAnswerIndex).style.backgroundColor = 'red';
    document.getElementById('answer_' +currentAnswerIndex).style.color = 'while';

    document.getElementById('answer_' +currentAnswer).style.backgroundColor = 'green';
    document.getElementById('answer_' +currentAnswer).style.color = 'while';

  }
}

