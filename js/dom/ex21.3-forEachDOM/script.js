const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

let ol = document.createElement("ol");

users.forEach((v) => {
  let li = document.createElement("li");
  li.textContent = `${v.firstName}  ${v.lastName}`;
  li.dataset.id = v.id;
  ol.append(li);
});

ol.style.listStyle = `none`;

let myDiv = document.createElement(`div`);
myDiv.append(ol);

document.body.append(myDiv);
