const QuoteView = require('./views/quoteView');
const Request = require('./services/request.js');

const quoteView = new QuoteView();
const request = new Request('http://localhost:3000/api/quotes');

const appStart = function(){
  request.get(getQuotesRequestComplete);
}


const getQuotesRequestComplete = function(allQuotes)  {
  allQuotes.forEach(function(quote) {
    quoteView.addQuote(quote);
  });
}

document.addEventListener('DOMContentLoaded', appStart);
