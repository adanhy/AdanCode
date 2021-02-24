let ressss = function resetGame() {
  car1.classList.remove(`active`);
  player1.firstElementChild.classList.add(`active`);
  car2.classList.remove(`active`);
  player2.firstElementChild.classList.add(`active`);

  document.querySelector(`.msg-box`).remove();

  car1 = document.querySelector(`#player1-race > .active`);
  car2 = document.querySelector(`#player2-race > .active`);
};

function Winner(name) {
  let msg = document.createElement(`div`);
  msg.classList.add(`msg-box`);
  msg.textContent = `the winner is ${name}`;
  msg.style.color = `red`;
  document.body.append(msg);
  let reset = document.createElement(`button`);
  reset.textContent = `restart race`;
  msg.appendChild(reset);

  reset.addEventListener(`click`, ressss);
}

let player1 = document.querySelector(`#player1-race`);
let car1 = document.querySelector(`#player1-race > .active`);
let player2 = document.querySelector(`#player2-race`);
let car2 = document.querySelector(`#player2-race > .active`);

document.addEventListener("keydown", (ev) => {
  if (ev.key == `ArrowUp` && car1.nextElementSibling) {
    car1.nextElementSibling.classList.add(`active`);
    car1.classList.remove(`active`);
    car1 = document.querySelector(`#player1-race > .active`);
    if (
      car1.classList.contains("finish") &&
      !car2.classList.contains("finish")
    ) {
      Winner(`player1`);
    }
  }
  if (ev.key == `a` && car2.nextElementSibling) {
    car2.nextElementSibling.classList.add(`active`);
    car2.classList.remove(`active`);
    car2 = document.querySelector(`#player2-race > .active`);
    if (
      car2.classList.contains("finish") &&
      !car1.classList.contains("finish")
    ) {
      Winner(`player2`);
    }
  }
});
