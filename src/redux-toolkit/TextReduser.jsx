import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "Mening ismim Hulkaroy. Yoshim 31 da",
};
const toolkit = createSlice({
  name: "text",
  initialState,
  reducers: {
    change: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { change } = toolkit.actions;

export default toolkit.reducer;
