
import * as types from "./actionTypes";
import axios from "axios";

const getClothRequest = () => {
  return {
    type: types.GET_CLOTH_REQUEST,
  };
};

const getCloths = (quaryParam) => (dispatch) => {
  dispatch(getClothRequest());
  return axios("http://localhost:8080/products", quaryParam)
    .then((res) => {
      dispatch({
        type: types.GET_CLOTH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CLOTH_FAILURE });
    });
};

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

const getwatch=(queryParams)=>(dispatch)=>{
    dispatch({type:types.GET_Watch_REQUEST})
    
    
    return axios    
    .get("http://localhost:8080/Watches",queryParams)
    .then((r)=>{
        dispatch({
            type:types.GET_Watch_SUCCESS,
            payload:r.data,
        });


    })
    .catch((e)=>{dispatch({type:types.GET_Watch_SUCCESS})
})

        
}

export { getCloths,getwatch };
