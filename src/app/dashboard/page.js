"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/Auth.context";

import { Button, Layout, theme } from "antd";

const { Content } = Layout;

const Dashboard = () => {

  const { user } = useAuth();
  const router = useRouter();

  useEffect(()=>{
    if (user) {
      router.replace("/dashboard");
    }
  },[user])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        Dashboard
      </Content>
    </Layout>
  );
};

export default Dashboard;
