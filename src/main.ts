/********************************************************Import*********************************************************************************************************************/
import './style/style.scss';
import { shuffle } from './utils';
/********************************************************Variables*******************************************************************************************************************/

const gameDescription = document.querySelector('#gameDescription');
const accpteBtn = document.querySelector('#toTheSecandPage');
const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');
let currentQuestion = 0;
let points = 0;

let playerName = '';

const questions = [
  {
    questionText: 'Where will the world cup be in 2022?',
    answerOptions: [
      'Qatar',
      'USA',
      'Sweden'
    ],
    correctAnswer: 'Qatar',
  },
  {
    questionText: 'How many teams are in the world cup?',
    answerOptions: [
      '30',
      '38',
      '32'
    ],
    correctAnswer: '32',
  },
  {
    questionText: 'What is the name of the organization in charge of the World Cup?',
    answerOptions: [
      'FA',
      'FIFA',
      'UEFA'
    ],
    correctAnswer: 'FIFA',
  }, 
  {
    questionText: 'Which national team won the last world cup?',
    answerOptions: [
      'Brazil',
      'France',
      'Argentina'
    ],
    correctAnswer: 'France',
  }, 
  {
    questionText: 'What is the name of the young player who has won the world cup?',
    answerOptions: [
      'Zidane',
      'Mbappé',
      'Pelé'
    ],
    correctAnswer: 'Pelé',
  }, 
  {
    questionText: 'Where will the world cup be in 2026?',
    answerOptions: [
      'USA, Canada and Mexico',
      'Scandinavia',
      'North Korea'
    ],
    correctAnswer: 'USA, Canada and Mexico',
  }, 
  {
    questionText: 'Which team has won the most World Cups of all time?',
    answerOptions: [
      'France',
      'Brazil',
      'Germany'
    ],
    correctAnswer: 'Brazil',
  }, 
  {
    questionText: 'How many substitutions can be made during a match in World Cups?',
    answerOptions: [
      '5',
      '3',
      '4'
    ],
    correctAnswer: '5',
  }, 
  {
    questionText: 'Who has scored the most goals in the World Cup?',
    answerOptions: [
      'Klose',
      'Pelé',
      'Maradona'
    ],
    correctAnswer: 'Klose',
  }, 
  {
    questionText: 'How far has sweden reached the furthest in a world cup?',
    answerOptions: [
      'Semi-final',
      'Final',
      'Round of 16 final'
    ],
    correctAnswer: 'Final',
  },
];

/**************************************************************************Function*************************************************************************************************/
accpteBtn.addEventListener('click', goToGame );

document.querySelector('#startGameBtn').addEventListener('click', startGame);

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);

answer1Btn.addEventListener('click', nextQuestion);
answer2Btn.addEventListener('click', nextQuestion);
answer3Btn.addEventListener('click', nextQuestion);

document.querySelector('#restartGameBtn').addEventListener('click', restartGame);

function goToGame() {
  document.querySelector('#background-image').style.display = 'none';
  document.querySelector('#secnadPage').style.display = 'block';
}



function startGame() {
  // Spara spelarens nick
  playerName = document.querySelector('#playerNameInput').value;
  
  // Dölj HTML-elementen
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  document.querySelector('#questionContainer').style.display = 'block';
  nextQuestion ();
}


function checkAnswer(e) {
  const userAnswer = e.currentTarget.innerHTML; // vilket svarsalternativ
  // vilken som är den aktuella frågan
  //varför -1: - 1 för att vi i nextQuestion har redan "gått vidare" till nästa fråga
  // så vi vill ha rätt svar för föregående fråga
  const correctAnswer = questions[currentQuestion - 1].correctAnswer;
  if (userAnswer === correctAnswer) { // jämföra frågans rätt svar med tryckt knapp
    // ge ett poäng!
    points++;
  } else if (points > 0) {
    points --;
  }
}


function nextQuestion() {
  if (currentQuestion >= shuffle(questions).length) { // > =
    gameOver();
    return;
  }

  questionTextDiv.innerHTML = questions[currentQuestion].questionText;
  answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];

  currentQuestion++; // += 1, currentQuestion = currentQuestion + 1;
}



function restartGame() {
  document.querySelector('#gameOver').style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'block';
  document.querySelector('#questionContainer').classList.remove('hidden');
  currentQuestion = 0;
  points = 0;


}

function gameOver() {
  document.querySelector('#gameOver').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'none';
  document.querySelector('#pointsContainer').innerHTML = `Du fick ${points} poäng!`;
  document.querySelector('#restartGameBtn ').style.display = 'block';

  // document.querySelector('#gameOver').classList.toggle('hidden');
}
