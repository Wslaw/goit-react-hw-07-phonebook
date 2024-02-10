import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from "./rootReducer";
import persistStore from 'redux-persist/es/persistStore';
import persistedReducer from './rootReducer';




export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
