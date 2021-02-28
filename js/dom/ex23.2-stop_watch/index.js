let swInt;
let sTime;
let passedTime = 0;

document.querySelector("#lbl").innerText = "00:00:00";
console.log(document.querySelector("#lbl"));

document.querySelector("#start").addEventListener("click", (e) => {
  startTime = Date.now();
  setTimeout(() => {
    clearInterval(swInt);
  }, 60 * 60 * 1000);
  swInt = setInterval(() => {
    let elapsed = new Date(Date.now() - startTime + passedTime);
    let sec = ("0" + elapsed.getSeconds()).slice(-2);
    let minutes = ("0" + elapsed.getMinutes()).slice(-2);
    let milisec = ("0" + parseInt(elapsed.getMilliseconds() / 10)).slice(-2);
    const time = `${minutes}:${sec}:${milisec}`;

    document.querySelector("#lbl").innerText = time;
  }, 10);
});

document.querySelector("#stop").addEventListener("click", (e) => {
  clearInterval(swInt);
  passedTime += new Date(Date.now() - startTime).getTime();
});
