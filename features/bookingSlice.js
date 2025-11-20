import { fetchData } from "../services/apiIntsance";
import { endpoints } from "../services/userEndpoints";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  loading: false,
  error: "",
};

export const addBooking = createAsyncThunk("booking/create", async (data) => {
  const createBooking = await fetchData({
    url: endpoints.routes.base_route + endpoints.routes.endpoints.add_booking,
    body: data,
    method: "POST",
  });
  console.log("createBooking", createBooking);
  return createBooking;
});
const bookingSlice = createSlice({
  initialState,
  name: "booking",
  extraReducers: (builder) => {
    builder
      .addCase(addBooking.pending, (state, action) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
