//Header Search Button
const searchBtn = document.querySelector('.navigation-search-label'); // Search Label
const searchBox = document.querySelector('.navigation-search-item-container'); //Input Search Container
const searchIcon = document.querySelector('.navigation-search-button'); // Search Icon
const searchClsBtn = document.querySelector('.navigation-close-search-button'); // Search Close Button
const searchInput = document.querySelector('.navigation-search-box'); // Input Object

searchBtn.addEventListener('click', (e) => {
    e.target.style.display = "none"; // Hide the search button when clicked
    searchBox.style.display = "flex";
})

searchClsBtn.addEventListener('click', closeSearchBox)

searchInput.addEventListener('focusout', closeSearchBox)

function closeSearchBox() {
    searchBox.style.display = "none";
    searchBtn.style.display = "inline-block";
}