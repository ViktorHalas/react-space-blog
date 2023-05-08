import { DetailsPage, HomePage, SearchPage, SignInPage, SignUpPage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ROUTE } from "router";
import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate/>}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.SING_IN} element={<SignInPage />} />
      <Route path={ROUTE.SING_UP} element={<SignUpPage />} />
    </Route>,
  ),
);
