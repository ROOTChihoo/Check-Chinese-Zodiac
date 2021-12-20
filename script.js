'use strict';
// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = '猜数字游戏...';
// // document.querySelector('.message').textContent = '猜数字游戏...';

// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 100;

// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //when there's no input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number...';

//     //when player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (score > highscore) {
//       highscore = score;
//     }
//     document.querySelector('.highscore').textContent = highscore;

//     //when gusess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     } //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!~';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.score').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// let animal = [
//   'Zi Rat',
//   'Chou Cow',
//   'Yin Tiger',
//   'Mao Rabit',
//   'Chen Dragon',
//   'Yi Snake',
//   'Wu Horse',
//   'Wei Sheep',
//   'Shen Monkey',
//   'You Rooster',
//   'Xu Dog',
//   'Hai Boar',
// ];
// //🐀 Rat
// 🐂 Ox
// 🐅 Tiger
// 🐇 Rabbit
// 🐉 Dragon
// 🐍 Snake
// 🐎 Horse
// 🐑 Sheep
// 🐒 Monkey
// 🐓 Rooster
// 🐕 Dog
// 🐖 Pig

document.querySelector('.check').addEventListener('click', function () {
  const year = Number(document.querySelector('.year').value);
  console.log(year, typeof year);
  let animalYear = year % 12;
  console.log(animalYear);

  switch (animalYear) {
    case 4:
      document.querySelector('.zodiac').textContent = 'Zi Rat';
      document.querySelector('.animal').textContent = '🐀';
      break;
    case 5:
      document.querySelector('.zodiac').textContent = 'Chou Cow';
      document.querySelector('.animal').textContent = '🐂';
      break;
    case 6:
      document.querySelector('.zodiac').textContent = 'Yin Tiger';
      document.querySelector('.animal').textContent = '🐅';
      break;
    case 7:
      document.querySelector('.zodiac').textContent = 'Mao Rabit';
      document.querySelector('.animal').textContent = '🐇';
      break;
    case 8:
      document.querySelector('.zodiac').textContent = 'Chen Dragon';
      document.querySelector('.animal').textContent = '🐉';
      break;
    case 9:
      document.querySelector('.zodiac').textContent = 'Yi Snaket';
      document.querySelector('.animal').textContent = '🐍';
      break;
    case 10:
      document.querySelector('.zodiac').textContent = 'Wu Horse';
      document.querySelector('.animal').textContent = '🐎';
      break;
    case 11:
      document.querySelector('.zodiac').textContent = 'Wei Sheep';
      document.querySelector('.animal').textContent = '🐑';
      break;
    case 0:
      document.querySelector('.zodiac').textContent = 'Shen Monkey';
      document.querySelector('.animal').textContent = '🐒';
      break;
    case 1:
      document.querySelector('.zodiac').textContent = 'You Rooster';
      document.querySelector('.animal').textContent = '🐓';
      break;
    case 2:
      document.querySelector('.zodiac').textContent = 'Xu Dog';
      document.querySelector('.animal').textContent = '🐕';
      break;
    case 3:
      document.querySelector('.zodiac').textContent = 'Hai Boar';
      document.querySelector('.animal').textContent = '🐖';
      break;
    default:
      document.querySelector('.zodiac').textContent = '?';
      document.querySelector('.animal').textContent = '?';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.year').textContent = '';
  document.querySelector('.zodiac').textContent = '?';
  document.querySelector('.animal').textContent = '?';
});
