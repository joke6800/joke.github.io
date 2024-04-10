document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Select the new quote button using a querySelector. Assign it to a new variable.
    const newQuoteButton = document.getElementById("js-new-quote");
  
    // Step 2: Write an event listener to check if the button is clicked.
    newQuoteButton.addEventListener("click", getQuote);
  
    // Step 3: Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
    function getQuote() {
      console.log("Button clicked!"); // Test if the button click works
      // Step 4: Add a new variable that holds the API endpoint
      const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
  
      // Step 5: Change the getQuote function to use the fetch method to get a random quote from that endpoint.
      fetch(endpoint)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch quote!");
          }
          return response.json();
        })
        .then(data => {
          // Step 6: If successful, output the quote to the console
          console.log(data);
          // Step 7: Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
          displayQuote(data);
        })
        .catch(error => {
          // Step 6: If it fails, output an error message to the console AND via alert
          console.error(error);
          alert("Failed to fetch quote!");
        });
    }
  
    // Step 7: Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
    function displayQuote(quote) {
      const quoteTextElement = document.getElementById("js-quote-text");
      quoteTextElement.textContent = quote.text; // Assuming the quote object has a property named 'text'
    }
  });
  