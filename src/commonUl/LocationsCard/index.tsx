import React from "react";
import ParaText from "../ParaText";
import Image from "next/image";
import Titles from "../Titles";
import styles from "./locationsCard.module.css";

export default function LocationsCard() {
  return (
    <>
      <div className="textLeft">
        <div className={styles.locationsCard}>
          <Image
            src="/images/home/card5.png"
            alt="Your External Image"
            width={500}
            height={500}
          />
          <br />
          <br />
          <Titles level={5} color="light">
            Stay Flexible.
          </Titles>
          <br />
          <ParaText size="large" color="light">
            Easy booking, no long-term commitment, no credit check, and one bill
            for all the essentials lets you come and go on your time.
          </ParaText>
        </div>
      </div>
    </>
  );
}
