import React, { useEffect, useState } from "react";
import "../css/browseBootcamp.css";
import image_1 from "../assets/img/image_1.jpg";
import image_2 from "../assets/img/image_2.jpg";
import image_3 from "../assets/img/image_3.jpg";
import image_4 from "../assets/img/image_4.jpg";

export const BrowseBootcamp = () => {
  const [Bootcamps, setBootcamps] = useState({ data: [] });

  Bootcamps.data.map((item) => console.log(item));

  let bootcamps = [
    {
      img: image_1,
      title: "Devworks Bootcamp",
      rating: "8.8",
      div: "Bostan, MA",
      discription: "Web Development, UI/UX, Mobile Development",
    },
    {
      img: image_2,
      title: "Modern Tech Bootcamp",
      rating: "7.5",
      div: "Bostan, MA",
      discription: "Web Development, UI/UX, Mobile Development",
    },
    {
      img: image_3,
      title: "Codemasters",
      rating: "9.2",
      div: "Burlington, VT",
      discription: "Web Development, Data Science, Marketing",
    },
    {
      img: image_4,
      title: "DevCentral Bootcamp",
      rating: "6.4",
      div: "Kingston, RI",
      discription: "Web Development, UI/UX, Mobile Development, Marketing",
    },
  ];

  function getBootcamps() {
    fetch("http://devcamp-api-node.herokuapp.com/api/v1/bootcamps")
      .then((data) => data.json())
      .then((result) => setBootcamps(result));
  }

  useEffect(() => {
    getBootcamps();
  }, []);

  console.log(Bootcamps);
  return (
    <>
      <section className="bootcamp_content">
        <div className="conteiner_1">
          <div className="first_conetnt">
            <div className="location">
              <h3>By Location</h3>
              <input
                type="text"
                className="inputsss input_10"
                placeholder="Miles From"
              />
              <input
                type="text"
                className="inputsss input_20"
                placeholder="Enter Zipcode"
              />
              <button className="button10">Find Bootcamps</button>
            </div>
            <div className="filter">
              <h3>Filter</h3>

              <label htmlFor="input_number1">Rating</label>
              <br />
              <input
                type="number"
                id="input_number1"
                className="input_number"
              />
              <br />

              <label htmlFor="input_number2">Rating</label>
              <br />
              <input
                type="number"
                id="input_number2"
                className="input_number"
              />

              <button className="button20">Find Bootcamps</button>
            </div>
          </div>

          <div className="conteiner2">
            {bootcamps.map((bootcamp, index) => (
              <>
                <br />
                <div className="second_content" key={index}>
                  <img src={bootcamp.img} alt="" />
                  <div className="text_content">
                    <span>{bootcamp.title}</span>
                    <div className="div_1">{bootcamp.rating}</div>
                    <div className="div_2">{bootcamp.div}</div>
                    <p>{bootcamp.discription}</p>
                  </div>
                </div>
                <br />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
