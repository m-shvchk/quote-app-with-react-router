import React, { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  console.log(match)

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return (
      <div className="centered">
        <p>No quote found</p>
      </div>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
