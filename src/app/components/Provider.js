"use client";
import React from "react";

import { ConfigProvider } from "antd";

import { QueryClient, QueryClientProvider } from "react-query";

import AuthProvider from "../context/Auth.context";

export default function Providers({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ConfigProvider>{children}</ConfigProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
