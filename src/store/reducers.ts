import { createReducer } from '@reduxjs/toolkit';
import { changeProductCardState } from './actions';
import { initialState } from './const';

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeProductCardState, (state, action) => {
      state.currentStateCard = action.payload.currentStateCard;
    });
});

export { reducer };
