"use client";
import React from "react";
import ParaText from "../ParaText";
import Image from "next/image";
import Titles from "../Titles";
import styles from "./offersCard.module.css";
import { FaStar } from "react-icons/fa6";
import { Col, Row } from "antd";
import SecondaryButton from "../SecondaryButton";
import { HiLocationMarker } from "react-icons/hi";

export default function OffersCardReveiw() {
  return (
    <>
      <div className={styles.offersCard}>
        <Image
          src="/images/card/card.png"
          alt="Your External Image"
          width={500}
          height={550}
        />
        <div className={styles.bgColorChange}>
          <br />
          <ParaText size="extraSmall" color="paraGraf">
            <HiLocationMarker style={{ marginTop: "5px" }} />
            <span className={styles.marginRight}>
              Greater London, United Kingdom
            </span>
          </ParaText>
          <Titles level={5} color="neutralColor">
            Luxury Suite with Sauna & Terrace
          </Titles>
          <div className="marginTopOne"></div>
          <ParaText size="medium" color="mediumDark">
            <div className="starReview">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </ParaText>
          <div className="marginTopOne"></div>
          <div>
            <Row align="middle">
              <Col xl={12} md={24} sm={24} xs={24}>
                <ParaText size="medium" color="mediumDark">
                  From <b className="dark">$200/3</b>
                </ParaText>
              </Col>
              <Col xl={12} md={24} sm={24} xs={24} className="textEnd">
                <SecondaryButton label="Book Now" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
