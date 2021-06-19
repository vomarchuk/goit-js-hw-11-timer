class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();

    this.daysValue = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursValue = document.querySelector(
      `${selector} [data-value="hours"]`
    );
    this.minsValue = document.querySelector(`${selector} [data-value="mins"]`);
    this.secsValue = document.querySelector(`${selector} [data-value="secs"]`);

    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimerComponents(deltaTime);
      this.updateTime(time);
    }, 1000);
  }

  updateTime(time) {
    this.secsValue.textContent = time.secs;
    this.minsValue.textContent = time.mins;
    this.hoursValue.textContent = time.hours;
    this.daysValue.textContent = time.days;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 21, 2021'),
});
