// Get references to HTML elements using their IDs
let quote = document.getElementById("quote-text"); // Reference to the quote text element
let author = document.getElementById("quote-author"); // Reference to the quote author element
let btn = document.getElementById("generate-button"); // Reference to the "Generate Quote" button element

const url = "https://api.quotable.io/random"; // URL for fetching random quotes

// Function to fetch and display a random quote
let getQuote = () => {
  fetch(url) // Fetch a random quote from the provided URL
    .then((data) => data.json()) // Convert the response to JSON format
    .then((item) => {
      quote.innerText = item.content; // Display the quote content
      author.innerText = "- " + item.author; // Display the author's name with a "-" prefix
    });
};

// Event listener: Execute getQuote when the page loads
window.addEventListener("load", getQuote);

// Event listener: Execute getQuote when the "Generate Quote" button is clicked
btn.addEventListener("click", getQuote);
