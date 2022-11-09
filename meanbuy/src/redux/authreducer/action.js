import * as types from "./actionTypes"
const loginRequest=()=>{
    return{
        type:types.Login_Request
    }
}

const loginSuccess=(payload)=>{
    return{
        type:types.Login_Success,
        payload
    }
}

const loginFailure=()=>{
   return {
        type:types.Login_Failue
    }
}

export {loginFailure,loginRequest,loginSuccess}


