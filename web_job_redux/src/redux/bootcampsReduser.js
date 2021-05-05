import * as actionTypes from "./bootcampsActionTypes";
import { LOGOUT_SUCCESS } from "./authActionTypes";

const initState = {
  bootcamps: [],
  pageSize: 4,
  totalItemCount: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

const bootcampsReduser = (state = initState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
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

    case actionTypes.GET_BOOTCAMPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        bootcamps: action.payload,
      };
    }
    case actionTypes.CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case actionTypes.TOTAL_ITEM_COUNT: {
      return {
        ...state,
        totalItemCount: action.payload || 30,
      };
    }

    default:
      return state;
  }
};

export default bootcampsReduser;
