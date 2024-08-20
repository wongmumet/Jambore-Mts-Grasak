const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carousel.children.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const width = carousel.children[0].getBoundingClientRect().width;
  carousel.style.transform = `translateX(${-currentIndex * width}px)`;
}
function moveCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const scrollAmount = 300; // Jumlah pixel untuk digeser
  carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}
