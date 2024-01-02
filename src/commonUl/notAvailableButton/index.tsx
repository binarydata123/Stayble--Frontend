"use client";
import React from "react";
import styles from "./notAvailableButton.module.css";
import { Image } from "antd";

export default function NotAvailableButton() {
  return (
    <>
      <button className={styles.notAvailableButton}>Not Available </button>
    </>
  );
}
