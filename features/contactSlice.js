import { fetchData } from "../services/apiIntsance";
import { endpoints } from "../services/userEndpoints";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  loading: false,
  error: "",
};

export const addContact = createAsyncThunk("contact/create", async (data) => {
  const createContact = await fetchData({
    url: endpoints.routes.base_route + endpoints.routes.endpoints.createContact,
    body: data,
    method: "POST",
  });
  return createContact;
});
const contactSlice = createSlice({
  initialState,
  name: "contact",
  extraReducers: (builder) => {
    builder
      .addCase(addContact.pending, (state, action) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
