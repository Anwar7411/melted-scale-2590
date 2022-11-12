import axios from "axios";
import * as types from "./actionType";

export const getProductRequest = () => {
     return {
          type: types.GET_PRODUCTS_REQUEST,
     };
};
export const getProductSuccess = (payload) => {
     return {
          type: types.GET_PRODUCTS_SUCCESS,
          payload,
     };
};
export const getProductFailure = () => {
     return {
          type: types.GET_PRODUCTS_FAILURE,
     };
};

export const addProductRequest = () => {
     return {
          type: types.ADD_PRODUCT_REQUEST,
     };
};

export const addProductSuccess = (payload) => {
     return {
          type: types.ADD_PRODUCT_SUCCESS,
          payload,
     };
};

export const addProductFailure = () => {
     return {
          type: types.ADD_PRODUCT_FAILURE,
     };
};
//Write the ActionCreator functions here
const login = (payload) => (dispatch) => {
     dispatch({ type: types.LOGIN_REQUEST });
     return axios({
          method: "POST",
          url: "/api/login",
          baseURL: "https://reqres.in",
          data: payload,
     })
          .then((res) =>
               dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
          )
          .catch((err) =>
               dispatch({ type: types.LOGIN_FAILURE, payload: err })
          );
};
export { login };
