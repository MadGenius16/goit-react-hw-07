import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: "filter",
  initialState: {name: ''},
  reducers: {
    ChangeFilter: {
      reducer(state, action) {
      state.name = action.payload;
      }
    },
  },
});

export const selectFilterName = (state) =>state.filter.name
export const { ChangeFilter } = filterSlice.actions;
export const filterReducer= filterSlice.reducer;