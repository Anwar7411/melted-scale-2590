import * as types from "./actionTypes";
import { authgetData, authsaveData } from "../utilies/authLocalData";

const initialstate = {
  isAuth: authgetData("isAuth") || false,
  isLoading: false,
  isError: false,
  userDetails: authgetData("user") || { email: "", password: "" },
};
const reducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.Login_Request:
      return {
        ...state,
        isLoading: true,
      };
      
    case types.Login_Success:
      let newAuth = true;
      authsaveData("isAuth", newAuth);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };

    case types.Login_Failue:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: true,
      };

    case types.SingnUp_Success:
      let newUser = payload;
      authsaveData("user", newUser);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        userDetails: newUser,
      };

      case types.Log_Out:
      let newlogout = payload;
      authsaveData("user", newlogout);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        userDetails: newlogout,
      };

    default:
      return state;
  }
};
export { reducer };
