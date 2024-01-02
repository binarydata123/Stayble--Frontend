import React, { useState } from "react";
import { Rate } from "antd";
import styles from "./rateStar.module.css";
const desc = [""];
export default function RateStar() {
  const [value, setValue] = useState(1);
  return (
    <>
      <div className="starReview1">
        <Rate tooltips={desc} onChange={setValue} value={value} />
        {value ? <span>{desc[value - 1]}</span> : ""}
      </div>
    </>
  );
}
