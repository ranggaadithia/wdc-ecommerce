// search suggest pop-up
const searchBar = document.getElementById('search-bar')
const searchSuggest = document.getElementById('search-suggest')

searchBar.addEventListener('click', function(event) {
 searchSuggest.classList.remove('hidden')
 event.stopPropagation();
})

const backSearch = document.getElementById("back-search")
searchBar.addEventListener('click', function(event) {
  backSearch.classList.remove('hidden')
})
backSearch.addEventListener('click', e => {
  backSearch.classList.add('hidden')
})

document.addEventListener('click', function(event) {
 if (!searchSuggest.contains(event.target)) {
   searchSuggest.classList.add('hidden');
 }
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


