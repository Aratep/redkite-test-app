import axios from "axios";
// import { store } from "redux/store";

// ACTIONS
// import { userLogout } from "redux/auth/auth.actions";

// AXIOS GLOBAL CONFIG
axios.defaults.baseURL = `${window.location.origin}/`;
// axios.interceptors.request.use((request) => {
//    const auth = store.getState().auth;
//    const token = auth.token;
//    if (auth?.token !== null) {
//       request.headers["authorization"] = `Bearer ${token}`;
//    }
//    return request;
// });
// axios.interceptors.response.use(
//    (response) => {
//       return response;
//    },
//    (error) => {
//       const errorMessage = handleAJAXError(error);
//
//       console.log(errorMessage);
//       // if (error.message) store.dispatch(setGlobalErrorMessage(errorMessage));
//
//       const errorStatus = error?.response?.data?.status;
//       if (errorStatus === "Token is Expired") {
//          store.dispatch(userLogout("Token is Expired."));
//          // setTimeout(() => {
//          //    store.dispatch(refreshAuthTokenAsync());
//          // }, 2000);
//       }
//       return Promise.reject(error);
//    }
// );

export default axios;
