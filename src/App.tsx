import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routers from './Routes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
