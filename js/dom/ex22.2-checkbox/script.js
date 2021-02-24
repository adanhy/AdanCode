let cb = document.querySelector(`#cbox`); //this is the checkbox from the html!
cb.style.display = `block`;
cb.addEventListener(`change`, (e) => {
  if (e.currentTarget.checked) {
    let img = document.createElement(`img`);
    img.src =
      "https://www.globaltimes.cn/Portals/0/attachment/2019/2019-10-17/d7751d25-f9ed-4094-b623-114b90c77196.jpeg";
    img.alt = `macao`;
    img.classList.add(`mac-pic`);
    document.body.append(img);
    document.body.style.background = `orange`;
  }
  if (!e.currentTarget.checked) {
    document.querySelector(`.mac-pic`).remove();
    document.body.style.background = `green`;
  }
});
