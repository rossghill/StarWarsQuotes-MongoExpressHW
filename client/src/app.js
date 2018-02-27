const QuoteView = require('./views/quoteView');
const Request = require('./services/request.js');

const quoteView = new QuoteView();
const request = new Request('http://localhost:3000/api/quotes');
// ----------------------

const createButtonClicked = function(event) {
  event.preventDefault();
  console.log('form submit clicked');

  const nameInputValue = document.querySelector('#name').value;
  const quoteInputValue = document.querySelector('#quote').value;

  const quoteToSend = {
  name: nameInputValue,
  quote: quoteInputValue
  }
  request.post(createRequestComplete, quoteToSend);
}
// ------------------------

const getQuotesRequestComplete = function(allQuotes)  {
  allQuotes.forEach(function(quote) {
    quoteView.addQuote(quote);
  });
}
// -------------------

const appStart = function(){
  request.get(getQuotesRequestComplete);

  const createQuoteButton = document.querySelector('#submit-quote');
  createQuoteButton.addEventListener('click', createButtonClicked);
}

const createRequestComplete = function(newQuote) {
  quoteView.addQuote(newQuote);
}

document.addEventListener('DOMContentLoaded', appStart);
