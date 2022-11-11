import * as types from "./actionTypes"

const initialState={
    Watch:[],
    isLoading:false,
    IsError:false,
};

const reducer=(oldstate=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_Watch_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
            };
        case types.GET_Watch_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                Watch:payload

            };
        case types.GET_Watch_FAILURE:
            return{
                ...oldstate,
                IsError:true,
                Watch:[]

            };            
        default:
            return oldstate    

    }
}
export {reducer}