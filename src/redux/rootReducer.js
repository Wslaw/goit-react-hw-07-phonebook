import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./filter/filter-slice";
import contactsReducer from "./contacts/contacts-slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
    // blacklist: ['_persist'],
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;