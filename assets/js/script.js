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

    // detect if current page is inside /pages/
    const inPagesDir = window.location.pathname.includes("/pages/");

    // adjust paths depending on location
    const prefix = inPagesDir ? "../" : "";

    const pages = {
      plumbing: prefix + "pages/plumbing.html",
      electrical: prefix + "pages/electrical.html",
      gardening: prefix + "pages/gardening.html",
      painting: prefix + "pages/painting.html",
      renovation: prefix + "pages/renovation.html",
      cleaning: prefix + "pages/cleaning.html",
      about: prefix + "pages/about.html",
      contact: prefix + "pages/contact.html",
      gallery: prefix + "pages/gallery.html",
      home: prefix + "index.html",
    };

    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert(
        "No matching page found. Try: plumbing, electrical, gardening, painting, renovation, cleaning, about, contact, gallery, home",
      );
    }
  });
}
