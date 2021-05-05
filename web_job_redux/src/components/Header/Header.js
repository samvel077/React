import React, { useState } from "react";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import DevCumper_svg from "./../../assets/icons/devcumper.svg";
import login_svg from "./../../assets/icons/login.svg";
import register_svg from "./../../assets/icons/register.svg";
import bootcumps_svg from "./../../assets/icons/bootcumps.svg";
import user_svg from "./../../assets/icons/user.svg";
import polygon_svg from "./../../assets/icons/polygon.svg";
import { logout } from "../../redux/authActionCreator";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authReduser);
  const [toggleAccount, setToggleAccount] = useState(false);

  return (
    <header>
      <div className={classes.devCumper}>
        <img src={DevCumper_svg} alt="" className={classes.img} />
        <span>DevCumper</span>
      </div>
      <div className={classes.links}>
        <ul>
          {isAuthenticated ? (
            <li className={classes.dropDown}>
              <img src={user_svg} alt="" />
              <span
                onClick={() => setToggleAccount(!toggleAccount)}
                className={classes.dropbtn}
              >
                Account
              </span>
              <img src={polygon_svg} alt="" className={classes.polygon_svg} />
              <div
                className={`${toggleAccount ? classes.show : ""}  ${
                  classes.dropdownContent
                }`}
              >
                <span>
                  <Link
                    to="/updatepassword"
                    onClick={() => setToggleAccount(false)}
                  >
                    Update password
                  </Link>
                </span>
                <span
                  onClick={() => {
                    dispatch(logout());
                    setToggleAccount(false);
                  }}
                >
                  Logout
                </span>
              </div>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login" exact activeClassName={classes.activeLink}>
                  <img src={login_svg} alt="" />
                  <span>Login</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  exact
                  activeClassName={classes.activeLink}
                >
                  <img src={register_svg} alt="" />
                  <span>Register</span>
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/bootcamps" exact activeClassName={classes.activeLink}>
              <img src={bootcumps_svg} alt="" />
              <span>Browser Bootcumps</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
