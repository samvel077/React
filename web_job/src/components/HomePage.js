import React from "react";
import HomePageImg from "../assets/img/image_2.jpg";
import "../css/homePage.css";

export const HomePage = () => {
  return (
    <>
      <section className="home_container">
        <img src={HomePageImg} alt="" />
        <div className="content">
          <div className="text_div">
            <span className="span_1">Find a Code Bootcamp</span>
            <p className="text_p">
              Find, rate and read reviews on coding bootcamps
            </p>
          </div>

          <div className="inputss">
            <input className="input_1" type="text" placeholder="Miles From" />
            <input
              className="input_2"
              type="text"
              placeholder="Enter Zipcode"
            />
          </div>
          <button className="button100">Find Bootcamps</button>
        </div>
      </section>
    </>
  );
};
