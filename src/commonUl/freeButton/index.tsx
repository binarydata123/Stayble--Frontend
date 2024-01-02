"use client";
import React from "react";
import styles from "./freeButton.module.css";
import ParaText from "../ParaText";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { Image } from "antd";

export default function FreeButton() {
  return (
    <>
      <button className={styles.freeButton}>
        FREE
        <Image
          src="/images/goldenRound.png"
          alt="about-us"
          className="img100"
          width={12}
          height={12}
        />
      </button>
    </>
  );
}
