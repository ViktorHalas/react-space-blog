import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { NewsInfo } from "types";

interface NewsState {
  news: NewsInfo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: null,
};

export const fetchHomeNews = createAsyncThunk<
  NewsInfo[] | undefined,
  undefined,
  {rejectValue: string}
>("news/fetchHomeNews", async (_,{rejectWithValue}) => {
  try {
    const {data} = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
    return data;
  } catch (error) {
    const {message} = error as AxiosError;
    return rejectWithValue(message);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeNews.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeNews.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
        state.news = payload;
      }
    });
    builder.addCase(fetchHomeNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newsSlice.reducer;