"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface HProps {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  content?: any;
  children?: React.ReactNode;
  color?:
    | "dark"
    | "mediumDark"
    | "light"
    | "primaryColor"
    | "neutralColor"
    | "darkgray"
    | "yellowText"
    | "blockgray";
}

const Titles = ({
  level = 1,
  content,
  children,
  className = "",
  color = "dark",
}: HProps) => {
  const [fontSize, setFontSize] = useState<number>(0);
  const [fontWeight, setFontWeight] = useState<number>(0);

  useEffect(() => {
    const updateStyles = () => {
      const screenWidth = window.innerWidth;

      setFontSize(
        level === 1
          ? screenWidth > 767
            ? 80
            : 54
          : level === 2
          ? screenWidth > 767
            ? 60
            : 30
          : level === 3
          ? screenWidth > 767
            ? 48
            : 30
          : level === 4
          ? screenWidth > 767
            ? 30
            : 24
          : level === 5
          ? screenWidth > 767
            ? 24
            : 18
          : screenWidth > 767
          ? 16
          : 10
      );

      setFontWeight(level === 1 ? (screenWidth > 767 ? 600 : 600) : 600);
    };

    updateStyles();

    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, [level]);

  return (
    <>
      <Title
        className={className}
        level={level}
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
              ? "#0091F7"
              : color == "neutralColor"
              ? "#012A59"
              : color == "blockgray"
              ? "#121416"
              : color == "darkgray"
              ? "#646464"
              : color == "yellowText"
              ? "#FFE70F"
              : color
          }`,                  
        }}
      >
        {content || children}
      </Title>
    </>
  );
};

export default Titles;
