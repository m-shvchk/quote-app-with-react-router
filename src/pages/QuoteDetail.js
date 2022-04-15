import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
      {/* <Route path='/quotes/:quoteId/comments'><Comments /></Route> 
      -> this will also work since it's a route, not a link */}
    </Fragment>
  );
};

export default QuoteDetail;
