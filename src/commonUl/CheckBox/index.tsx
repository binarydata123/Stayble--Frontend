import styles from "./checkBox.module.css";
import React from "react";
import { Checkbox } from "antd";

interface CheckBoxProps {
  title?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ title }) => {
  return (
    <>
      <div className="customContainer">
        <div className={`${styles.checkboxWrapper} ${styles.modalCheckbox}`}>
          <Checkbox value="A">{title}</Checkbox>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
