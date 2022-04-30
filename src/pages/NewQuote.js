import React, { useEffect } from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom' 
import useHttp from '../hooks/use-http'
import {addQuote} from '../lib/api'

const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuote)
  const history = useHistory();

  useEffect(()=>{
    if(status === 'completed'){
      history.push('/quotes')
    }
  }, [status, history])

const addQuoteHandler = (quoteData) => {
  sendRequest(quoteData)
  // history.push('/quotes')
  // history.push works like redirect - it changes the history of visiting urls
  // the difference between .push and .replace is that with push you can go back
}

  return <QuoteForm isLoading ={status === 'pending'} onAddQuote={addQuoteHandler} />
  
}

export default NewQuote