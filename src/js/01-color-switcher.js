const bodyEl = document.querySelector('body');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');


stopEl.disabled = true;
let interval = null;

const colorGenerator = {
  DELAY: 100,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    interval = setInterval(() => {
        changeColor();
    }, this.DELAY);
    stopEl.disabled = false;
  },

  start() {
    startEl.addEventListener('click', () => {
      this.interval();
      startEl.disabled = true;
      stopEl.disabled = false;
    });
    stopEl.addEventListener('click', this.stop);
  },

  stop() {
    clearInterval(interval);
    stopEl.disabled = true;
    startEl.disabled = false;
  },
};

function changeColor() {
  bodyEl.style.backgroundColor = `${colorGenerator.getRandomHexColor()}`;
}

colorGenerator.start();
