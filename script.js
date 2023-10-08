const slider = document.querySelector(".slides");
const labels = document.querySelectorAll(".label-btn");
let currentIndex = 0;
let playpauseBtn = document.getElementById("playpause");
let playpause = true;
let intervalId;

function autoSlide() {
  if (playpause) {
    currentIndex = (currentIndex + 1) % labels.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateAutoNav();
  }
}

function updateAutoNav() {
  labels.forEach((label, index) => {
    label.classList.toggle("active", index === currentIndex);
  });
}

intervalId = setInterval(autoSlide, 10000);

labels.forEach((label, index) => {
  label.addEventListener("click", () => {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateAutoNav();
    clearInterval(intervalId);
    intervalId = setInterval(autoSlide, 10000);
  });
});

updateAutoNav();

playpauseBtn.addEventListener("click", () => {
  playpause = !playpause;

  if (playpause) {
    intervalId = setInterval(autoSlide, 10000);
    playpauseBtn.classList.replace(
      "ri-play-circle-line",
      "ri-pause-circle-line"
    );
  } else {
    clearInterval(intervalId);
    playpauseBtn.classList.replace(
      "ri-pause-circle-line",
      "ri-play-circle-line"
    );
  }
});

// HOVER MENU
const hoverMenus = document.querySelectorAll(".hover-menu");
const menuItems = document.querySelectorAll(".menu-component");

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("mouseover", () => {
    hoverMenus.forEach((menu) => {
      menu.style.opacity = 0;
    });

    hoverMenus[index].style.opacity = 1;
  });
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("mouseout", () => {
    hoverMenus.forEach((menu) => {
      menu.style.opacity = 0;
    });
  });
});

const openIcon = document.getElementById("equal");

// SEARCH AND SHOP

// SLIDER RESPONSIVE
const sliderResp = document.querySelector(".slides-responsive");
const labels2 = document.querySelectorAll(".label-btnResp");
let currentIndex2 = 0;
let intervalId2;

function autoSlide() {
  currentIndex2 = (currentIndex2 + 1) % labels2.length;
  sliderResp.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  updateAutoNavR();
}

function updateAutoNavR() {
  labels2.forEach((label2, index2) => {
    label2.classList.toggle("active", index2 === currentIndex2);
  });
}

intervalId2 = setInterval(autoSlide, 10000);

labels2.forEach((label2, index2) => {
  label2.addEventListener("click", () => {
    currentIndex2 = index2;
    sliderResp.style.transform = `translateX(-${index2 * 100}%)`;
    updateAutoNavR();
    clearInterval(intervalId2);
    intervalId2 = setInterval(autoSlide, 10000);
  });
});

updateAutoNav();
