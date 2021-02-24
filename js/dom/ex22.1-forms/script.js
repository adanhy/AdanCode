let btn = document.querySelector(`.sub-btn`);
btn.addEventListener("click", (e) => {
  if (!confirm(`are you sure?!`)) e.preventDefault();
  else {
    let msg = document.createElement(`h4`);
    msg.textContent = `congratulations you successfully sent this form`;
    msg.style.color = `red`;
    document.body.append(msg);
    e.preventDefault();
  }
});
