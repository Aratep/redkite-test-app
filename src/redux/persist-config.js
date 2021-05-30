import storage from "redux-persist/lib/storage";
// import sessionStorage from "redux-persist/lib/storage/session";

export const persistConfig = {
   key: "root",
   storage: storage,
};

// USERS
export const authPersistConfig = {
   key: "auth",
   storage: storage,
};
