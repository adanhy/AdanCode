let txt = document.querySelector(`#textbox`);
let btn = document.querySelector(`#btn`);

btn.addEventListener("click", (event) => {
  e = document.querySelector(`#textbox`);
  if (e.value > 18) {
    e.value = `you can drink`;
  } else e.value = `you’re too young`;
});
