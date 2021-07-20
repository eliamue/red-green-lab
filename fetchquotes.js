import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const quotes = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const parsedQuotes = await quotes.json();
  const randomQuote = parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
  return randomQuote;
};

export default fetchQuotes;
