import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";
import { TranslationProvider } from "./context/TranslationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({});
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </TranslationProvider>
  </React.StrictMode>
);
