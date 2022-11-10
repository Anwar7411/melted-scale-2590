import * as types from "./actionTypes"

const initialState = {

    watch: [],
    isLoading: false,
    isError: false,
  };
  
 const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
    case types.GET_Watch_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,

      }
      case types.GET_Watch_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          watch:payload,
        }
        case types.GET_Watch_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true,
          watch:[],
        }
      default:
        return state
  }

};
 export {reducer}