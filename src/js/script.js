const searchBar = document.getElementById('search-bar')
const searchSuggest = document.getElementById('search-suggest')

searchBar.addEventListener('click', function(event) {
 searchSuggest.classList.remove('d-none')
 event.stopPropagation();
})

document.addEventListener('click', function(event) {
 if (!searchSuggest.contains(event.target)) {
   searchSuggest.classList.add('d-none');
 }
});