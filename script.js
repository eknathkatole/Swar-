// SWAR SWAMI GURUKUL — INTERACTION SCRIPT

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-open");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-open");
    });
  });
}

const mainHeader = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (mainHeader) {
    if (window.scrollY > 40) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }
  }
}, { passive: true });
