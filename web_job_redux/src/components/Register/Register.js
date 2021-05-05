import React, { useState } from "react";
import classes from "./Register.module.scss";
import register_svg from "./../../assets/icons/register_dark.svg";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authActionCreator";

const Register = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    role: null,
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
    const { name, email, password, confirmPassword, role } = values;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = true;
    let confirmPasswordMessage = null;
    let emailMessage = null;
    let passwordMessage = null;

    if (!email) {
      emailMessage = "Email is required";
      valid = false;
    } else if (re.test(email) === false) {
      emailMessage = `${email} isn't valid email`;
      valid = false;
    }

    if (!password.trim()) {
      passwordMessage = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordMessage = "Password can't be shorter than 6 simbol";
      valid = false;
    }

    if (!confirmPassword) {
      confirmPasswordMessage = "Please confirm password";
      valid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordMessage = "Passwords didn't match";
      valid = false;
    }

    setErrors({
      name: name.trim() ? null : "Name is required",
      email: emailMessage,
      password: passwordMessage,
      confirmPassword: confirmPasswordMessage,
      role: role ? null : "choose your role",
    });

    if (name.trim() && role && valid) {
      dispatch(register(values));
      console.log(values);
    } else {
      console.log(errors);
    }
  };

  return (
    <div className={classes.registerContainer}>
      <div className={classes.register}>
        <img src={register_svg} alt="" />
        <h2>Register</h2>
        <p>
          Register to list your bootcamp or rate, review and favorite bootcamps
        </p>
        <form>
          <label>Name</label> <br />
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className={!!errors.name ? classes.invalid : ""}
          />
          {errors.name && <span className={classes.error}>{errors.name}</span>}
          <br />
          <label>Email Address</label> <br />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className={!!errors.email ? classes.invalid : ""}
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
            className={!!errors.password ? classes.invalid : ""}
          />
          {errors.password && (
            <span className={classes.error}>{errors.password}</span>
          )}
          <br />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={!!errors.confirmPassword ? classes.invalid : ""}
          />
          {errors.confirmPassword && (
            <span className={classes.error}>{errors.confirmPassword}</span>
          )}
        </form>
        <div className={classes.userRole}>
          <h6>User Role</h6>
          {errors.role && <span className={classes.error}>{errors.role}</span>}
          <br />
          <input
            type="radio"
            value="user"
            onChange={handleChange}
            name="role"
            className={!!errors.role ? classes.invalidRole : ""}
          />
          <label>Regular User (Browse, Write reviews, etc)</label> <br />
          <input
            type="radio"
            value="publisher"
            onChange={handleChange}
            name="role"
            className={!!errors.role ? classes.invalidRole : ""}
          />
          <label>Bootcamp Publisher</label>
        </div>
        <div className={classes.condition}>
          <p>
            * You must be affiliated with the bootcamp in some way in order to
            add it to DevCamper.
          </p>
        </div>
        <input type="button" value="Register" onClick={handleSend} />
      </div>
    </div>
  );
};

export default Register;
