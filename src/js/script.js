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


