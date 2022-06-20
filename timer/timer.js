class Timer {
  constructor(durationinput, playButton, pauseButton, callbacks) {
    this.durationinput = durationinput;
    this.playButton = playButton;
    this.pauseButton = pauseButton;

    this.playButton.addEventListener('click', this.play);
    this.pauseButton.addEventListener('click', this.pause);
    this.durationinput.addEventListener('change', this.handleChange);

    this.onStart = callbacks.onStart;
    this.onTick = callbacks.onTick;
    this.onComplete = callbacks.onComplete;

    this.duration = parseFloat(this.durationinput.value).toFixed(2);
  }

  handleChange = () => {
    this.duration = parseFloat(this.durationinput.value).toFixed(2);
  };

  play = () => {
    this.playButton.disabled = true;
    if (this.onStart) this.onStart(this.duration);
    this.tick();
    this.interval = setInterval(this.tick, 10);
  };

  pause = () => {
    this.playButton.disabled = false;
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 0.01;
    }
    if (this.onTick) this.onTick(this.timeRemaining);
  };

  get timeRemaining() {
    return parseFloat(this.durationinput.value).toFixed(2);
  }

  set timeRemaining(time) {
    this.durationinput.value = time.toFixed(2);
  }
}
