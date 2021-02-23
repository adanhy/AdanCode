document.body.style.display = `flex`;
document.body.style.flexDirection = `column`;
document.body.style.justifyContent = `center`;
document.body.style.alignItems = `center`;

let header = document.createElement(`h1`);
header.textContent = `Text to copy:`;

document.body.append(header);

let password = document.createElement(`h2`);
password.textContent = `123456`;
document.body.append(password);

let container = document.createElement(`div`);
container.style.display = `flex`;
container.style.justifyContent = `center`;
container.style.alignItems = `center`;
container.style.width = `400px`;
container.style.height = `50px`;
container.style.background = `#ed1928`;

for (let i = 0; i < 6; i++) {
  let txtbx = document.createElement("input");
  txtbx.type = `text`;
  txtbx.style.margin = `0 10px`;
  txtbx.style.width = `30px`;
  txtbx.style.height = `30px`;
  txtbx.maxLength = `1`;
  container.append(txtbx);
}

document.body.append(container);

let btn = document.createElement(`button`);
btn.textContent = `verify`;
btn.style.marginTop = "20px";
btn.style.fontSize = `20px`;
btn.style.padding = `10px`;

document.body.append(btn);

container.addEventListener("input", (e) => {
  console.log(e);
  e.target.nextSibling && e.target.value.length
    ? e.target.nextSibling.focus()
    : null;
});

container.addEventListener("paste", (event) => {
  console.log(event.target.parentElement.children);
  let paste = (event.clipboardData || window.clipboardData).getData(`text`);
  console.log(paste.length);
  if (paste.length <= `6`) {
    for (let i = 0; i < paste.length; i++) {
      console.log(paste[i]);

      event.target.parentElement.children[i].value = paste[i];
      const selection = window.getSelection();
      console.log(selection);
      if (!selection.rangeCount) return false;
    }
  }
});
