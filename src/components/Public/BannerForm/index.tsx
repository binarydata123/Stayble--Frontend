"use client";
import React from "react";
import styles from "./form.module.css";
import ParaText from "@/commonUl/ParaText";
import { Col, Row } from "antd";
import SecondaryButton from "@/commonUl/SecondaryButton";
import { HomeIcon } from "@heroicons/react/16/solid";
export default function BannerForm() {
  return (
    <>
      <div className={styles.bookYourVacation}>
        <ParaText size="medium" color="light" className={styles.bookYour}>
          Book your vacation
        </ParaText>
        <Row align="middle" gutter={16}>
          <Col lg={19} md={19} sm={19} xs={24}>
            <div className="formPart">
              <Row align="middle" gutter={16}>
                <Col lg={9} md={9} sm={9} xs={24}>
                  <Row align="middle">
                    <Col lg={16}>
                      <Row align="middle" className={styles.borderRight}>
                        <Col lg={4}>
                          <div className={styles.flex}>
                            <HomeIcon width={20} />
                          </div>
                        </Col>
                        <Col lg={20}>
                          <span> Hello</span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={5} md={5} sm={5} xs={24} className="textEnd">
            <SecondaryButton
              label="Find A Room"
              className={`mediumButton w100 ${styles.SubscribeButton}`}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
