document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

document.querySelector(`#lbl`).style.border = `2px solid black`;
document.querySelector(`#lbl`).style.width = `30px`;
document.querySelector(`#lbl`).style.height = `30px`;
document.querySelector(`#lbl`).style.textAlign = `center`;
document.querySelector(`#lbl`).textContent = `?`;

const characters = "abcdefghijklmnopqrstuvwxyz";

function restartgame() {}

function getRandomChar() {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

let theChar = getRandomChar();
console.log(theChar);
let order = {};

document.addEventListener(`keypress`, (e) => {
  order[e.key] = order[e.key] + 1 || 1;
  //   console.log(order[e.key]);
  if (e.key === theChar) {
    document.querySelector(`#lbl`).textContent = e.key;
    document.querySelector(`#let-cont`).innerHTML = ``;
    let msg = document.createElement("label");
    msg.style.color = `green`;
    msg.textContent = `YOU WON!`;
    msg.style.display = `block`;
    msg.style.margin = `20px 0`;
    msg.style.fontSize = `20px`;
    let restartbtn = document.createElement(`button`);
    restartbtn.textContent = `TRY AGAIN`;
    document.querySelector(`#let-cont`).appendChild(msg);
    document.querySelector(`#let-cont`).appendChild(restartbtn);

    restartbtn.addEventListener("click", (evv) => {
      theChar = getRandomChar();
      document.querySelector(`#let-cont`).innerHTML = ``;
      document.querySelector(`#lbl`).textContent = `?`;
      order = {};
    });

    // console.log(`its me`);
  } else {
    // console.log("not me");
    if (
      order[e.key] == 1 &&
      document.querySelector(`#lbl`).textContent == `?`
    ) {
      //   console.log(`duplicate`);
      let l = document.createElement("label");
      l.style.padding = `5px`;
      l.textContent = e.key;
      document.querySelector(`#let-cont`).appendChild(l);
    }
  }
  //   console.log(e.key);

  //   console.log(order);
});
