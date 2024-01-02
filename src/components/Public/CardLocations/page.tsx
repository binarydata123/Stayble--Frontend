import React from "react";
import styles from "./cardlocations.module.css";
import ParaText from "@/commonUl/ParaText";
import Titles from "@/commonUl/Titles";
import Image from "next/image";
import SecondaryButton from "@/commonUl/SecondaryButton";
export default function CardLocations() {
  return (
    <>
      <div className={styles.locationsCard}>
        <Image
          src="/images/home/card.jpg"
          alt="Your External Image"
          width={800}
          height={800}
        />
        <div className="marginBottomOne"></div>
        <div className={styles.textBoxCard}>
          <ParaText size="large" color="light">
            <b>Orlando</b>
          </ParaText>
          <Titles level={4} color="light">
            {" "}
            Orlando Awaits
          </Titles>
          <div className="marginBottomOne"></div>
          <SecondaryButton label="Book Now" />
        </div>
      </div>
    </>
  );
}
