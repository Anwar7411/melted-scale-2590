import * as types from "./actionTypes"
import axios from "axios"

const getwatch=(dispatch)=>{
    dispatch({type:types.GET_Watch_REQUEST})
    return axios
    .get("http://localhost:8080/WatchSilder")
    .then((r)=>{dispatch({type:types.GET_Watch_SUCCESS,payload:r.data})
})
.catch((e)=>{dispatch({type:types.GET_Watch_FAILURE})})
}
export {getwatch}