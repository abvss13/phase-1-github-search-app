const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the value from the search input
  const searchInput = document.querySelector('#search-input').value;

  // Call the searchUsers function with the search input value
  searchUsers(searchInput);
});
