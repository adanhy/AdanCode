const github_url = `https://api.github.com/users/`;

const history = {};

function handleError(e) {
  console.log(e);
}

function displayIssue(txt) {
  let msg = document.querySelector(`#lbl`);
  msg.textContent = txt;
  msg.style.visibility = `visible`;
}

function clearIssue() {
  let msg = document.querySelector(`#lbl`);
  msg.textContent = "";
  msg.style.visibility = `hidden`;
}

function validateInput(card) {}

document.querySelector(`#btn`).addEventListener(`click`, async () => {
  clearIssue();
  await getProfile(document.querySelector(`#txt`).value);
  document.querySelector(`#lbl`).style.visibility = `hidden`;
  document.querySelector(`#txt`).value = "";
});

document.querySelector("#txt").addEventListener("keypress", async (e) => {
  clearIssue();
  if (e.key === "Enter") {
    await getProfile(document.querySelector(`#txt`).value);
    document.querySelector(`#txt`).value = "";
  }
});

async function getProfile(card) {
  try {
    if (history[card]) {
      displayIssue(`already searched!`);
      return;
    }
    if (card.split(` `).length > 1 || card.length == 0) {
      displayIssue(`invalid input!`);
      return;
    }

    const gitResp = await fetch(`${github_url}${card}`);
    if (!gitResp.ok) {
      throw new Error(gitResp.message);
    }
    const cardPromise = await gitResp.json();

    if (cardPromise.message === `Not Found`) {
      displayIssue(`profile not found`);
    } else {
      const box = document.createElement(`div`);
      box.classList.add(`cardbox`);

      const pic = document.createElement(`img`);
      pic.src = cardPromise.avatar_url;
      pic.alt = `${cardPromise.login} profile pic`;

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
      history[card] = history[card] + 1 || 1;
      document.querySelector(`#txt`).focus();
    }
  } catch (e) {
    handleError(e);
  }
}

document.querySelector(`#txt`).focus();
