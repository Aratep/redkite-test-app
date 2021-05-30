import { authActionTypes } from "./auth.types.js";

const INITIAL_STATE = {
   token: null,
   userInfo: {},
   errorMessage: null,
   isLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      //! USER LOGOUT
      case authActionTypes.USER_LOG_OUT: {
         window.localStorage.clear();
         window.sessionStorage.clear();
         return { ...INITIAL_STATE };
      }
      //! USER LOGIN
      case authActionTypes.LOGIN_START:
         return { ...state, isLoading: true };
      case authActionTypes.LOGIN_SUCCESS: {
         console.log(action.payload);
         const { token = state.token, userInfo } = action.payload;
         return { ...state, isLoading: false, token, userInfo };
      }
      case authActionTypes.LOGIN_FAILURE:
         return { ...state, isLoading: false, errorMessage: action.payload };
      default:
         return state;
   }
};

export default authReducer;
