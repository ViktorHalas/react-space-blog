import {useAppDispatch,useAppSelector } from "./hooks/hooks";
import { getBlog } from "./selectors/blogSelector";
import { getDetails } from "./selectors/detailsSelector";
import { getSearch } from "./selectors/searchSelector";
import { getTheme } from "./selectors/themeSelector";
import { getUserInfo } from "./selectors/userSelector";
export * from "./store";
export * from "./features/blogSlice";
export * from "./features/themeSlice";
export * from "./features/detailsSlice";
export * from "./features/searchSlice";
export * from "./features/usersSlise";

export {useAppDispatch, useAppSelector, getBlog, getDetails, getSearch,getTheme,getUserInfo};