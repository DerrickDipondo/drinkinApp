// Fetch JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Extract the array of beers from the JSON data.
    const beers = data.beers;

    // Get references to the form, input, and results container elements
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('input[name="query"]');
    const resultsContainer = document.getElementById('results');

    // Event Listener 1: Handle form submission
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent page reload on form submission

      // Get the user's search query and normalize it to lowercase
      const query = searchInput.value.trim().toLowerCase();  // Use 'value' instead of 'ariaValueMax'

      // Clear any previous results displayed in the results container
      resultsContainer.innerHTML = '';

      if (query) {
        // Filter beers based on the search query
        const filteredBeers = beers.filter(beer =>
          // Check if the query matches the beer's name, style, or brewery
          beer.name.toLowerCase().includes(query) ||
          beer.style.toLowerCase().includes(query) ||
          beer.brewery.toLowerCase().includes(query)
        );

        // Check if there are any matching beers
        if (filteredBeers.length > 0) {
          // Iterate over the filtered beers and create a result item for each
          filteredBeers.forEach(beer => {
            // Create a div element to hold the beer details
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            // Set the inner HTML of the result item with the beer's details
            resultItem.innerHTML = `
              <img src="${beer.image}" alt="${beer.name}"> <!-- Display beer image -->
              <div class="details"> <!-- Container for beer details -->
                <h3>${beer.name}</h3> <!-- Display beer name -->
                <p><strong>Style:</strong> ${beer.style}</p> <!-- Display beer style -->
                <p><strong>Brewery:</strong> ${beer.brewery}</p> <!-- Display beer brewery -->
                <p><strong>ABV:</strong> ${beer.abv}%</p> <!-- Display beer ABV -->
              </div>
            `;

            // Append the result item to the results container
            resultsContainer.appendChild(resultItem);

            // Event Listener 3: Click on a result to display more details
            resultItem.addEventListener('click', () => {
              alert(`You selected ${beer.name} from ${beer.brewery}. ABV: ${beer.abv}%`);
            });
          });
        } else {
          // Display a message if no results match the query
          resultsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
        }
      } else {
        // Display a message if the search input is empty
        resultsContainer.innerHTML = `<p>Please enter a search term.</p>`;
      }
    });

    // Event Listener 2: Input event for clearing results on typing
    searchInput.addEventListener('input', () => {
      // Clear results immediately when the user starts typing
      resultsContainer.innerHTML = '';
    });

  })
  .catch(error => {
    // Log an error message if fetching the JSON file fails
    console.error('Error loading JSON file', error);
  });
