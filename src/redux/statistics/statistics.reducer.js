import { statisticsActionTypes } from "./statistics.types";

const INITIAL_STATE = {
   historyLog: [],
};

const statisticsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      //! UPDATE HISTORY LOG
      case statisticsActionTypes.UPDATE_HISTORY_LOG: {
         const { name, value } = action?.payload;

         if (state.historyLog.length >= 10) {
            state.historyLog.shift();
         }
         return {
            ...state,
            historyLog: [...state.historyLog, { name, value }],
         };
      }
      //! RESET HISTORY LOG
      case statisticsActionTypes.RESET_HISTORY_LOG: {
         return {
            ...state,
            historyLog: [],
         };
      }
      default:
         return state;
   }
};

export default statisticsReducer;
