"use client";
import React from "react";
import ParaText from "../ParaText";
import Image from "next/image";
import Titles from "../Titles";
import styles from "./offersCard.module.css";
import { FaStar } from "react-icons/fa6";
import { Col, Row } from "antd";

export default function OffersCard() {
  return (
    <>
      <div className={styles.offersCard}>
        <Image
          src="/images/Rectangle-6.png"
          alt="Your External Image"
          width={500}
          height={550}
        />
        <div className="starReview">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <Titles level={5} color="neutralColor">
          Luxury Suite with Sauna & Terrace
        </Titles>
        <div className="marginTopOne"></div>

        <ParaText size="medium" color="mediumDark">
          <span className="yellowBackground">4.6/5</span> &nbsp; (166 reviews)
        </ParaText>
        <div className="marginTopOne"></div>
        <ParaText size="medium" color="mediumDark">
          From <b className="dark">$200/3</b> Days
        </ParaText>
      </div>
    </>
  );
}
