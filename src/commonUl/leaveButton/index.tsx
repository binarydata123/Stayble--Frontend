"use client";
import React from "react";
import styles from "./leaveButton.module.css";
import { Image } from "antd";

export default function LeaveButton() {
  return (
    <>
      <button className={styles.leaveButton}>On Leave</button>
    </>
  );
}
