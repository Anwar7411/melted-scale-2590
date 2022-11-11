import * as types from "./actionTypes"
import axios from "axios"

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
export {getwatch}