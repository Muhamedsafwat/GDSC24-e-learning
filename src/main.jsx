import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * (30 * 1000),
      refetchOnWindowFocus: false,
      // staleTime: 10000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
