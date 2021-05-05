import React from "react";
import classes from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={classes.containerLoader}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
