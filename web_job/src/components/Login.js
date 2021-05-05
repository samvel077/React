import React, { useState } from "react";
import "../css/login.css";
import Login2 from "../assets/icons/VectorBlack.png";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState(() => {
    return {
      email: "",
      password: "",
    };
  });

  //   const [userLogin, setUserLogin] = useState();

  const url = "http://devcamp-api-node.herokuapp.com/api/v1/auth/login";

  async function loginUserdata(e) {
    e.preventDefault();
    try {
      const response = await axios.post(url, user);
      console.log(response, "-------------");
      localStorage.setItem("success", response.data.success);
      localStorage.setItem("token", response.data.token);
      window.location.reload();
      window.location.pathname = "/";
    } catch (error) {
      console.log(error);
    }
  }

  function userLoginChanger(event, key) {
    setUser((prev) => {
      return {
        ...prev,
        [key]: event.target.value,
      };
    });

    console.log(user);
  }
  return (
    <>
      <section className="section1">
        <section className="login_content">
          <div className="lodin_elements">
            <img className="img" src={Login2} alt="" />
            <span className="login_text">Login</span>

            <p>
              Log in to list your bootcamp or rate, review and favorite
              bootcamps
            </p>

            <div className="inputs">
              <form onSubmit={(e) => loginUserdata(e)}>
                <label htmlFor="input_1">Email Address</label>
                <input
                  type="email"
                  id="input_1"
                  placeholder="Enter Email"
                  onChange={(e) => userLoginChanger(e, "email")}
                  required
                />

                <label htmlFor="input_2">Password</label>
                <input
                  type="password"
                  id="input_2"
                  placeholder="Enter Password"
                  onChange={(e) => userLoginChanger(e, "password")}
                  required
                />

                <button>Login</button>
              </form>
            </div>

            <div className="reset">
              <span className="password_text">Forgot Password?</span>
              <Link className="password_link" to="/reset_password">
                Reset password
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
