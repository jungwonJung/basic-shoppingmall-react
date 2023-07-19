import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { getClient } from "../queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gnb from "../components/gnb";
import "../scss/index.scss";
import { worker } from "../mocks/browser";
import { RecoilRoot } from "recoil";

if (import.meta.env) {
  worker.start();
}

const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={"loading..."}>
          <Gnb />
          <Outlet />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Layout;
