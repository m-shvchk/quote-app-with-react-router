import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if(!quote){
    return <p>No quote found</p>
  }
  
  return (
    <Fragment>
      <HighlightedQuote text={ quote.text} author={ quote.author}/>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
      {/* <Route path='/quotes/:quoteId/comments'><Comments /></Route> 
      -> this will also work since it's a route, not a link */}
    </Fragment>
  );
};

export default QuoteDetail;
