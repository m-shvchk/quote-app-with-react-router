import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom' 

const NewQuote = () => {
  const history = useHistory();

const addQuoteHandler = (quoteData) => {
  console.log(quoteData)
  history.push('/quotes')
  // history.push works like redirect - it changes the history of visiting urls
  // the difference between .push and .replace is that with push you can go back
}

  return <QuoteForm onAddQuote={addQuoteHandler} />
  
}

export default NewQuote