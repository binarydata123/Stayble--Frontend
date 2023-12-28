"use client";
import React, { ReactNode } from "react";
import { AuthContextProvider } from "../Context/AuthContext";
import AntdConfig from "@/lib/AntdConfig";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <AntdConfig>
      <AuthContextProvider>{props.children}</AuthContextProvider>
    </AntdConfig>
  );
};

export default Providers;
