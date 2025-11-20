






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rerender: false,
};

const rerenderSlice = createSlice({
  initialState,
  name: "rerender",
  reducers: {
     getRender : (state , action)=>{
        state.rerender = !state.rerender
     }
  },
});

export const { getRender } = rerenderSlice?.actions;
export default rerenderSlice?.reducer;
