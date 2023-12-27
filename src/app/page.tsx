import Titles from "@/commonUl/Titles";
import Image from "next/image";
import { Col, Row } from "antd";
import React from "react";
import ParaText from "@/commonUl/ParaText";
import LocationsCard from "@/components/Public/LocationsCard";
import SecondaryButton from "@/commonUl/SecondaryButton";
import styles from "./homePage.module.css";
import CollapsePanel from "@/commonUl/CollapsePanel";
import ViewAll from "@/components/Public/ViewAll";
import Numscroller from "@/components/Public/Numberscroller";
import EmailFiled from "@/components/Public/emailFiled/page";
import CardLocations from "@/components/Public/CardLocations/page";
import FreedomCard from "@/components/Public/FreedomCard";
import NewsLatest from "@/components/Public/NewsLatest/page";

export default function Home() {
  return (
    <>
      <div className={styles.bannerPart}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col xl={10} md={24} sm={24} xs={24} className="tabViewCenter">
              <Titles level={1} color="light">
                Flexible. Affordable. <span className="yellowText">Home</span>
              </Titles>
              <br />
              <Titles
                level={5}
                color="light"
                className="weight400 mobileViewNone"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Titles>
            </Col>
          </Row>
          <div className={styles.bookYourVacation}>
            <ParaText size="medium" color="light" className={styles.bookYour}>
              {" "}
              Book your vacation
            </ParaText>
            <Row align="middle" gutter={16}>
              <Col lg={19} md={24} sm={19} xs={24}>
                <div className="formPart">
                  <Row align="middle" gutter={16}>
                    <Col lg={9} md={9} xs={24}>
                      {" "}
                      xaxax
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={5} md={24} xs={24} className="textEnd tabMarginTopTwo">
                <SecondaryButton
                  label="Find A Room"
                  className={`mediumButton w100 ${styles.SubscribeButton}`}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={`mainGap ${styles.exploreLocations}`}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col lg={18} md={18} sm={18} xs={16}>
              <Titles level={2} color="neutralColor">
                {" "}
                Explore Our Locations
              </Titles>
            </Col>
            <Col lg={6} md={6} sm={6} xs={8} className="textEnd">
              <ViewAll />
            </Col>
          </Row>
          <br />
          <br />
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

      <div className="about mainGap">
        <div className="mainContainer">
          <Row gutter={16}>
            <Col lg={12} md={24} xs={24}>
              <div className="textCenter">
                <Titles level={2} color="neutralColor">
                  About Us
                </Titles>
                <div className="marginBottomTwo"></div>
                <ParaText size="medium" color="dark">
                  {" "}
                  Clean, spacious suites. Affordable prices. Flexible options.
                  The reasons to stay are endless. Whether re staying a week, a
                  month or longer, our apartment suites are designed to provide
                  all of the comforts of home. From full-sized refrigerators to
                  free Wi-Fi, our convenient Florida locations provide all of
                  the practical amenities you need, allowing you to not miss a
                  beat.
                </ParaText>
                <div className="marginBottomThree"></div>
                <Numscroller />
              </div>
            </Col>
            <Col lg={12} md={24} xs={24} className="textEnd tabMarginTopTwo">
              <Image
                src="/images/about-us.png"
                alt="about-us"
                className="img100"
                width={500}
                height={500}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.stayConnect}>
        <div className="mainContainer">
          <Row>
            <Col lg={12} md={24} xs={24} className="tabViewCenter">
              <div className="lineBox"></div>
              <Titles level={2} color="light">
                Stay Connected With Us For New Offers
              </Titles>
              <div className="marginBottomTwo"></div>
              <ParaText size="large" color="light">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </ParaText>
              <div className="marginBottomThree"></div>
              <Row align="middle" gutter={16}>
                <Col lg={18} md={24} xs={24}>
                  <EmailFiled />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className="stayRecommended mainGap">
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col lg={18} md={18} xs={16}>
              <Titles level={2} color="neutralColor">
                {" "}
                Stay We Recommended
              </Titles>
            </Col>
            <Col lg={6} md={6} xs={8} className="textEnd">
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

      <div className={`mainGap ${styles.freedom}`}>
        <div className="mainContainer">
          <Titles level={2} color="light">
            {" "}
            You Have the Freedom to <br className="mobileViewNone" /> Stay
            awhile...{" "}
          </Titles>
          <div className="marginBottomThree"></div>
          <Row align="middle" gutter={40}>
            <Col lg={8} md={8} sm={8} xs={24}>
              <FreedomCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="mobileMarginTopTwo">
              <FreedomCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="mobileMarginTopTwo">
              <FreedomCard />
            </Col>
          </Row>
        </div>
      </div>

      <div className="about mainGap tabPaddingBottomOne">
        <div className="mainContainer">
          <div className="marginBottomTwo"></div>
          <Row gutter={16}>
            <Col lg={3} md={3} sm={3} xs={24}>
              {" "}
            </Col>
            <Col lg={18} md={18} sm={18} xs={24}>
              <div className="textCenter">
                <Titles level={2} color="neutralColor">
                  {" "}
                  What People Says About Us{" "}
                </Titles>
                <div className="marginBottomTwo"></div>
                <ParaText size="medium" color="dark">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like PageMaker including versions
                  of Lorem Ipsum.
                </ParaText>
                <br />
              </div>
            </Col>
          </Row>
          <br />
        </div>
      </div>

      <div className="mainGap">
        <div className="mainContainer">
          <Titles level={2} color="neutralColor" className="textCenter">
            {" "}
            Check our Latest News{" "}
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
