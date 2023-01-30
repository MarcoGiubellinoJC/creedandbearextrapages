import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { generateApiClient, ApiProvider } from "@hybris-software/use-query";
const apiClient = generateApiClient({
  baseUrl: "https://api.creedandbear.com/",
  authorizationHeader: "Authorization",
  authorizationPrefix: "Bearer",
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider apiClient={apiClient}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
