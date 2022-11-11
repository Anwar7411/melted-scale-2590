import * as types from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    cloth:[],
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_CLOTH_REQUEST: return {
            ...state,
            isLoading:true
        }
        case types.GET_CLOTH_SUCCESS: return {
            ...state,
            isLoading:false,
            cloth:payload
        }
        case types.GET_CLOTH_FAILURE: return {
            ...state,
            isLoading:false,
            isError:true
        }
        default: return state
     }
}

export {reducer}