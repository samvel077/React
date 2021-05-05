import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/resetPassword.css";

export const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState(() => {
    return {
      password: "",
    };
  });

  function ResetPassword() {
    fetch(
      "https://devcamper.io/api/v1/auth/resetpassword/cd4739d9ae2f1b04299c99e1d4c2bfa0046caf77",
      {
        method: "PUT",
        body: JSON.stringify({
          ...resetPassword,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }
  return (
    <>
      <section className="section2">
        <section className="Reset_content">
          <div className="Reset_conteiner">
            <Link to="/login" className="Reset_back">
              Back to login
            </Link>
            <br />
            <span className="Reset_title">Reset Password</span>

            <p className="Reset_discrition">
              Use this form to reset your password using the registered email
              address.
            </p>

            <label htmlFor="Reset_input" id="Reset_label">
              Enter Email
            </label>
            <br />
            <input
              type="text"
              id="Reset_input"
              placeholder="Enter address"
              onChange={(e) => setResetPassword(e.target.value)}
            />

            <button className="Reset_button" onClick={ResetPassword}></button>
          </div>
        </section>
      </section>
    </>
  );
};
