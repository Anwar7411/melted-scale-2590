import * as types from "./actionTypes"

const initialstate={
    isAuth:false,
    isLoading:false,
    isError:false,
    userEmail:"",
}
const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
switch(type){
    case types.Login_Request:return{
                              ...state,
                              isLoading:true,
                              }
    case types.Login_Success:return{
                                ...state,
                                isLoading:false,
                                isAuth:true,
                                userEmail:payload
                                } 
    case types.Login_Failue:return{
                                    ...state,
                                    isLoading:false,
                                    isAuth:false,
                                    isError:true,
                                    }   
                     default:return state                                      
}
}
export {reducer}


