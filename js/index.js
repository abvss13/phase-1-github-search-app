const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the value from the search input
  const searchInput = document.querySelector('#search-input').value;

  // Call the searchUsers function with the search input value
  searchUsers(searchInput);
});

function searchUsers(searchQuery) {
    const url = `https://api.github.com/search/users?q=${searchQuery}`;
  
    // Make a GET request to the User Search Endpoint
    fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Pass the user data to a function to display the results
        displayUsers(data.items);
      })
      .catch((error) => console.log(error));
  }
  
  function displayUsers(users) {
    const container = document.querySelector('#results-container');
    container.innerHTML = '';
  
    users.forEach((user) => {
      // Create elements to display user information
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
  
      const avatar = document.createElement('img');
      avatar.src = user.avatar_url;
  
      const username = document.createElement('h3');
      username.textContent = user.login;
  
      const profileLink = document.createElement('a');
      profileLink.href = user.html_url;
      profileLink.textContent = 'View Profile';
  
      // Append elements to the user card
      userCard.appendChild(avatar);
      userCard.appendChild(username);
      userCard.appendChild(profileLink);
  
      // Append the user card to the container
      container.appendChild(userCard);
    });
  }
  
  function displayUsers(users) {
    // ...
  
    users.forEach((user) => {
      // ...
  
      userCard.addEventListener('click', function () {
        // Call the function to fetch and display user repositories
        fetchUserRepositories(user.login);
      });
  
      // ...
    });
  
    // ...
  }
  