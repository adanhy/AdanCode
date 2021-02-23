let div = document.createElement(`div`);
div.classList.add(`wrapper`);

document.body.append(div);

let ulist = document.createElement(`ul`);

let litem = document.createElement(`li`);
litem.textContent = "one";
ulist.append(litem);

litem = document.createElement(`li`);
litem.textContent = "two";
ulist.append(litem);

litem = document.createElement(`li`);
litem.textContent = "three";
ulist.append(litem);

div.append(ulist);

let img = document.createElement("img");
img.src = `https://i.pinimg.com/originals/9c/e5/10/9ce510e425193f2ed6089354214e9657.jpg`;
img.style.width = `250px`;
img.classList.add(`cute`);
img.alt = `Cute Puppy`;

div.append(img);

let div2 = document.createElement(`div`);
div2.innerHTML = `
  <p>parararararar 1</p>
  <p>patatafkljafiasjf 2</p>
`;

div.prepend(div2);
div.childNodes[0].children[1].classList.add(`warning`);
console.log(div.childNodes[0].children[1]);
div.childNodes[0].children[0].remove();

function generatePlayerCard(name, age, height) {
  return `

<div class="playerCard">
<h2>Name: ${name}, ${age}</h2>

<p>They are ${height} and ${age} years old. In dog years this person would be ${
    age * 12
  }. that would be a tall dog!</p>
  </div>`;
}

let CardCont = document.createElement(`div`);
let Cardiv = generatePlayerCard(`adan`, 31, 178);
CardCont.innerHTML = Cardiv;

div.prepend(CardCont);

console.log();
