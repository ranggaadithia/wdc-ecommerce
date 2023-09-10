window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("bg-glass");
  } else {
    nav.classList.remove("bg-glass");
  }
});

const humList = document.getElementById("humberger-menu");

humList.addEventListener("click", () => {
  humList.classList.toggle("text-pink-400");
  const listMenu = document.getElementById("list-menu");
  const nav = document.querySelector("nav");
  nav.classList.add("bg-glass");
  listMenu.classList.toggle("hidden");
  listMenu.classList.toggle("flex");
});

const searchBar = document.getElementById("search-bar");
const searchButton = document.querySelectorAll("#search-button");

// Fungsi untuk menyembunyikan searchBar
function hideSearchBar() {
  searchBar.classList.add("hidden");
}

// Event listener untuk saat tombol "Esc" ditekan
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    hideSearchBar();
  }
});

// Event listener untuk saat dokumen di-klik
document.addEventListener("click", (event) => {
  // Periksa apakah elemen yang diklik bukan bagian dari searchBar atau searchButton
  if (
    !searchBar.contains(event.target) &&
    !Array.from(searchButton).some((button) =>
      button.contains(event.target)
    )
  ) {
    hideSearchBar();
  }
});

searchButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("text-pink-400");
    const nav = document.querySelector("nav");
    nav.classList.add("bg-glass");
    searchBar.classList.toggle("hidden");

    // Tambahkan penundaan sebelum mendapatkan fokus pada elemen input
    setTimeout(() => {
      const inputElement = searchBar.querySelector(
        'input[name="keyword"]'
      );
      inputElement.focus();
    }, 100);
  });
});


// deleting history
const historyItems = document.querySelectorAll('#history-list');
const closeButtons = document.querySelectorAll('#close-history-button');

closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    historyItems[index].classList.add('hidden');
  });
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav-product");
  const icons = document.querySelectorAll("#nav-icon");

  if (window.scrollY > 10) {
    icons.forEach((e) => {
      e.classList.remove("text-white");
      e.classList.add("text-slate-800");
    });
    nav.classList.remove("bg-black");
    nav.classList.remove("bg-opacity-40");
    nav.classList.add("bg-white");
  } else {
    icons.forEach((e) => {
      e.classList.add("text-white");
      e.classList.remove("text-slate-800");
    });
    nav.classList.add("bg-black");
    nav.classList.add("bg-opacity-40");
    nav.classList.remove("bg-white");
  }
});


document.getElementById("button.play").addEventListener('click', () => {
  console.log("ok");
})


