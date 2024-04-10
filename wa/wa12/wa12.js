document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('newQuote');
  
    newQuoteButton.addEventListener('click', function() {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteElement.innerHTML = `<blockquote>${data.content}</blockquote><p>- ${data.author}</p>`;
        });
    });
  });