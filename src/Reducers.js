import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

// createReducer(initialState,allTheDiffTypesOfReducers)
//  here increment,incrementByValue and decrement are reducers

export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.c += 1;
  },

  incrementByValue: (state, action) => {
    state.c += action.payload;
  },

  decrement: (state, action) => {
    state.c -= 1;
  },
});




// (If We Create Reducer With createSlice we need to export action and reducer in this way )
// export const { increment, incrementByValue, decrement } = customReducer.actions;
// export default customReducer.reducer;
