import React from "react";
import styles from "./footer.module.css";
import { Col, Row } from "antd";
import Titles from "../../commonUl/Titles";
import ParaText from "../../commonUl/ParaText";
import Link from "next/link";
import { FaFacebook, FaGooglePlus } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className={styles.footerPart} id="footerPart">
        <div className={styles.followUs}>
          <div className="mainContainer">
            <Row align="middle" gutter={16}>
              <Col lg={7} md={7} sm={7} xs={24} className="mobileViewNone">
                <Titles level={4} color="light">
                  Follow Us
                </Titles>
              </Col>
              <Col lg={10} md={10} sm={10} xs={24}>
                <ParaText size="small" color="light">
                  Phone
                </ParaText>
                <div className="tabMarginTopOne"></div>
                <Titles level={4} color="light">
                  001-123 456 7890
                </Titles>
                <div className="tabMarginTopTwo"></div>
              </Col>
              <Col lg={7} md={7} sm={7} xs={24}>
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
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.ftPart}>
          <div className="mainContainer">
            <Row gutter={40}>
              <Col lg={7} md={7} sm={7} xs={24} className={styles.borderFooter}>
                <div className={styles.columGap}>
                  <Titles level={4} color="light">
                    Solutions
                  </Titles>
                  <ul className={styles.footerLiks}>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Gainesville{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Jacksonville North{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Jacksonville West{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Lakeland{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Orlando{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Kissimmee East{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Kissimmee West{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> St. Augustine{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col
                lg={10}
                md={10}
                sm={10}
                xs={24}
                className={styles.borderFooter}
              >
                <div className={styles.columGap} id="leftGap">
                  <Image
                    src="/images/footerLogo.png"
                    alt="Footer Logo"
                    width={275}
                    height={76}
                  />
                  <br />
                  <br />
                  <ParaText size="small" color="light">
                    <b className="weight900">
                      16145 Leone Drive <br />
                      Macomb, MI 48042
                    </b>
                  </ParaText>
                  <br />
                  <br />
                  <ParaText size="small" color="light">
                    Telephone: <b> 001-123 456 7890</b>
                  </ParaText>
                  <br />
                  <ParaText size="small" className="yellowText">
                    lorem@ipsum.com
                  </ParaText>
                </div>
              </Col>
              <Col lg={7} md={7} sm={7} xs={24}>
                <div className={styles.columGap} id="leftGap">
                  <Titles level={4} color="light">
                    Solutions
                  </Titles>
                  <ul className={styles.footerLiks}>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Gainesville{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Jacksonville North{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Jacksonville West{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Lakeland{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Orlando{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Kissimmee East{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> Kissimmee West{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FiArrowRightCircle /> St. Augustine{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.ftPart}>
          <div className="mainContainer smallGap">
            <Row align="middle" gutter={16}>
              <Col lg={12} md={12} sm={12} xs={24}>
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
                className="mobileMarginTopOne textEnd MobileViewLeft"
              >
                <ParaText size="extraSmall" color="light">
                  Privacy Policy | Site Map
                </ParaText>
                <br />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
