import React, { useState } from "react";
import classes from "./UpdatePasswordPage.module.scss";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/authActionCreator";

const UpdatePassword = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState({
    currentPassword: null,
    newPassword: null,
    confirmNewPassword: null,
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
    const { currentPassword, newPassword, confirmNewPassword } = values;

    let valid = true;
    let currentPasswordMessage = null;
    let newPasswordMessage = null;

    let confirmNewPasswordMessage = null;

    if (!currentPassword) {
      currentPasswordMessage = "Password is required";
      valid = false;
    } else if (currentPassword.length < 6) {
      currentPasswordMessage = "Password can't be shorter than 6 simbol";
      valid = false;
    }

    if (!newPassword) {
      newPasswordMessage = "Password is required";
      valid = false;
    } else if (newPassword.length < 6) {
      newPasswordMessage = "Password can't be shorter than 6 simbol";
      valid = false;
    }

    if (!confirmNewPassword) {
      confirmNewPasswordMessage = "Please confirm password";
      valid = false;
    } else if (newPassword !== confirmNewPassword) {
      confirmNewPasswordMessage = "Passwords didn't match";
      valid = false;
    }

    setErrors({
      currentPassword: currentPasswordMessage,
      newPassword: newPasswordMessage,
      confirmNewPassword: confirmNewPasswordMessage,
    });

    if (valid) {
      dispatch(updatePassword({ currentPassword, newPassword }));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.updatePassword}>
        <h2>Update Password</h2>

        <form action="">
          <label>Current Password</label> <br />
          <input
            type="password"
            name="currentPassword"
            value={values.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className={errors.currentPassword ? classes.invalid : ""}
          />
          {errors.currentPassword && (
            <span className={classes.error}>{errors.currentPassword}</span>
          )}
          <br />
          <label>New Password</label> <br />
          <input
            type="password"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className={errors.newPassword ? classes.invalid : ""}
          />
          {errors.newPassword && (
            <span className={classes.error}>{errors.newPassword}</span>
          )}
          <br />
          <label>Confirm New Password</label> <br />
          <input
            type="password"
            name="confirmNewPassword"
            value={values.confirmNewPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
            className={errors.confirmNewPassword ? classes.invalid : ""}
          />
          {errors.confirmNewPassword && (
            <span className={classes.error}>{errors.confirmNewPassword}</span>
          )}
          <br />
          <input type="button" value="Update Password" onClick={handleSend} />
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
