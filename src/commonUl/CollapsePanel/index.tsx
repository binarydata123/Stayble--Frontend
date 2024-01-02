"use client";
import { Col, Row } from "antd";
import styles from "./style.module.css";
import React from "react";
import ParaText from "../ParaText";
export default function CollapsePanel() {
  return (
    <>
      <div className={styles.collapsePanel}>
        <Row>
          <Col xl={24} md={24} sm={24} xs={24}>
            <div className={styles.collapsePanelBox}>
              <ParaText size="small" color="paraGraf">
                What are your office hours?
              </ParaText>
              <br />
              <br />
              <br />
              <ParaText size="extraSmall" color="paraGraf">
                Front office hours are 4:00 PM to 6:00 PM and by appointment
                every day of the week and year-round. Guests may check-in
                between 4:00 PM and 2:30 AM. Hours may be expanded for special
                events. Please check with the specific property for details.
              </ParaText>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
