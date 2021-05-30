import { statisticsActionTypes } from "./statistics.types";

export const updateHistoryLog = (history) => ({
   type: statisticsActionTypes.UPDATE_HISTORY_LOG,
   payload: history,
});

export const resetHistoryLog = () => ({
   type: statisticsActionTypes.RESET_HISTORY_LOG,
});
