import { Col, Image, Row } from "antd";
import React from "react";
import styles from "./aboutPage.module.css";

import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
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

          <div>
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
    </>
  );
}
