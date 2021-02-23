let el = document.querySelector(`.start-here`);
el.textContent = `main title`;

let sub4 = document.createElement(`li`);
sub4.textContent = `sub title 4`;

el.appendChild(sub4);

el.nextSibling.nextSibling.children[0].appendChild(sub4);

el.nextElementSibling.nextElementSibling.remove();

el.previousElementSibling.textContent = `Master Of The Dom`;
console.log(
  (el.parentElement.nextElementSibling.children[0].textContent = `adplfj;lfjk a;lf a;lfk;a lkf`)
);
