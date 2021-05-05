import React from "react";
import classes from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={classes.notFoundContainer}>
      <h1>Page not found</h1>
      <div>
        <Link to="/">Back to intro</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
