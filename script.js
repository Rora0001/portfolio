// burgermenu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  console.log("click");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

//billedeskift
document.addEventListener("DOMContentLoaded", function () {
  startImageRotation();
});

function startImageRotation() {
  var currentIndex = 1;
  rotateImages();

  function rotateImages() {
    currentIndex = (currentIndex % 6) + 1; // 6 er det totale antal billeder i dit galleri

    var originalSource = document.getElementById("img_" + currentIndex).src;
    document.getElementById("img_" + currentIndex).src = document.getElementById("colorImage_" + currentIndex).src;

    setTimeout(function () {
      document.getElementById("img_" + currentIndex).src = originalSource;
      rotateImages(); // Kalder rekursivt funktionen igen for at fortsætte rotationen
    }, 500);
  }
}

//tekst på "projektsiden"
document.addEventListener("DOMContentLoaded", async function () {
  const elements = document.querySelectorAll(".projekter div");

  async function showText(index) {
    if (index < elements.length) {
      elements[index].classList.add("active");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Juster forsinkelsen (500ms = 0.5s) baseret på din præference
      await showText(index + 1);
    }
  }

  await showText(0);
});

//carousel
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");

  carouselContainer.addEventListener("scroll", function () {
    // Add any additional logic based on scroll position if needed
  });
});

//vis hvilken undersider man er inde på

document.addEventListener("DOMContentLoaded", function () {
  highlightCurrentPage();
});

function highlightCurrentPage() {
  var currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  var links = document.querySelectorAll(".projekter_menu a");

  links.forEach(function (link) {
    var linkPage = link.getAttribute("href").replace(".html", "");
    if (currentPage === linkPage) {
      link.querySelector("div").classList.add("current");
    }
  });
}

//hover ved billederne på forsiden
document.addEventListener("DOMContentLoaded", function () {
  addHoverEffects();
});

function addHoverEffects() {
  const projektBilleder = document.querySelectorAll(".hover_billede_indez");

  projektBilleder.forEach((billede) => {
    billede.addEventListener("mouseover", function () {
      const dataSrc = this.getAttribute("data-src");
      if (dataSrc) {
        this.src = dataSrc;
      }
    });

    billede.addEventListener("mouseout", function () {
      const originalSrc = this.getAttribute("src");
      if (originalSrc) {
        this.src = originalSrc;
      }
    });
  });
}