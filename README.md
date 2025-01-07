# DrinkIn - Beer Search App

## Description

-DrinkIn is a simple, single-page application that allows users to search for beers by name, style, or brewery. The app fetches data from a JSON file containing beer details, and users can view the results displayed with beer names, styles, breweries, and ABV (Alcohol By Volume). The app features a dynamic search functionality that provides instant results as users type, along with an interactive experience that shows more details when clicking on a beer.

## Features

- Users can search for beers based on different criteria i.e beer name, style, brewery.
- The results are displayed immediately as users type their queries.
- Clicking on a beer result shows a simple alert with more details like the brewery and ABV.
- The page does not reload on form submission, providing a seamless user experience.

## File Structure

- index.html: this provides the overrall structure for the app.
- Style.css: this provides styling for the app
- app.js: responsible for fetching data, handling events and displaying results
- data.json: this our server that contains the database for the app

## Installation

- Follow the following steps to be able to install the Drinkin app on your device:
    (i) Clone the repository
    (ii) Navigate to the project directory
    (iii) Open index.html

## Usage

- Open the app in your browser
- Enter a search query (beer name, style, or brewery) in the search box.
- The app will filter and display results instantly.
- Click on any result to view more details in an alert.

## How It Works

### JSON Data: 

- The app fetches the beer data from the data.json file. Each beer has an ID, name, style, brewery, ABV, image, average rating, and reviews.

### Search Functionality: 

- The search form listens for user input. When a search term is entered, the app filters the beer data by matching the query to the beer's name, style, or brewery.

### Displaying Results: 

- If matching beers are found, they are displayed with their image and details. If no matches are found, the app shows a "No results found" message.

### Click Interaction: 

- Users can click on a beer result to view a simple alert with additional details.

## License

- Non required
