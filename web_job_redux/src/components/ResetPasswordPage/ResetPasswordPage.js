import React, { useState } from "react";
import classes from "./ResetPasswordPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/authActionCreator";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setEmail(target.value);
    setError(null);
  };

  const handleSend = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = true;
    let emailMessage = null;

    if (!email) {
      emailMessage = "Email is required";
      valid = false;
    } else if (re.test(email) === false) {
      emailMessage = `${email} isn't valid email`;
      valid = false;
    }

    setError(emailMessage);

    if (valid) {
      dispatch(resetPassword({ email }));
    }
  };

  return (
    <div className={classes.resetContainer}>
      <div className={classes.reset}>
        <span>
          <Link to="/login">Back to login</Link>
        </span>
        <br />
        <h2>Reset Password</h2>
        <p>
          Use this form to reset your password using the registered email
          address.
        </p>
        <form action="">
          <label>Enter Email</label> <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter address"
            className={!!error ? classes.invalid : ""}
          />
          {error && <span className={classes.error}>{error}</span>}
          <br />
          <input type="button" onClick={handleSend} />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
