const text = document.querySelector(".intro-text");

const colors = [
  "#ff4d4d",
  "#4dff88",
  "#4da6ff",
  "#ffd24d",
  "#c44dff",
  "#ff7ad9"
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const words = text.textContent.trim().split(/\s+/);

text.textContent = "";

const spans = words.map(word => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  text.appendChild(span);
  return span;
});

text.addEventListener("mouseenter", () => {
  spans.forEach(span => {
    span.style.color = randomColor();
    span.classList.add("active");
  });
});

text.addEventListener("mouseleave", () => {
  spans.forEach(span => {
    span.style.color = "";
    span.classList.remove("active");
  });
});