import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/page";
import AntdConfig from "@/lib/AntdConfig";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <AntdConfig>
        <Header />
        {children}
        <Footer />
      </AntdConfig>
    </body>
  </html>
);

export default RootLayout;
