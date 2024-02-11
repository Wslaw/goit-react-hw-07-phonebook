import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
// import persistStore from 'redux-persist/es/persistStore';
// import persistedReducer from './rootReducer';




export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['persist/PERSIST'],
  //     },
  //   }),
});
// export const persistor = persistStore(store);

