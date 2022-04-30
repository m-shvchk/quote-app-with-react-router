import React, { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from '../hooks/use-http'
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner"

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)}, [sendRequest, quoteId])

  console.log(match)

  // const quote = loadedQuote.find((quote) => quote.id === quoteId);

    if(status === 'pending'){
      return(
        <div className="centered">
          <LoadingSpinner />
        </div>
      )
    }
    if(error){
      return(
        <p className="centered">{error}</p>
      )
    } 

  if (!loadedQuote.text) {
    return (
      <div className="centered">
        <p>No quote found</p>
      </div>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
      {/* <Route path={`/quotes/${quoteId}`} exact> */}
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
          {/* <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}> */}
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
