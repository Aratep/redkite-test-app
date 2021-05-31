import { commonActionTypes } from "./common.types";

const INITIAL_STATE = {
   globalMessage: null,
};

const commonReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      //! SET GLOBAL MESSAGES
      case commonActionTypes.SET_GLOBAL_MESSAGE: {
         return {
            ...state,
            globalMessage: action.payload,
         };
      }
      default:
         return state;
   }
};

export default commonReducer;
