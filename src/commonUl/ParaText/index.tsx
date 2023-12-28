"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";

const { Text } = Typography;

interface CustomTextProps {
  size?: "large" | "medium" | "small" | "extraSmall";
  className?: string;
  children?: React.ReactNode;
  color?:
    | "dark"
    | "mediumDark"
    | "light"
    | "primaryColor"
    | "neutralColor"
    | "linkLight"
    | "darkgraydark"
    | "darkgray";
}

const ParaText = ({
  className = "",
  children,
  size = "large",
  color = "dark",
}: CustomTextProps) => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontWeight, setFontWeight] = useState<number>(400);

  useEffect(() => {
    const updateStyles = () => {
      const screenWidth = window.innerWidth;

      setFontSize(
        size === "large"
          ? screenWidth > 767
            ? 21
            : 18
          : size === "medium"
          ? screenWidth > 767
            ? 20
            : 16
          : size === "small"
          ? screenWidth > 767
            ? 18
            : 16
          : size === "extraSmall"
          ? screenWidth > 767
            ? 18
            : 16
          : screenWidth > 767
          ? 16
          : 16
      );

      setFontWeight(size === "large" ? (screenWidth > 767 ? 400 : 400) : 400);
    };

    updateStyles();

    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, [size]);

  return (
    <>
      <Text
        className={className}
        style={{
          fontSize,
          fontWeight,
          color: `${
            color == "dark"
              ? "#333"
              : color == "mediumDark"
              ? "#858585"
              : color == "light"
              ? "#fff"
              : color == "primaryColor"
              ? "#2F80ED"
              : color == "neutralColor"
              ? "#012A59"
              : color == "linkLight"
              ? "#0091F7"
              : color == "darkgray"
              ? "#646464"
              : color == "darkgraydark"
              ? "#6C757D"
              : color
          }`,
        }}
      >
        {children}
      </Text>
    </>
  );
};

export default ParaText;
