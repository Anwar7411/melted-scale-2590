import * as types from "./actionTypes";
import axios from "axios";

const getElectronicsProductRequest = () => {
  return {
    type: types.GET_ELECTRONICS_PRODUCT_REQUEST,
  };
};

const getElectronicsProductFailure = () => {
  return {
    type: types.GET_ELECTRONICS_PRODUCT_FAILURE,
  };
};

export const getElectronicsProduct = (queryParams) => (dispatch) => {
  //   console.log("Inside electronics middleware");
  dispatch(getElectronicsProductRequest());
  axios
    .get("http://localhost:8080/electronics", queryParams)
    .then((res) => {
      dispatch({
        type: types.GET_ELECTRONICS_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch(getElectronicsProductFailure());
    });
};
