import React from "react";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ textAlign: "center" }} className="p-10 border border-gray-200 rounded-sm">
        <h1 className="mb-10">Compass : CS</h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
