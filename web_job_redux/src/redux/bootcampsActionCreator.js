import axios from "axios";
import * as actionTypes from "./bootcampsActionTypes";

const apiUrl = process.env.REACT_APP_API_URL;

export const getBootcamps = (currentPage, pageSize) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });

      const response = await axios.get(
        `${apiUrl}/api/v1/bootcamps?page=${currentPage}&limit=${pageSize}`
      );

      dispatch({
        type: actionTypes.GET_BOOTCAMPS_SUCCESS,
        payload: response.data.data,
      });

      dispatch({
        type: actionTypes.CURRENT_PAGE,
        currentPage: currentPage,
      });

      dispatch({
        type: actionTypes.TOTAL_ITEM_COUNT,
        payload: response.data.data.count,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};
