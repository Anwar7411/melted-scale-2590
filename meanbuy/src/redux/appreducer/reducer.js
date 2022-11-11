import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cloth: [],
  electronicsProduct: [],
  isELoading: false,
  isEError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CLOTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CLOTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cloth: payload,
      };
    case types.GET_CLOTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_ELECTRONICS_PRODUCT_REQUEST:
      return {
        ...state,
        isELoading: true,
      };
    case types.GET_ELECTRONICS_PRODUCT_SUCCESS:
      return {
        ...state,
        isELoading: false,
        electronicsProduct: payload,
      };
    case types.GET_ELECTRONICS_PRODUCT_FAILURE:
      return {
        ...state,
        isELoading: false,
        isEError: true,
        electronicsProduct: [],
      };
    default:
      return state;
  }
};

export { reducer };
