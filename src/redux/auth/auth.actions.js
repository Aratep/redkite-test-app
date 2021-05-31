import { authActionTypes } from "./auth.types";
import authApi from "./auth.api.js";

//ACTIONS
import { setGlobalMessage } from "redux/common/common.actions";

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
         dispatch(
            setGlobalMessage({
               severity: "success",
               text: "You are successfully logged in!",
            })
         );
         history.push("/statistics");
      } else {
         dispatch(
            setGlobalMessage({
               severity: "error",
               text: "Wrong email or password.",
            })
         );
         dispatch(loginFailure("Wrong email or password!"));
      }
   } catch (error) {
      dispatch(loginFailure(error));
   }
};
