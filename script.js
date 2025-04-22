function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const featureBoxes = document.querySelectorAll(".feature-box");
  featureBoxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add("show");
    }
  });
});
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
  });
});
