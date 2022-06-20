const buttons = document.querySelectorAll('.controls button');
const playButton = document.querySelector('#playbutton');
const pauseButton = document.querySelector('#pausebutton');
const durationinput = document.querySelector('#durationinput');
const circle = document.querySelector('circle');

const perimeter = Math.PI * 2 * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);
// circle.setAttribute('stroke-dashoffset', 0);

let duration;

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    buttons.forEach(function (elem) {
      elem.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const timer = new Timer(durationinput, playButton, pauseButton, {
  onStart(tottalDuration) {
    duration = tottalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    concole.log('oncomplete');
  },
});
