import React, { useState } from "react";
import "../css/registor.css";
import Registor2 from "../assets/icons/Vector1Black.png";
import axios from "axios";

export const Registor = () => {
  const [user, setUser] = useState(() => {
    return {
      name: "",
      email: "",
      password: "",
      role: "",
    };
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  function userRegistorChanger(event, key) {
    setUser((prev) => {
      return {
        ...prev,
        [key]: event.target.value,
      };
    });
  }

  const url = "http://devcamp-api-node.herokuapp.com/api/v1/auth/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.name &&
      user.email &&
      user.password &&
      user.role &&
      user.password === confirmPassword
    ) {
      try {
        await axios.post(url, user);
        window.location.pathname = "/login";
       alert('You are registred')
      } catch (error) {
        console.log(error);
      }
    }

    else {
       alert('Try again')
    }
  };

  // async function postUserdata(userData) {
  //    if (user.name && user.email && user.password && user.role && (user.password === confirmPassword) ) {
  //       const userRegistor = await fetch(`https://devcamper.io/api/v1/auth/register`, {
  //          method: 'POST',
  //          body: JSON.stringify(
  //             {
  //                ...userData
  //             }
  //          ),
  //          headers: {
  //             'Content-type': 'application/json',
  //          },
  //       })
  //       // user.registor = true
  //       console.log(userRegistor.json());
  //    }
  //    else {
  //       alert('Something went wrong!Try again')
  //       return false
  //    }
  // }

  // console.log(user);
  return (
    <>
      <section className="section">
        <section className="registor_content">
          <div className="conteiner1">
            <div className="name">
              <img className="img1" src={Registor2} alt="" />
              <span className="registor_text">Register</span>

              <p className="p1">
                Register to list your bootcamp or rate, review and favorit
                bootcamps{" "}
              </p>
            </div>
            <div className="form_div">
              <form onSubmit={(e) => handleSubmit(e)} action="/login">
                <label htmlFor="input_1">Name</label>
                <input
                  type="text"
                  id="input_1"
                  className="input"
                  placeholder="Enter Full Name"
                  onChange={(e) => userRegistorChanger(e, "name")}
                  required
                />

                <label htmlFor="input_2">Email Address</label>
                <input
                  type="email"
                  id="input_2"
                  className="input"
                  placeholder="Enter Email"
                  onChange={(e) => userRegistorChanger(e, "email")}
                  required
                />

                <label htmlFor="input_3">Password</label>
                <input
                  type="password"
                  id="input_3"
                  className="input"
                  placeholder="Enter Password"
                  onChange={(e) => userRegistorChanger(e, "password")}
                  required
                />

                <label htmlFor="input_4">Confirm Password</label>
                <input
                  type="password"
                  id="input_4"
                  className="input"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div className="role">
                  <p className="p2">User Role</p>
                  <input
                    type="radio"
                    id="input_6"
                    className="radio_input"
                    name="role"
                    value="regular"
                    required
                    onChange={(e) => userRegistorChanger(e, "role")}
                  />
                  <label htmlFor="input_6" className="last_label">
                    Regular User (Browse, Write reviews, etc)
                  </label>
                  <br />

                  <input
                    type="radio"
                    id="input_7"
                    className="radio_input"
                    value="publisher"
                    onChange={(e) => userRegistorChanger(e, "role")}
                    required
                    name="role"
                  />
                  <label htmlFor="input_7" className="last_label">
                    Bootcamp Publisher
                  </label>
                </div>

                <p className="p3">
                  * You must be affiliated with the bootcamp in some way in
                  order to add it to DevCamper
                </p>

                <button className="button4">Registor</button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
