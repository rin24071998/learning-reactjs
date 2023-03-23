import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  authed: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authend: (state) => {
      state.authed = true;
    },
  },
});

export const { authend } = userSlice.actions;
export default userSlice.reducer;
