"use client";
import React from "react";
import ParaText from "../ParaText";
import Titles from "../Titles";
import styles from "./roomsCard.module.css";
import { Badge, Col, Row } from "antd";
import BadgeSuccess from "../badgeSuccess";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function RoomsCard() {
  return (
    <>
      <div className={styles.roomsCard}>
        <Row align="middle">
          <Col lg={20} md={20} sm={20} xs={20}>
            <BadgeSuccess />
            <div className="marginTopHalf"></div>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="textEnd">
            <HiOutlineDotsVertical />
          </Col>
        </Row>
        <ParaText size="extraSmall" color="mediumDark">
          Single sharing
        </ParaText>
        <br />
        <Titles level={5} color="mediumDark">
          2<small className={styles.smallTitle}>/30</small>
        </Titles>
        <Titles level={5} color="primaryColor">
          $ 568<small className={styles.smallTitle}>/ day</small>
        </Titles>
      </div>
    </>
  );
}
