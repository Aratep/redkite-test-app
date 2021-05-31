import { commonActionTypes } from "./common.types";

export const setGlobalMessage = (message) => ({
   type: commonActionTypes.SET_GLOBAL_MESSAGE,
   payload: message,
});
