import React, { useEffect } from "react";
import classes from "./Bootcamps.module.scss";
import image_1 from "./../../assets/images/image_1.jpg";
import image_2 from "./../../assets/images/image_2.jpg";
import image_3 from "./../../assets/images/image_3.jpg";
import image_4 from "./../../assets/images/image_4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getBootcamps } from "../../redux/bootcampsActionCreator";
import Paginator from "../Paginator/Paginator";

const Bootcamps = () => {
  const dispatch = useDispatch();
  let { bootcamps, pageSize, totalItemCount, currentPage } = useSelector(
    (state) => state.bootcampsReduser
  );

  useEffect(() => {
    dispatch(getBootcamps(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onPageChanged = (pageNumber) => {
    dispatch(getBootcamps(pageNumber, pageSize));
  };

  const defaultBootcamps = [
    {
      photo: image_1,
      name: "Devworks Bootcamp",
      rating: 8.8,
      address: "Boston, MA",
      careers: ["Web Development", "UI/UX", "Mobile Development"],
    },
    {
      photo: image_2,
      name: "ModernTech Bootcamp",
      rating: 7.5,
      address: "Boston, MA",
      careers: ["Web Development", "UI/UX", "Mobile Development"],
    },
    {
      photo: image_3,
      name: "Codemasters",
      rating: 9.2,
      address: "Burlington, VT",
      careers: ["Web Development", "Data Science", "Marketing"],
    },
    {
      photo: image_4,
      name: "DevCentral Bootcamp",
      rating: 6.4,
      address: "Kingston, RI",
      careers: ["Web Development", "UI/UX", "Mobile Development", "Marketing"],
    },
  ];

  if (!bootcamps.length) {
    bootcamps = defaultBootcamps;
  }
  return (
    <>
      <div className={classes.bootcampsContainer}>
        <div className={classes.findBootcamps}>
          <div className={classes.location}>
            <h4>By Location</h4>
            <form>
              <input type="text" placeholder="Miles From" />
              <input type="text" placeholder="Enter Zipcode" />
            </form>
            <div className={classes.findLocation}>
              <label>
                <input type="submit" value="Find Bootcamps" />
              </label>
            </div>
          </div>
          <div className={classes.filter}>
            <h2>Filter</h2>
            <h4>Rating</h4>
            <input type="number" id="b" name="b" placeholder="Any" />
            <h3>Budget</h3>
            <input type="number" id="b" name="b" placeholder="Any" /> <br />
            <input type="submit" value="Find Bootcamps" />
          </div>
        </div>

        <div className={classes.bootcamps}>
          {bootcamps.map((bootcamp, index) => {
            return (
              <div key={index} className={classes.bootcampContainer}>
                <div className={classes.bootcampImage}>
                  <img src={bootcamp.photo} alt="No_photo" />
                </div>
                <div className={classes.bootcamp}>
                  <h2>{bootcamp.name} </h2>
                  <span className={classes.rating}>
                    {bootcamp.rating ? bootcamp.rating : 0}
                  </span>
                  <br />
                  <span className={classes.locationBootcamp}>
                    {bootcamp.address}
                  </span>
                  <p>{bootcamp.careers.join(", ")}</p>
                </div>
              </div>
            );
          })}
          <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalItemCount}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(Bootcamps);
