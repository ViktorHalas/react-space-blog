import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { store } from "store";
import { GlobalStyles } from "ui";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <Provider store = {store}><RouterProvider router={router} /></Provider>
  </>,
);
