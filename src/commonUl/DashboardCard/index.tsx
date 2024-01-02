"use client";
import React from "react";
import ParaText from "../ParaText";
import Image from "next/image";
import Titles from "../Titles";
import styles from "./dashboardCard.module.css";
import { FaStar } from "react-icons/fa6";
import { Col, Row } from "antd";

export default function DashboardCard() {
  return (
    <>
      <div className={styles.dashCardUpdate}>
        <Row align="middle" gutter={16}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Titles level={4} color="light">
              <b>23</b>
            </Titles>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="textEnd">
            <ParaText size="medium" color="light">
              Check-in
            </ParaText>
            <br />
            <ParaText size="textGraf" color="light">
              <b>Today</b>
            </ParaText>
          </Col>
        </Row>
      </div>
    </>
  );
}
