import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BlogInfo, RequestOption } from "types";

interface BlogState {
  details: BlogInfo;
  isLoading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  details: {} as BlogInfo,
  isLoading: false,
  error: null,
};

export const fetchBlogById = createAsyncThunk<
  BlogInfo | undefined,
  RequestOption,
  {rejectValue: string}
>("blog/fetchBlogById", async ({blog,id},{rejectWithValue}) => {
  try {
    const {data} = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/${blog}/${id}`);
    return data;
  } catch (error) {
    const {message} = error as AxiosError;
    return rejectWithValue(message);
  }
});

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogById.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogById.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.details = payload;
      }
    });
    builder.addCase(fetchBlogById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default detailsSlice.reducer;