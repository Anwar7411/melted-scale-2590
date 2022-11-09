import * as types from "./actionTypes"
const loginRequest=()=>{
    return{
        type:types.Login_Request
    }
}

const loginSuccess=()=>{
    return{
        type:types.Login_Success,
    }
}

const loginFailure=()=>{
   return {
        type:types.Login_Failue
    }
}




const SignUpSuccess=(payload)=>{
    return{
        type:types.SingnUp_Success,
        payload
    }
}

export {loginFailure,loginRequest,loginSuccess,SignUpSuccess}


