"use client";
import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useAuth } from "../context/Auth.context";
import { useRouter } from "next/navigation";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Loading from "./loading";

const LoginForm = () => {
  const router = useRouter();
  const { user, login, logout, loading } = useAuth();

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("User:", user);
    if (!loading && user)
        router.push("/dashboard");
  }, [loading, user]);

  const onFinish = async (values) => {
    console.log("Success:", values);
    login(values.email, values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if(loading){
    return(
      <Loading/>
    )
  }

  else return (
    <Form
      name="basic"
      className="login-form flex flex-col w-72"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        className="float-left"
        name="email"
        rules={[{ required: true, message: "Please enter your Email!" }]}
      >
        <Input
          className="h-10"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your Password!"  }]}
      >
        <Input.Password
          className="h-10"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      
      <Form.Item className="ml-0">
        <a className="login-form-forgot" href="">
          <small>Forgot password</small>
        </a>
      </Form.Item>

      <Form.Item className="w-full">
        <input type="submit" className="w-3/4 h-8 rounded-full bg-cyan-600 text-white hover:cursor-pointer hover:bg-cyan-700" value={"Log In"}/>
          {/* Log in
        </Input> */}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
