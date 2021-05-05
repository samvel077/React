import React, { useState } from "react";
import classes from "./Login.module.css";
import login_svg from "./../../assets/icons/login_dark.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authActionCreator";

const Login = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const handleSend = () => {
    const { email, password } = values;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = true;
    let emailMessage = null;
    let passwordMessage = null;

    if (!email) {
      emailMessage = "Email is required";
      valid = false;
    } else if (re.test(email) === false) {
      emailMessage = `${email} isn't valid email`;
      valid = false;
    }

    if (!password) {
      passwordMessage = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordMessage = "Password can't be shorter than 6 simbol";
      valid = false;
    }

    setErrors({
      email: emailMessage,
      password: passwordMessage,
    });

    if (valid) {
      dispatch(login(values));
    }
  };
  return (
    <div className={classes.loginContainer}>
      <div className={classes.login}>
        <img src={login_svg} alt="" />
        <h2>Login</h2>
        <p>
          Log in to list your bootcamp or rate, review and favorite bootcamps
        </p>
        <form action="">
          <label>Email Address</label> <br />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className={errors.email ? classes.invalid : ""}
          />
          {errors.email && (
            <span className={classes.error}>{errors.email}</span>
          )}
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className={errors.password ? classes.invalid : ""}
          />
          {errors.password && (
            <span className={classes.error}>{errors.password}</span>
          )}
          <input type="button" value="Login" onClick={handleSend} />
        </form>
        <span>
          Forgot Password?
          <Link to="/resetpassword">Reset Password</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
