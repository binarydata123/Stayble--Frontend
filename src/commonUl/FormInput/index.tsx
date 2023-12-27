import React from "react";
import { Input } from "antd";
import styles from "./formInput.module.css";

interface FormInputProps {
  prefix?: any;
  className?: string;
  suffix?: any;
  height?: number;
  background?: string;
  color?: string;
  border?: string; // Change type to string
  placeHolder?: string;
  type?: any;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  prefix,
  className,
  suffix,
  height = 56,
  background = "#F7FBFF",
  color = "#8897AD",
  border = "none", // Set default value to 'none'
  type = "any",
  placeHolder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className={styles.inputWithIcon}>
      <Input
        className={className}
        prefix={prefix}
        suffix={suffix}
        style={{
          height: `${height}px`,
          background: `${background}`,
          border: border,
        }}
        type={type}
        color={color}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
