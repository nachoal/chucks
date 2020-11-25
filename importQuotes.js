const randomQuote = fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.value;
  });
