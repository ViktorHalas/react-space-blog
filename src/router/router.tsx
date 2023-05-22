import { DetailsPage, HomePage, SearchPage, SignInPage, SignUpPage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ROUTE } from "./routes";

import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.SING_IN} element={<SignInPage />} />
      <Route path={ROUTE.SING_UP} element={<SignUpPage />} />
    </Route>,
  ),
);
