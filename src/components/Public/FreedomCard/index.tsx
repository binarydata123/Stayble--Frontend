import React from "react";
import ParaText from "@/commonUl/ParaText";
import Image from "next/image";
import Titles from "@/commonUl/Titles";
import styles from "./freedomCard.module.css";

export default function FreedomCard() {
  return (
    <>
      <div className={styles.freedomCard}>
        <Image
          src="/images/Rectangle-22.png"
          alt="Your External Image"
          width={800}
          height={800}
        />
        <br />
        <Titles level={4} color="light">
          {" "}
          Stay Flexible.
        </Titles>
        <br />
        <ParaText size="large" color="light">
          Easy booking, no long-term commitment, no credit check, and one bill
          for all the essentials lets you come and go on your time.
        </ParaText>
      </div>
    </>
  );
}
