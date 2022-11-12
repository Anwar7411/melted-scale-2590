import * as types from "./actionType";
const initialState = {
     products: [],
     isLoading: false,
     isError: false,
     isAuth: false,
     token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
     switch (type) {
          case types.GET_PRODUCTS_REQUEST:
               return {
                    ...state,
                    isLoading: true,
                    isError: false,
               };
          case types.GET_PRODUCTS_SUCCESS:
               return {
                    ...state,
                    products: payload,
                    isLoading: false,
                    isError: false,
               };
          case types.GET_PRODUCTS_FAILURE:
               return {
                    ...state,
                    isLoading: false,
                    isError: true,
               };
          case types.ADD_PRODUCT_REQUEST:
               return {
                    ...state,
                    isLoading: true,
                    isError: false,
               };
          case types.ADD_PRODUCT_SUCCESS:
               let newProducts = [...state.products, payload];
               return {
                    ...state,
                    products: newProducts,
                    isLoading: true,
                    isError: false,
               };
          case types.ADD_PRODUCT_FAILURE:
               return {
                    ...state,
                    isLoading: false,
                    isError: true,
               };
          case types.LOGIN_REQUEST:
               return {
                    ...state,
                    isLoading: true,
                    isError: false,
               };
          case types.LOGIN_SUCCESS:
               return {
                    ...state,
                    isAuth: true,
                    token: payload,
                    isLoading: false,
                    isError: false,
               };
          case types.LOGIN_FAILURE:
               return {
                    ...state,
                    isAuth: false,
                    token: "",
                    isLoading: false,
                    isError: true,
               };

          default:
               return state;
     }
};
