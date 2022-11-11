import * as types from "./actionTypes"
import axios from "axios"

const getClothRequest = () => {
   return {
        type: types.GET_CLOTH_REQUEST
    }
}

const getCloths = (quaryParam) => (dispatch) => {
    dispatch(getClothRequest());
    return axios("http://localhost:8080/products", quaryParam)
        .then((res) => {
            dispatch({
                type: types.GET_CLOTH_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => { dispatch({ type: types.GET_CLOTH_FAILURE }) })
}

export {getCloths}