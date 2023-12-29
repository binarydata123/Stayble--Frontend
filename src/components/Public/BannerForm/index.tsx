"use client";
import React from "react";
import styles from "./form.module.css";
import ParaText from "@/commonUl/ParaText";
import { Col, Row } from "antd";
import SecondaryButton from "@/commonUl/SecondaryButton";
import { HomeIcon } from "@heroicons/react/16/solid";
import SelectBoxFiled from "@/commonUl/SelectBoxFiled";
export default function BannerForm() {
  return (
    <>
      <div className="mainContainer">
        <div className={styles.bookYourVacation}>
          <ParaText size="medium" color="light" className={styles.bookYour}>
            What are you looking for
          </ParaText>
          <div className={styles.formPart}>
            <Row align="middle" gutter={16}>
              <Col xxl={7} xl={7} lg={7} md={7} sm={24} xs={24}>
                <div className={styles.borderClass}>
                  <span className={styles.location}>Location</span>
                  <SelectBoxFiled />
                </div>
              </Col>
              <Col xxl={7} xl={7} lg={7} md={7} sm={24} xs={24}>
                <div className={styles.borderClass}>
                  <span className={styles.location}>Room Type</span>
                  <SelectBoxFiled />
                </div>
              </Col>
              <Col xxl={7} xl={7} lg={7} md={7} sm={24} xs={24}>
                <div className={styles.borderClass}>
                  <span className={styles.location}>Checkin</span>
                  <SelectBoxFiled />
                </div>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={3}
                sm={24}
                xs={24}
                className="textEnd classAddMobile"
              >
                <SecondaryButton
                  label="Find A Room"
                  className={`mediumButtonHome w100 ${styles.SubscribeButton}`}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
