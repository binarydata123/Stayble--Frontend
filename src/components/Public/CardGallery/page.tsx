import React from "react";
import styles from "./cardGallery.module.css";
import ParaText from "@/commonUl/ParaText";
import Titles from "@/commonUl/Titles";
import Image from "next/image";
import SecondaryButton from "@/commonUl/SecondaryButton";

export default function CardGallery() {
  return (
    <>
      <div className={styles.cardGallery}>
        <Image
          src="/images/hero_banner.png"
          alt="Your External Image"
          width={800}
          height={800}
        />
        <div className={styles.textBoxCard}>
          <Titles level={5} color="light">
            Orlando Awaits
          </Titles>
        </div>
      </div>
    </>
  );
}
