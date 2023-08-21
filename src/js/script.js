const searchBar = document.getElementById('search-bar')
const searchSuggest = document.getElementById('search-suggest')

searchBar.addEventListener('click', function(event) {
 searchSuggest.classList.remove('hidden')
 event.stopPropagation();
})

document.addEventListener('click', function(event) {
 if (!searchSuggest.contains(event.target)) {
   searchSuggest.classList.add('hidden');
 }
});


