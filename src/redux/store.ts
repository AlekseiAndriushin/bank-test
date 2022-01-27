import { configureStore } from '@reduxjs/toolkit';
import { picsumReducer } from './reducers';

export const store = configureStore({
  reducer: {
	  picsumCards: picsumReducer
  },
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;