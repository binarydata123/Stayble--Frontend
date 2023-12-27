import React from "react";
import { Col, Row } from "antd";
import ParaText from "@/commonUl/ParaText";
import Titles from "@/commonUl/Titles";
import styles from "./numscroller.module.css";

export default function Numberscroller() {
  return (
    <>
      <Row className="mobileViewNone">
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className={`${styles.numbersGap} ${styles.bottomBorder}`}>
            <Titles level={2} color="primaryColor">
              {" "}
              21M+
            </Titles>
            <ParaText size="medium" color="dark">
              <b>Visitors</b>
            </ParaText>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div
            className={`${styles.numbersGap} ${styles.leftBorder} ${styles.bottomBorder}`}
          >
            <Titles level={2} color="primaryColor">
              {" "}
              244
            </Titles>
            <ParaText size="medium" color="dark">
              <b>Hotels</b>
            </ParaText>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className={styles.numbersGap}>
            <Titles level={2} color="primaryColor">
              {" "}
              21M+
            </Titles>
            <ParaText size="medium" color="dark">
              <b>Visitors</b>
            </ParaText>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className={`${styles.numbersGap} ${styles.leftBorder}`}>
            <Titles level={2} color="primaryColor">
              {" "}
              244
            </Titles>
            <ParaText size="medium" color="dark">
              <b>Hotels</b>
            </ParaText>
          </div>
        </Col>
      </Row>
    </>
  );
}
