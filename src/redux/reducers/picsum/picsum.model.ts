import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPicsumList } from './api.actions';

const initialState: IPicsumState = {
  cardsList: []
};

const picsumSlice = createSlice({
  name: 'picsum',
  initialState,
  reducers: {
	  setSelected: (state, action) => {
		 const index = state.cardsList.findIndex(({id}) => id === action.payload);
		 if(state.cardsList[index].like) {
		 state.cardsList[index].like = false;
		 } else {
		 state.cardsList[index].like = true;
		 }
	  },
	  deleteItem: (state, action: PayloadAction<{ id: string }>) => {
		  state.cardsList = state.cardsList.filter(
			  (card) => card.id !== action.payload.id);
	  }
  },
  extraReducers: (builder) => {
    builder
	  // get picsum list
      .addCase(getPicsumList.fulfilled, (state : IPicsumState, action: PayloadAction<ICard[]>) => {
        state.cardsList = action.payload;
      });
  },
});

export const { setSelected, deleteItem } = picsumSlice.actions;

export const picsumReducer = picsumSlice.reducer;

export interface IPicsumState {
  cardsList: ICard[];
};

interface ICard {
	id: string;
	author: string;
	download_url: string;
	like: boolean;
}
