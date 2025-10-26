// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Sticky Navigation
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Gallery Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter gallery items
    const filter = btn.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show loading state
  formMessage.innerHTML =
    '<div class="flex items-center"><div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900 mr-2"></div> Mengirim pesan...</div>';
  formMessage.classList.remove("hidden");
  formMessage.classList.add("bg-blue-100", "text-blue-700");

  // Simulate form submission
  setTimeout(() => {
    formMessage.innerHTML =
      '<i class="fas fa-check-circle mr-2"></i> Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.';
    formMessage.classList.remove("bg-blue-100");
    formMessage.classList.add("bg-green-100", "text-green-700");

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 5000);
  }, 1500);
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
