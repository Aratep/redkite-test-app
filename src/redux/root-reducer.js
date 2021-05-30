import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import { persistConfig, authPersistConfig } from "./persist-config";

// REDUCERS
import authReducer from "redux/auth/auth.reducer.js";
import statisticsReducer from "./statistics/statistics.reducer";

const rootReducer = combineReducers({
   auth: persistReducer(authPersistConfig, authReducer),
   statistics: statisticsReducer,
});

export default persistReducer(persistConfig, rootReducer);
