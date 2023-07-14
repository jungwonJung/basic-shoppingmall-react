import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { getClient } from "../queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gnb from "../components/gnb";
import "../scss/index.scss";
import { worker } from "../mocks/browser";

if (import.meta.env) {
  worker.start();
}

const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"loading..."}>
        <Gnb />
        <Outlet />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Layout;
