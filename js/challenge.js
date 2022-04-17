const pauseButton = document.getElementById('pause');
// const unPauseButton = document.getElementById('pause');

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const commentForm = document.getElementById('comment-form');

const intervalID = setInterval(function () {
  let counterText = document.getElementById('counter');
  return counterText.innerText++;
}, 1000);

// pauseButton.addEventListener('click', function () {
//   pauseTimer(intervalID);
//   disable(pauseButton);
//   if (pauseButton.innerText === 'pause') {
//     pauseButton.innerText = 'resume';
//   } else if (pauseButton.innerText === 'resume') {
//     pauseButton.innerText = 'pause';
//     enable(pauseButton);
//     startTimer(pauseButton);
//     console.log(startTimer());
//   }
// });

plusButton.addEventListener('click', buttonPlus);
minusButton.addEventListener('click', buttonMinus);
heartButton.addEventListener('click', heartsPlus);
pauseButton.addEventListener('click', pauseCounter);
commentForm.addEventListener('submit', makeComment);

function pauseCounter() {
  if (pauseButton.innerText === 'pause') {
    pauseButton.innerText = 'resume';
    pauseTimer(intervalID);
    disable(pauseButton);
  } else if (pauseButton.innerText === 'resume') {
    enable(pauseButton);
    startTimer(pauseButton);
    pauseButton.innerText = 'pause';
  }
}

function buttonPlus() {
  counter.innerText++;
}
function buttonMinus() {
  counter.innerText--;
}
function heartsPlus() {
  alert('you like this number');
}

function pauseTimer(intervalID) {
  clearInterval(intervalID);
  //   disable(unPauseButton);
}

function disable(button) {
  button.setAttribute('disabled', '');
}
function enable(button) {
  button.setAttribute('', '');
}

function startTimer() {
  setInterval();
}

function makeComment(e) {
  e.preventDefault();

  const p = document.createElement('p');
  const div = document.getElementById('list');
  p.innerText = document.getElementById('comment-input').value;
  div.append(p);

  e.target.reset();
}

// unPauseButton.addEventListener('click', function () {
//   //   enable(unPauseButton);
// });

// function enable(button) {
//   button.removeAttribute('disabled');
// }

// function togglesPauseButton() {
//   if (pauseButton === true) {
//     disable(pauseButton);
//   } else {
//     enable(pauseButton);
//   }
// }
