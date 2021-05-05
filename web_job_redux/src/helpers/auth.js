import store from "../redux/store";
import { history } from "./history";
import { LOGOUT_SUCCESS } from "../redux/authActionTypes";

export function saveJwt(data) {
  localStorage.setItem("token", JSON.stringify(data));
}

export function removeJwt() {
  localStorage.removeItem("token");
}

function logout() {
  store.dispatch({ type: LOGOUT_SUCCESS });
  removeJwt();
  history.push("/login");
}

export function checkLoginStatus() {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }
  return true;
}

export function getLocalJwt() {
  const token = localStorage.getItem("token");
  if (!token) {
    logout();
    return null;
  }

  return JSON.parse(token).token;
}
