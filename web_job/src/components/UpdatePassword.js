import React, { useState } from "react";
import "../css/updatePassword.css";
import axios from "axios";

const url = "http://devcamp-api-node.herokuapp.com/api/v1/auth/updatepassword";
const token = localStorage.getItem("token");

export const UpdatePassword = () => {
  const [userPassword, setUserPassword] = useState(() => {
    return {
      currentPassword: "",
      newPassword: "",
    };
  });

  const [confirmNewPassword, setConfirmNewPassword] = useState("");

//   async function updateUserPassword(e) {
//     e.preventDefault();
//     if (
//       userPassword.currentPassword &&
//       userPassword.newPassword &&
//       confirmNewPassword === userPassword.newPassword
//     ) {
//       try {
//         const response = await axios.put(url, userPassword, {
//           Authorization: `Bearer ${token}`,
//         });
//         console.log(response, "-------------");
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       alert("Try again");
//     }
//   }

  function userPasswordChanger(event, key) {
    setUserPassword((prev) => {
      return {
        ...prev,
        [key]: event.target.value,
      };
    });
  }
  return (
    <>
      <section className="section3">
        <section className="Update_content">
          <div className="Update_conteiner">
            <span className="Update_title">Update Password</span>
            <br />
            <form>
              <label htmlFor="Update_input_1" className="Update_labels">
                Current Password
              </label>
              <br />
              <input
                type="password"
                id="Update_input_1"
                className="Update_inputs"
                placeholder="Current Password"
                onChange={(e) => userPasswordChanger(e, "currentPassword")}
                required
              />
              <br />

              <label htmlFor="Update_input_2" className="Update_labels">
                New Password
              </label>
              <br />
              <input
                type="password"
                id="Update_input_2"
                className="Update_inputs"
                placeholder="New Password"
                onChange={(e) => userPasswordChanger(e, "newPassword")}
                required
              />
              <br />

              <label htmlFor="Update_input_3" className="Update_labels">
                Confirm New Password
              </label>
              <br />
              <input
                type="password"
                id="Update_input_3"
                className="Update_inputs"
                placeholder="Confirm New Password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
              <br />

              <button className="Update_button">
                Update Password
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};
