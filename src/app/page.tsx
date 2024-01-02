"use client";
import Titles from "@/commonUl/Titles";
import { Col, Row } from "antd";
import React from "react";
import ParaText from "@/commonUl/ParaText";
import LocationsCard from "@/commonUl/LocationsCard";
import styles from "./homePage.module.css";
import ViewAll from "@/components/Public/ViewAll";
import CardLocations from "@/components/Public/CardLocations/page";
import NewsLatest from "@/components/Public/NewsLatest/page";
import BannerForm from "@/components/Public/BannerForm";
import ShowImage from "@/commonUl/ShowImage";
import SecondaryButton from "@/commonUl/SecondaryButton";
import VerticalTabsHome from "@/components/Public/VerticalTabsHome";
export default function Home() {
  return (
    <>
      <div className={styles.bannerPart}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col
              xl={24}
              md={24}
              sm={24}
              xs={24}
              className="tabViewCenter textCenter"
            >
              <Titles level={1} color="light">
                Flexible. Affordable. <span className="yellowText">Home</span>
              </Titles>
              <br />
              <Titles
                level={5}
                color="light"
                className="mobileViewNone"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Titles>
            </Col>
          </Row>
          <BannerForm />
        </div>
      </div>
      <div className={`mainGap ${styles.exploreLocations}`}>
        <div className="stayRecommended mainGap">
          <div className="mainContainer">
            <Row align="middle" gutter={16}>
              <Col lg={18} md={18} sm={18} xs={16}>
                <div className="lineBox blue"></div>
                <Titles level={2} color="neutralColor">
                  Explore Our Locations
                </Titles>
              </Col>
              <Col lg={6} md={6} sm={6} xs={8} className="textEnd">
                <ViewAll />
              </Col>
            </Row>
            <br />
            <br />
            <Row gutter={16}>
              <Col lg={14} md={14} sm={14} xs={24}>
                <CardLocations />
                <Row align="middle" gutter={16}>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="ButtonNoneTabView"
                  >
                    <CardLocations />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="ButtonNoneTabView"
                  >
                    <CardLocations />
                  </Col>
                </Row>
              </Col>
              <Col lg={10} md={10} sm={10} xs={24}>
                <CardLocations />
                <CardLocations />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <section className={styles.bestQuality}>
        <div className="mainContainer">
          <Row gutter={16}>
            <Col lg={12} md={24} sm={24} xs={24}>
              <div className="lineBox blue"></div>
              <Titles level={2} color="neutralColor">
                Enjoy Complete and best <br /> quality Facilities
              </Titles>
              <ShowImage size={100} src="/images/home/circle.png" />
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <div className={styles.bestTitle}>
                <ParaText size="large" color="dark">
                  Clean, spacious suites. Affordable prices. Flexible options.
                  The reasons to stay are endless. Whether you re staying a
                  week, a month or longer, our apartment suites are designed to
                  provide all of the comforts of home.
                </ParaText>
                <br />
                <br />
                <div className={styles.freeWiFI}>
                  <Titles level={5} color="neutralColor">
                    01 Free Wi-Fi
                  </Titles>
                  <br />
                  <ParaText size="large" color="dark">
                    Clean, spacious suites. Affordable prices. Flexible options.
                    The reasons to stay are endless. Whether you re staying a
                    week, a month or longer, our apartment suites are designed
                    to provide all of the comforts of home.
                  </ParaText>
                </div>
                <br />
                <div className={styles.freeWiFI}>
                  <Titles level={5} color="neutralColor">
                    02 Housekeeping*
                  </Titles>
                  <br />
                  <ParaText size="large" color="dark">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </ParaText>
                </div>
                <br />
                <div className={styles.freeWiFI}>
                  <Titles level={5} color="neutralColor">
                    03 Swimming Pool
                  </Titles>
                  <br />
                  <ParaText size="large" color="dark">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </ParaText>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <div className={`mainGap ${styles.freedom}`}>
        <div className="mainContainer">
          <div className="lineBox blue yellowText"></div>
          <Titles level={2} color="light">
            You Have the Freedom to <br className="mobileViewNone" /> Stay
            awhile...{" "}
          </Titles>
          <div className="marginBottomThree marginTopTwo"></div>
          <Row align="middle" gutter={16}>
            <Col lg={6} md={12} sm={24} xs={24} className="marginBottomTwo">
              <LocationsCard />
            </Col>
            <Col lg={6} md={12} sm={24} xs={24} className="marginBottomTwo">
              <LocationsCard />
            </Col>
            <Col lg={6} md={12} sm={24} xs={24} className="marginBottomTwo">
              <LocationsCard />
            </Col>
            <Col lg={6} md={12} sm={24} xs={24} className="marginBottomTwo">
              <LocationsCard />
            </Col>
          </Row>
        </div>
      </div>

      <section className={styles.suitesNeeds}>
        <div className="mainContainer">
          <div className="lineBox blue"></div>
          <Row>
            <Col lg={8} md={24} sm={24} xs={24}>
              <Titles level={2} color="neutralColor">
                Suites that suit <br className="mobileViewNone" /> your needs
              </Titles>
              <br />
              <ParaText size="large" color="dark">
                Affordable and strategically located near shopping and dining,
                our suites deliver on comfort and convenience.
              </ParaText>
            </Col>
            <Col lg={8} md={24} sm={24} xs={24}>
              <ShowImage size={100} src="/images/home/image 8.png" />
            </Col>
            <Col lg={8} md={24} sm={24} xs={24}>
              <div className={styles.kingRoom}>
                <Titles level={5} color="neutralColor">
                  King Room
                </Titles>
                <br />
                <ParaText size="large" color="dark">
                  Comfortable king-size bed with fast and reliable wi-fi, work
                  station, flat-screen TV with expanded cable lineup,
                  refrigerator and microwave.
                </ParaText>
                <br />
                <br />
                <Titles level={5} color="neutralColor">
                  Double Room
                </Titles>
                <br />
                <ParaText size="large" color="dark">
                  Our comfortable Double Rooms are equipped with two full-sized
                  beds, fast wi-fi, work station, flat-screen TV with expanded
                  cable lineup, refrigerator and microwave.
                </ParaText>
                <br />
                <br />
                <Titles level={5} color="neutralColor">
                  Queen Room
                </Titles>
                <br />
                <ParaText size="large" color="dark">
                  Our comfortable Double Rooms are equipped with two full-sized
                  beds, fast wi-fi, work station, flat-screen TV with expanded
                  cable lineup, refrigerator and microwave.
                </ParaText>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className={styles.bookOnline}>
        <div className="mainContainer">
          <div className="lineBox blue yellowText"></div>
          <Row>
            <Col lg={12} md={12} sm={12} xs={24}>
              <Titles level={2} color="light">
                Book Online today and <br className="mobileViewNone" /> look
                forward to a our Now
              </Titles>
              <br />
              <ParaText size="large" color="light">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </ParaText>
              <br />
              <br />
              <br />
              <SecondaryButton label="View Offers" />
            </Col>
          </Row>
        </div>
      </section>
      <div className={styles.accordianStyle}>
        <div className="mainContainer">
          <Row justify="center">
            <Col lg={20} md={20} sm={20} xs={20}>
              <Titles level={3} color="blockgray">
                Frequently Asked Questions
              </Titles>
              <div className="marginBottomFour"></div>
              <VerticalTabsHome />
            </Col>
          </Row>
        </div>
      </div>
      <section className={styles.stayFiled}>
        <div className={`mainGap ${styles.freedom}`}>
          <div className="mainContainer">
            <div className="lineBox blue yellowText"></div>
            <Titles level={2} color="light">
              You Have the Freedom to <br className="mobileViewNone" /> Stay
              awhile...{" "}
            </Titles>
            <div className="marginBottomThree marginTopTwo"></div>
            <Row align="middle" gutter={16}>
              <Col lg={6} md={12} sm={6} xs={24} className="marginBottomTwo">
                <LocationsCard />
              </Col>
              <Col lg={6} md={12} sm={6} xs={24} className="marginBottomTwo">
                <LocationsCard />
              </Col>
              <Col lg={6} md={12} sm={6} xs={24} className="marginBottomTwo">
                <LocationsCard />
              </Col>
              <Col lg={6} md={12} sm={6} xs={24} className="marginBottomTwo">
                <LocationsCard />
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <div className={styles.bestQuality}>
        <div className="mainContainer">
          <div className="lineBox blue"></div>
          <Titles level={2} color="neutralColor">
            Check our Latest News
          </Titles>
          <div className="marginBottomThree"></div>
          <Row align="middle" gutter={30}>
            <Col lg={8} md={8} sm={8} xs={24}>
              <NewsLatest />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24}>
              <NewsLatest />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24}>
              <NewsLatest />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
