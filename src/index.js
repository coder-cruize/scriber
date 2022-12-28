import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserData from "./services/userdata";

import App from "./App";

function ContextProviders({ children }) {
  return (
    <React.StrictMode>
      <UserData.Provider>
        <BrowserRouter>{children}</BrowserRouter>
      </UserData.Provider>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProviders>
    <App />
  </ContextProviders>
);
