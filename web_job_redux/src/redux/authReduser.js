import * as actionTypes from "./authActionTypes";
import { checkLoginStatus } from "./../helpers/auth";
import { LOADING } from "./bootcampsActionTypes";

const initState = {
  isAuthenticated: checkLoginStatus(),
  loading: false,
  successMessage: null,
  error: null,
};

const authReduser = (state = initState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: false,
        successMessage: null,
        error: null,
      };
    }
    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
        successMessage: null,
        error: null,
      };
    }

    case actionTypes.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case actionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        successMessage: "Please login",
      };
    }

    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    }
    case actionTypes.UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        successMessage: "Changed successfully",
      };
    }

    case actionTypes.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        successMessage: "Done!",
      };
    }

    case actionTypes.LOGOUT_SUCCESS: {
      return {
        ...initState,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
};

export default authReduser;
