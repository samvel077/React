import React from "react";
import classes from "./Home.module.scss";

const Intro = () => {
  return (
    <main>
      <article>
        <h1>Find a Code Bootcamp</h1>
        <p>Find, rate and read reviews on coding bootcamps</p>

        <div className={classes.findBootcamps}>
          <input type="text" placeholder="Miles From" />
          <input type="text" placeholder="Enter Zipcode" />
        </div>
        <div className={classes.findButton}>
          <label>
            <input type="submit" value="Find Bootcamps" />
          </label>
        </div>
      </article>
    </main>
  );
};

export default Intro;
