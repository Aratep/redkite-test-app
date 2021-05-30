import { authActionTypes } from "./auth.types";
import authApi from "./auth.api.js";

//LOG OUT
export const userLogout = (errorMessage = "") => ({
   type: authActionTypes.USER_LOG_OUT,
   payload: errorMessage,
});

//ACTIONS FOR LOGIN
const loginStart = () => ({
   type: authActionTypes.LOGIN_START,
});
const loginSuccess = (userData) => ({
   type: authActionTypes.LOGIN_SUCCESS,
   payload: userData,
});
const loginFailure = (error) => ({
   type: authActionTypes.LOGIN_FAILURE,
   payload: error,
});

//LOGIN ASYNC
export const loginAsync = ({ email, password }, history) => async (
   dispatch
) => {
   dispatch(loginStart());

   try {
      const resp = await authApi.login();
      const users = resp?.data?.users || [];
      const loggedUser = users.filter(
         (user) => user.email === email && user.password === password
      )[0];

      if (loggedUser) {
         dispatch(
            loginSuccess({ token: loggedUser.token, userInfo: loggedUser })
         );
         history.push("/statistics");
      } else {
         dispatch(loginFailure("Wrong credentails."));
      }
   } catch (error) {
      dispatch(loginFailure(error));
   }
};
