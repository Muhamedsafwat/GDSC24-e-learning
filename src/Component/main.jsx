import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'video-react/dist/video-react.css';
import './index.css'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  // </React.StrictMode>,
)
