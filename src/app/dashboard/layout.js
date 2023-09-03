"use client";
import React, { useEffect } from "react";
import { Button, Layout, theme } from "antd";
import { useAuth } from "../context/Auth.context";
import { useRouter } from "next/navigation";
import Loading from "../loading";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }) => {

  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    console.log(user)
    if (user == null) {
      router.push("/login");
    }
  }, [user]);

  if(loading) return <Loading/>

  else return (
    <Layout className="flex flex-col min-h-screen bg-gray-100">
      <Content className="pt-24">
        <Layout>
          <Button onClick={logout}>Logout</Button>
          {children}
        </Layout>
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
