"use client";
import React from "react";
import ParaText from "../ParaText";
import styles from "./tableHotelCard.module.css";
import { Col, Image, Row } from "antd";
import { LuClock4 } from "react-icons/lu";

export default function TableHotelCard() {
  return (
    <>
      <div className={styles.todayBookingCard}>
        <Row align="middle">
          <Col lg={8} md={8} sm={8} xs={8}>
            <Image
              src="/images/Rectangle-24.png"
              alt="about-us"
              className="img100"
              width={62}
              height={50}
            />
          </Col>
          <Col lg={16} md={16} sm={16} xs={16}>
            <ParaText size="small" color="lightBlue">
              <b>Oliver</b>
            </ParaText>
            <br />
            <ParaText size="textGraf" color="dark" className="textGraf12">
              Ph: 684 625 2428
            </ParaText>
          </Col>
        </Row>
      </div>
    </>
  );
}
