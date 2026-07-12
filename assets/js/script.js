// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Search bar functionality
const searchForm = document.getElementById("searchForm");
const searchInput = searchForm?.querySelector("input");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload
    const query = searchInput.value.trim().toLowerCase();

    const pages = {
      plumbing: "pages/plumbing.html",
      electrical: "pages/electrical.html",
      gardening: "pages/gardening.html",
      painting: "pages/painting.html",
      renovation: "pages/renovation.html",
      cleaning: "pages/cleaning.html",
      about: "pages/about.html",
      contact: "pages/contact.html",
      gallery: "pages/gallery.html",
    };

    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert(
        "No matching page found. Try: plumbing, electrical, gardening, painting, renovation, cleaning,about,contact,gallery",
      );
    }
  });
}
