const questions = [
      {
        question : "In what children's game are participants chased by someone designated \"It\"?",
        answers : [
          "Tag",
          "Simon Says",
          "Charades",
          "Hopscotch"
        ],
        correct : 0
      },
      {
        question: "On a radio, stations are changed by using what control?",
        answers : [
          "Tuning",
          "Volume",
          "Bass",
          "Treble"
        ],
        correct : 0
      },
      {
        question: "Which material is most dense?",
        answers : [
          "Silver",
          "Styrofoam",
          "Butter",
          "Gold"
        ],
        correct : 3
      },
      {
        question: "Which state in the United States is largest by area?",
        answers: [
          "Alaska",
          "California",
          "Texas",
          "Hawaii"
        ],
        correct : 0
      },
      {
        question : "What is Aurora Borealis commonly known as?",
        answers: [
          "Fairy Dust",
          "Northern Lights",
          "Book of ages",
          "a Game of Thrones main character"
        ],
        correct: 1
      },
    ];

class altp {
  constructor() {
    this.ui = new ui();
    this.ui.showScreen('welcomeScreen');
    this.currentQuestion = 0;
    this.currentAnswer = null;

    this.bgSound = new sound();
    this.startSound = new sound();
    this.waitAnswerSound = new sound();
    this.questionBgSound = new sound();
    this.correctSound = new sound();
    this.wrongSound = new sound();


    this.ui.onStartBtnClick( () => {
      this.start();
    });
  }

  start(){
    this.ui.showScreen('questionScreen');
    this.startSound.start( () => {
      this.questionBgSound.start();
    });
    this.ui.showQuestion(questions[this.currentQuestion]);
    this.ui.onclickAnswer( (answer) => {
      this.currentAnswer = answer;
      this.ui.setSelectedAnswer(answer);
      this.questionBgSound.stop();
      this.waitAnswerSound.start(() => {
        this.checkAnswer();
      });
    });
  }

  checkAnswer(){
    if(this.currentAnswer == questions[this.currentQuestion].correct){
      this.correctSound.start( () => {
        this.currentQuestion ++;
        this.start();
      });
    }
    else{
      this.ui.showResult(this.currentAnswer, questions[this.currentQuestion].correct);
      this.wrongSound.start( () => {
        this.reset();
      });
    }
  }

  reset() {
    this.currentQuestion = 0;
    this.ui.showScreen('welcomeScreen');
    this.bgSound.stop();
    this.startSound.start( () => {
      this.questionBgSound.start();
    });
  }
}


var game = new altp();
