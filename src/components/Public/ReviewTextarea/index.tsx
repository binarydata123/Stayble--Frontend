import React, { useState } from "react";
import styles from "./reviewTextarea.module.css";
import { Input } from "antd";

const { TextArea } = Input;

export default function ReviewTextarea({
  placeholder,
  height,
  maxLength,
}: any) {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className={styles.reviewTextarea}>
        <TextArea
          rows={4}
          placeholder={placeholder || "enter address"}
          value={text}
          onChange={handleChange}
          style={{ height: height || 93 }}
          maxLength={maxLength || 6}
        />
      </div>
    </>
  );
}
