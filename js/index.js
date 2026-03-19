const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

document.addEventListener("DOMContentLoaded", () => {
  const savedTils = JSON.parse(localStorage.getItem("tils")) || [];
  savedTils.forEach(til => addTilToList(til.date, til.title, til.content));
});

tilForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 페이지 새로고침 방지

  const date = document.querySelector("#til-date").value;
  const title = document.querySelector("#til-title").value;
  const content = document.querySelector("#til-content").value;

  addTilToList(date, title, content);

  saveTil(date, title, content);

  tilForm.reset();
});

function addTilToList(date, title, content) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");

  newArticle.innerHTML = `
    <time></time>
    <h3></h3>
    <p></p>
  `;

  newArticle.querySelector("time").textContent = date;
  newArticle.querySelector("h3").textContent = title;
  newArticle.querySelector("p").textContent = content;

  tilList.prepend(newArticle);
}

function saveTil(date, title, content) {
  const tils = JSON.parse(localStorage.getItem("tils")) || [];
  tils.push({ date, title, content });
  localStorage.setItem("tils", JSON.stringify(tils));
}