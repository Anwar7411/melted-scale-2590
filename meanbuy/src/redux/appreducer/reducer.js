import * as types from "./actionTypes";

const initialState = {
  electronicsProduct: [],
  isELoading: false,
  isEError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
