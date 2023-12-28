
import LocationsCard from "@/commonUl/LocationsCard";
import { Col, Image, Row } from "antd";
import React from "react";
import styles from "./aboutPage.module.css";

import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import SecondaryButton from "@/commonUl/SecondaryButton";
import CollapsePanel from "@/commonUl/CollapsePanel";
import { FaWifi } from "react-icons/fa6";
export default function page() {
  return (
    <>
      <div className={styles.bannerPartAbout}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col xl={24} md={24} sm={24} xs={24} className="tabViewCenter">
              <Titles level={3} color="light">
                Enjoy the best <br /> moments of life.
              </Titles>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`mainGap ${styles.apartmentPart}`}>
        <div className="mainContainer">
          <Row gutter={16} className="marginBottomFour ">
            <Col xl={12} md={12} xs={24}>
              <div className="lineBox blue"></div>
              <Titles level={3} color="neutralColor">
                Apartment-like Hotel <br className="mobileViewNone" />
                Suites
              </Titles>
            </Col>

            <Col xl={12} md={12} xs={24}>
              <ParaText size="medium" color="dark">
                Welcome to Stayable - your home away from home. Our
                apartment-like hotel suites offer comfortable extended-stay
                options for travelers, professionals, families, and individuals.
                With fully equipped kitchens, comfortable living areas, and
                superior family-like service, we re more than just a typical
                hotel room.
              </ParaText>
              <div className="marginBottomThree"></div>
              <ParaText size="medium" color="dark">
                Our flexible booking options allow you to stay as long as you
                need, and our prime locations make it easy to explore and
                experience your destination. So, if you re looking for a
                convenient, comfortable, and affordable extended-stay option,
                look no further than Stayable. We can t wait to welcome you
                home.
              </ParaText>
            </Col>
          </Row>

          <div className={styles.imgOverlap}>
            <Row gutter={16}>
              <Col xl={16} md={16} xs={24} className="img100">
                <Image
                  src="/images/Rectangle-5.png"
                  alt="Mask Group"
                  className="img100"
                  width={500}
                  height={500}
                />
              </Col>

              <Col xl={8} md={8} xs={24} className="img100">
                <Image
                  src="/images/Rectangle-5.png"
                  alt="Mask Group"
                  className="img100"
                  width={500}
                  height={500}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={styles.beautyWorld}>
        <div className="mainContainer">
          <Row gutter={16}>
            <Col xl={2} md={2} xs={24}></Col>
            <Col xl={20} md={20} xs={24} className="textCenter">
              <Titles level={1} color="light">
                Prepare yourself & let’s explore the beauty of world.
              </Titles>
              <div className="marginBottomTwo"></div>
              <ParaText size="medium" color="light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </ParaText>
              <div className="marginBottomFive "></div>
              <SecondaryButton
                label="Explore Our Locations"
                className="largeButton "
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className={`largeGap ${styles.happyTours}`}>
        <div className="mainContainer">
          <Row align="middle" gutter={50}>
            <Col lg={12} md={24} xs={24} className="img100">
              <Image
                src="/images/Rectangle-5.png"
                alt="Mask Group"
                className="img100"
                width={500}
                height={800}
              />
            </Col>

            <Col lg={12} md={24} xs={24}>
              <div className="lineBox blue"></div>
              <Titles level={3} color="neutralColor">
                We will make you happy with our tours
              </Titles>
              <div className="marginBottomOne"></div>
              <ParaText size="small" color="neutralColor">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here , making it look like readable English.
              </ParaText>
              <div className="marginBottomThree"></div>
              <Row gutter={16}>
                <Col lg={12} md={12} sm={12} xs={24} className="marginTopTwo">
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
                          Easy booking, no long-term commitment, no credit
                          check, and one bill for all the essentials lets you
                          come and go on your time.
                        </ParaText>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={24} className="marginTopTwo">
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
                          Easy booking, no long-term commitment, no credit
                          check, and one bill for all the essentials lets you
                          come and go on your time.
                        </ParaText>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={12} md={12} sm={12} xs={24} className="marginTopTwo">
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
                          Easy booking, no long-term commitment, no credit
                          check, and one bill for all the essentials lets you
                          come and go on your time.
                        </ParaText>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={12} md={12} sm={12} xs={24} className="marginTopTwo">
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
                          Easy booking, no long-term commitment, no credit
                          check, and one bill for all the essentials lets you
                          come and go on your time.
                        </ParaText>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`mainGap ${styles.faqPart}`}>
        <div className="mainContainer">
          <Titles level={3} color="neutralColor" className="textCenter">
            Frequently Asked Questions
          </Titles>{" "}
          <div className="marginBottomFour"></div>
          <CollapsePanel />
        </div>
      </div>
    </>
  );
}
