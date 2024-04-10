document.addEventListener("DOMContentLoaded", function() {
    let quote; // Declare the quote object in the global scope
    
    const newQuoteButton = document.getElementById("js-new-quote");
    const tweetButton = document.getElementById("js-tweet");
  
    newQuoteButton.addEventListener("click", getQuote);
    tweetButton.addEventListener("click", showAnswer);
  
    function getQuote() {
      const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
  
      fetch(endpoint)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch quote!");
          }
          return response.json();
        })
        .then(data => {
          quote = data; // Save the quote object globally
          displayQuote(data);
        })
        .catch(error => {
          console.error(error);
          alert("Failed to fetch quote!");
        });
    }
  
    function displayQuote(quote) {
      const quoteTextElement = document.getElementById("js-quote-text");
      quoteTextElement.textContent = quote.question;
    }
  
    function showAnswer() {
      const answerTextElement = document.getElementById("js-answer-text");
      answerTextElement.textContent = "Answer: " + quote.answer; // Access the answer from the global quote object
      answerTextElement.style.display = "block";
    }
  });
  