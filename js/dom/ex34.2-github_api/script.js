const github_url = `https://api.github.com/users/`;

document.querySelector(`#btn`).addEventListener(`click`, () => {
  getProfile(document.querySelector(`#txt`).value);
});

document.querySelector(`#btn`).addEventListener(`click`, () => {
  document.querySelector(`#lbl`).style.visibility = `hidden`;
});

async function getProfile(card) {
  try {
    const gitResp = await fetch(`${github_url}${card}`);

    const cardPromise = await gitResp.json();

    if (cardPromise.message === `Not Found`) {
      let msg = document.querySelector(`#lbl`);
      msg.textContent = `profile not found`;
      msg.style.visibility = `visible`;
    } else {
      const box = document.createElement(`div`);
      box.classList.add(`cardbox`);

      const pic = document.createElement(`img`);
      pic.src = cardPromise.avatar_url;

      const lbl_name = document.createElement(`label`);
      lbl_name.classList.add(`info-label`);
      lbl_name.textContent = `Profile:`;
      const info_name = document.createElement(`label`);
      info_name.textContent = cardPromise.login;

      const lbl_publicrepo = document.createElement(`label`);
      lbl_publicrepo.classList.add(`info-label`);
      lbl_publicrepo.textContent = `Public Repos:`;
      const info_publicrepo = document.createElement(`label`);
      info_publicrepo.textContent = cardPromise.public_repos;

      const textCont1 = document.createElement(`div`);
      const textCont2 = document.createElement(`div`);

      const textWrap = document.createElement(`div`);
      textWrap.classList.add(`txtWrap`);
      textWrap.appendChild(textCont1);
      textWrap.appendChild(textCont2);

      box.appendChild(pic);
      textCont1.appendChild(lbl_name);
      textCont1.appendChild(info_name);
      textCont2.appendChild(lbl_publicrepo);
      textCont2.appendChild(info_publicrepo);

      box.appendChild(textWrap);

      let cards = document.querySelector(`#card-wrapper`);
      cards.appendChild(box);
    }
  } catch (e) {
    console.log(e);
  }
}
