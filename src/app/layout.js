import "./globals.css";
import Providers from "./components/Provider";

import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/AntdRegistry";
import { Metadata } from "next";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
