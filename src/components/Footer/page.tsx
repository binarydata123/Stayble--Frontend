"use client";
import React from "react";
import styles from "./footer.module.css";
import { Col, Row } from "antd";
import Titles from "../../commonUl/Titles";
import ParaText from "../../commonUl/ParaText";
import Link from "next/link";
import { FaFacebook, FaGooglePlus } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";

export default function Footer() {
  return (
    <>
      <div className={styles.footerPart} id="footerPart">
        <div className="mainContainer">
          <div className={styles.followUs}>
            <Row gutter={40}>
              <Col lg={6} md={12} xs={24}>
                <Image
                  src="/images/footerLogo.png"
                  alt="Footer Logo"
                  width={215}
                  height={65}
                />
                <div className="marginTopTwo"></div>
                <ParaText size="small" color="light">
                  All hotels and vacation rental properties listed on this
                  website are independently owned and operated. Accepted payment
                  methods
                </ParaText>
                <div className="marginTopTwo"></div>

                <ParaText size="large" color="light">
                  Phone Support
                </ParaText>
                <div className="tabMarginTopOne"></div>
                <Titles level={4} color="light">
                  001-123 456 7890
                </Titles>
              </Col>
              <Col lg={6} md={12} xs={24} className="mobileMarginTopThree">
                <ParaText size="large" color="light">
                  <b>Our Locations</b>
                </ParaText>
                <div className="marginTopFive tabMarginTopTwo"></div>
                <ul className={styles.footerLinks}>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Gainesville{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Jacksonville North{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Jacksonville West{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Lakeland{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Orlando{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Kissimmee East{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Kissimmee West{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> St. Augustine{" "}
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={6} md={12} xs={24} className="tabMarginTopThree">
                <ParaText size="large" color="light">
                  <b>Quick Links</b>
                </ParaText>
                <div className="marginTopFive tabMarginTopTwo"></div>
                <ul className={styles.footerLinks}>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Offers
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Contact us
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Rules & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaChevronRight /> Online Brochure
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={6} md={12} xs={24} className="tabMarginTopThree">
                <ParaText size="large" color="light">
                  <b>Newsletter Signup</b>
                </ParaText>
                <div className="marginTopFive tabMarginTopTwo"></div>
                <ParaText size="small" color="light">
                  All hotels and vacation rental properties listed on this
                  website.
                </ParaText>
                <div className="marginTopThree"></div>
                <FormInput placeHolder="Enter Email address" />
                <div className="marginTopTwo"></div>
                <SecondaryButton label="SUBMIT" className="w100" />
              </Col>
            </Row>
          </div>
          <div className={styles.ftPart}>
            <Row
              align="middle"
              gutter={16}
              className="marginTopOne mobileMarginTopThree"
            >
              <Col lg={12} md={12} sm={12} xs={24} className="mobileCenter">
                <ParaText size="extraSmall" color="light">
                  ©2023 All Rights Reserved
                </ParaText>
                <br />
              </Col>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={24}
                className="mobileMarginTopOne textEnd mobileViewLeft"
              >
                <div className="dFlex align">
                  <ParaText size="small" color="light">
                    Follow us
                  </ParaText>
                  <ul className={styles.footerSocialMediaLiks}>
                    <li>
                      <Link href="#">
                        <FaFacebook />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <BsLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaGooglePlus />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <br className="mobileNone" />
          </div>
        </div>
      </div>
    </>
  );
}
