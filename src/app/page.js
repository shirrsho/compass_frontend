import { Layout } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
    Homepage
    <Link href={'/login'}>Login</Link>
  </Layout>
  )
}
