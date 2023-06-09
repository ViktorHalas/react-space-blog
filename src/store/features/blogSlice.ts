import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BlogInfo, RequestOption } from "types";

interface BlogState {
  blog: BlogInfo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blog: [],
  isLoading: false,
  error: null,
};

export const fetchHomeBlog = createAsyncThunk<
  BlogInfo[] | undefined,
  RequestOption,
  {rejectValue: string}
>("blog/fetchHomeBlog", async ({blogType,sort,limit},{rejectWithValue}) => {
  try {
    const {data} = await axios.get(
      // eslint-disable-next-line max-len
      `https://api.spaceflightnewsapi.net/v3/${blogType}?_limit=${limit}&_sort=${sort}`);
    return data;
  } catch (error) {
    const {message} = error as AxiosError;
    return rejectWithValue(message);
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeBlog.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeBlog.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.blog = payload;
      }
    });
    builder.addCase(fetchHomeBlog.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogSlice.reducer;