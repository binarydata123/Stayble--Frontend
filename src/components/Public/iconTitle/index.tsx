"use client";
import React from "react";
import styles from "./iconTitle.module.css";
import SecondaryButton from "@/commonUl/SecondaryButton";
import { Col, Row } from "antd";
import { FaWifi } from "react-icons/fa6";
import ParaText from "@/commonUl/ParaText";

export default function IconTitle() {
  return (
    <>
      <div className={styles.titleIcon}>
        <Row gutter={16}>
          <Col lg={4} md={4} sm={4} xs={4}>
            <div className={styles.iconBox}>
              <FaWifi />
            </div>
          </Col>
          <Col lg={20} md={20} sm={20} xs={20}>
            <ParaText size="large" color="neutralColor">
              <b>Stay Flexible.</b>
            </ParaText>
            <div className="marginBottomOne"></div>
            <ParaText size="large" color="neutralColor">
              Easy booking, no long-term commitment, no credit check, and one
              bill for all the essentials lets you come and go on your time.
            </ParaText>
          </Col>
        </Row>
      </div>
    </>
  );
}
