import axios from "axios";
import * as actionTypes from "./authActionTypes";
import { history } from "../helpers/history";
import { saveJwt, getLocalJwt, removeJwt } from "../helpers/auth";

const apiUrl = process.env.REACT_APP_API_URL;

export const register = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });

      await axios.post(`${apiUrl}/api/v1/auth/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
      });
      history.push("/login");
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });

      const response = await axios.post(`${apiUrl}/api/v1/auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      saveJwt(response.data);
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
      });
      history.push("/bootcamps");
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};

export const resetPassword = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });
      await axios.post(`${apiUrl}/api/v1/auth/forgotpassword`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: actionTypes.RESET_PASSWORD_SUCCESS,
      });
      history.push("/login");
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};

export const updatePassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });

      const jwt = getLocalJwt();

      await axios.put(`${apiUrl}/api/v1/auth/updatepassword`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: actionTypes.UPDATE_PASSWORD_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });

      const jwt = getLocalJwt();

      if (jwt) {
        await axios.get(`${apiUrl}/api/v1/auth/logout`, {
          Authorization: `Bearer ${jwt}`,
        });
        removeJwt();

        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
        history.push("/");
      } else {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
        history.push("/");
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};
