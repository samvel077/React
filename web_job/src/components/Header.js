import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../assets/icons/Vector.png";
import Registor from "../assets/icons/Vector1.png";
import Login from "../assets/icons/Vector2.png";
import axios from "axios";

const url = "http://devcamp-api-node.herokuapp.com/api/v1/auth/logout";
const token = localStorage.getItem("token");

async function logOutUser(e) {
   e.preventDefault();
   try {
      const response = await axios.get(url, {
         Authorization: `Bearer ${token}`,
      });
      console.log(response, "-------------");
      localStorage.clear("success", "token");
      window.location.reload();
      window.location.pathname = "/";
   } catch (error) {
      console.log(error);
   }
}

export const Header = ({ success }) => {
   if (!success) {
      return (
         <div className="conteiner">
            <div className="compony_name">
               <img src={Logo} alt="" className="logo" />
               {/* <span>DevCamper</span> */}
               <Link to="/">DevCamper</Link>
            </div>
            <div className="users_login">
               <img className="img_2" src={Login} alt="" />
               <Link to="/login">Login</Link>

               <img className="img_2" src={Registor} alt="" />
               <Link to="/registor">Registor</Link>

               {/* <div className="line"></div> */}

               <Link to="/bootcamps">Browse Bootcamps</Link>
            </div>
         </div>
      );
   } else {
      return (
         <div className="conteiner">
            <div className="compony_name">
               <img src={Logo} alt="" className="logo" />
               <Link to="/">DevCamper</Link>
            </div>
            <div className="users_login">
               <span className="Logout" onClick={(e) => logOutUser(e)}>
                  Logout
          </span>


               {/* <div className="line"></div> */}

               <Link to="reset_password">Reset Password</Link>
               <Link to="update_password">Update Password</Link>

               {/* <img className="img_2" src={Registor} alt="" /> */}
               {/* <Link to="/registor">Registor</Link> */}

               <Link to="/bootcamps">Browse Bootcamps</Link>
            </div>
         </div>
      );
   }
};
