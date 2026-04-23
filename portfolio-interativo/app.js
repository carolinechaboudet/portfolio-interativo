let current = 0;
const scenes = document.querySelectorAll(".scene");

function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[index].classList.add("active");
}

function next() {
  if (current < scenes.length - 1) {
    current++;
    showScene(current);
  }
}

function prev() {
  if (current > 0) {
    current--;
    showScene(current);
  }
}

// scroll
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) next();
  else prev();
});

// teclado
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") next();
  if (e.key === "ArrowUp") prev();
});

const params = new URLSearchParams(window.location.search);
const isPresenter = params.get("mode") === "presenter";

if (isPresenter) {
  const controls = document.createElement("div");
  controls.innerHTML = `
    <button onclick="prev()">◀</button>
    <button onclick="next()">▶</button>
  `;
  controls.style.position = "fixed";
  controls.style.bottom = "20px";
  controls.style.right = "20px";

  document.body.appendChild(controls);
}
