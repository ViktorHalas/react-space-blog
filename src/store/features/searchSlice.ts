import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BlogInfo, RequestOption } from "types";

interface BlogState {
  blog: BlogInfo[];
  isLoading: boolean;
  error: string | null;
  searchParams: SearchParams;
}
interface SearchParams{
    searchValue: string | null;
}
const initialState: BlogState = {
  blog: [],
  isLoading: false,
  error: null,
  searchParams: {
    searchValue: null,
  },
};

export const fetchSearchBlog = createAsyncThunk<
  BlogInfo[] | undefined,
  RequestOption,
  {rejectValue: string}
>("blog/fetchSearchBlog", async ({search, limit},{rejectWithValue}) => {
  try {
    const {data} = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?_title_contains=${search}&_limit=${limit}`);
    return data;
  } catch (error) {
    const {message} = error as AxiosError;
    return rejectWithValue(message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchParams.searchValue = payload.searchValue;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchBlog.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchBlog.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.blog = payload;
      }
    });
    builder.addCase(fetchSearchBlog.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;
export const { setSearchValue } = searchSlice.actions;