import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../store/features/newsSlice";
import themeReducer from "../store/features/themeSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;