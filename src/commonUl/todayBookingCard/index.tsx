"use client";
import React from "react";
import ParaText from "../ParaText";
import styles from "./todayBookingCard.module.css";
import { Col, Image, Row } from "antd";
import { LuClock4 } from "react-icons/lu";

export default function TodayBookingCard() {
  return (
    <>
      <div className={styles.todayBookingCard}>
        <Row align="middle">
          <Col lg={8} md={8} sm={8} xs={8}>
            <div className="borderRadius10">
              <Image
                src="/images/Rectangle1436.png"
                alt="about-us"
                className="img100"
                width={97}
                height={97}
              />
            </div>
          </Col>
          <Col lg={16} md={16} sm={16} xs={16}>
            <ParaText size="small" color="mediumDark" className="weight500">
              <b>It is a long established fact that a reader.</b>
            </ParaText>
            <br />
            <ParaText size="small" color="mediumDark" className="textGraf12">
              <LuClock4 /> Dec, 2023 <span className={styles.gapSpan}>|</span>{" "}
              10:00 AM
            </ParaText>
          </Col>
        </Row>
      </div>
    </>
  );
}
