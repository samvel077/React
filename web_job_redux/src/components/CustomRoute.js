import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CustomRoute = ({
  type = "public",
  isAuthenticated,
  path,
  exact,
  component: Component,
}) => {
  if (type === "private") {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  } else {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => {
          return !isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReduser.isAuthenticated,
  };
};

CustomRoute.proptypes = {
  type: PropTypes.oneOf(["public", "private"]),
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(CustomRoute);
