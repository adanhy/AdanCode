// 896958c4

function clearbox() {
  document.querySelector(`#movie-box`).innerHTML = "";
}

document.querySelector(`#btn`).addEventListener(`click`, async () => {
  try {
    clearbox();
    let item = await getMovieByTitle(document.querySelector(`#txt`).value);
    console.log(item);
    if (!item.Response) {
      throw new Error(item.Error);
    }
    // console.log(item.Ratings.length);
    if (item.Ratings.length < 3) {
      throw new Error(`not enough ratings`);
    }

    let bx = document.querySelector(`#movie-box`);
    const img = document.createElement(`img`);
    img.src = item.Poster;
    img.alt = `${item.Title} poster`;
    img.style.height = `auto`;
    img.style.width = `15rem`;
    bx.appendChild(img);

    const title = document.createElement(`h2`);
    title.textContent = item.Title;
    bx.append(title);

    const gen = document.createElement(`div`);
    gen.innerHTML = `<strong>Genre: </strong>  ${item.Genre}`;
    bx.appendChild(gen);

    const year = document.createElement(`div`);
    const date = new Date(item.Released);
    year.innerHTML = `<strong>Year: </strong> ${date.getFullYear()}`;
    bx.appendChild(year);

    const plot = document.createElement(`p`);
    plot.innerHTML = `<strong>Plot: </strong> ${item.Plot}`;
    bx.appendChild(plot);

    const dir = document.createElement(`div`);
    dir.innerHTML = `<strong>Director: </strong> ${item.Director}`;
    bx.appendChild(dir);

    const actors = document.createElement(`div`);
    actors.innerHTML = `<strong>Actors: </strong> ${item.Actors}`;
    bx.appendChild(actors);

    const ratings = document.createElement(`div`);

    for (let i = 0; i < item.Ratings.length; i++) {
      ratings.innerHTML += `<strong>${item.Ratings[i].Source} Rating:</strong>${item.Ratings[i].Value}<br>   `;
    }
    bx.appendChild(ratings);
  } catch (error) {
    let bx = document.querySelector(`#movie-box`);

    const errmsg = document.createElement(`label`);
    errmsg.style.color = `red`;
    errmsg.textContent = error;
    bx.appendChild(errmsg);
  }
});

async function getMovieByTitle(ttl) {
  const movieResp = await fetch(
    `http://www.omdbapi.com/?t=${ttl}&type=movie&apikey=896958c4`
  );
  const movProm = await movieResp.json();
  return movProm;
}
