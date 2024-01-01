"use client";
import React from "react";
import styles from "./topBar.module.css";
import { Col, Image, Row } from "antd";
import FormInput from "../FormInput";
import { GoSearch } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Link from "antd/es/typography/Link";

export default function TopBar() {
  return (
    <>
      <div className={styles.topBar}>
        <Row align="middle" gutter={16}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Image
              src="/images/logodash.png"
              alt="about-us"
              className="img100"
              width={179}
              height={60}
            />
          </Col>
          <Col lg={9} md={9} sm={24} xs={24} className="textCenter">
            <FormInput
              placeHolder="Search for jobs, companies or location"
              prefix={<GoSearch color="#191919" />}
              className="modalInput"
            />
          </Col>
          <Col lg={3} md={3} sm={24} xs={8}>
            <Row align="middle" gutter={16}>
              <Col lg={8} md={8} sm={8} xs={8}>
                <Link href="#">
                  <div className={styles.bell}>
                    <FaRegBell />
                  </div>
                </Link>
              </Col>
              <Col lg={8} md={8} sm={8} xs={8} className="textCenter">
                <div className="borderRadius100">
                  <Image
                    src="/images/user.png"
                    alt="about-us"
                    className="img100"
                    width={40}
                    height={40}
                  />
                </div>
              </Col>
              <Col lg={8} md={8} sm={8} xs={8} className="textCenter">
                <Link href="#">
                  <div className={styles.drop}>
                    <HiDotsVertical />
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
