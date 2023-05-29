import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blogSlice";
import themeReducer from "./features/themeSlice";
import detailsReducer from "./features/detailsSlice";
import searchReducer from "./features/searchSlice";
import userReducer from "./features/usersSlise";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    theme: themeReducer,
    details: detailsReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;