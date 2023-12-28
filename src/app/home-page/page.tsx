import Titles from "@/commonUl/Titles";
import ViewAll from "@/commonUl/ViewAll";
import Image from "next/image";
import { Col, Row } from "antd";
import React from "react";
import ParaText from "@/commonUl/ParaText";
import LocationsCard from "@/commonUl/LocationsCard";
import Numscroller from "@/commonUl/Numscroller";
import SecondaryButton from "@/commonUl/SecondaryButton";
import EmailFiled from "@/commonUl/emailFiled/page";
import CardLocations from "@/commonUl/CardLocations/page";
import FreedomCard from "@/commonUl/FreedomCard";
import NewsLatest from "@/commonUl/NewsLatest/page";
import styles from "./homePage.module.css";
import CollapsePanel from "@/commonUl/CollapsePanel";
import FooterPart from "@/commonUl/FooterPart/page";
import HeaderMain from "@/commonUl/HeaderMain";
import SelectBoxFiled from "@/commonUl/SelectBoxFiled";
import { RiHomeLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div>
        <HeaderMain />
      </div>

      <div className={styles.bannerPart}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col lg={10} md={10} sm={10} xs={10}>
              <Titles level={1} color="light">
                {" "}
                Flexible. Affordable. <span className="yellowText">Home</span>
              </Titles>
              <br />
              <Titles level={5} color="light" className="weight400">
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
              <Col lg={19} md={19} sm={19} xs={24}>
                <div className="formPart">
                  <Row align="middle" gutter={16}>
                    <Col lg={9} md={9} sm={9} xs={24}>
                      <Row align="middle" gutter={16}>
                        <Col lg={3} md={3} sm={3} xs={3}>
                          <Titles level={4} color="light">
                            <RiHomeLine />
                          </Titles>
                        </Col>
                        <Col lg={21} md={21} sm={21} xs={21}>
                          <SelectBoxFiled />
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}>
                      ax
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={12}>
                      ax
                    </Col>
                    <Col lg={8} md={8} sm={8} xs={24}>
                      axa
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
        </div>
      </div>

      <div className="exploreLocations mainGap">
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col lg={18} md={18} sm={18} xs={18}>
              <Titles level={2} color="neutralColor">
                {" "}
                Explore Our Locations
              </Titles>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="textEnd">
              <ViewAll />
            </Col>
          </Row>
          <br />
          <br />
          <Row align="middle" gutter={16}>
            <Col lg={6} md={12} sm={6} xs={24}>
              <LocationsCard />
            </Col>
            <Col lg={6} md={12} sm={6} xs={24}>
              <LocationsCard />
            </Col>
            <Col lg={6} md={12} sm={6} xs={24}>
              <LocationsCard />
            </Col>
            <Col lg={6} md={12} sm={6} xs={24}>
              <LocationsCard />
            </Col>
          </Row>
        </div>
      </div>

      <div className="about mainGap">
        <div className="mainContainer">
          <Row gutter={16}>
            <Col lg={12} md={12} sm={12} xs={24}>
              <div className="textCenter">
                <Titles level={2} color="neutralColor">
                  {" "}
                  About Us
                </Titles>
                <br />
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
                <br />
                <br />
                <Numscroller />
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={24} className="textEnd">
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
            <Col lg={12} md={12} sm={12} xs={24}>
              <div className="lineBox"></div>
              <Titles level={2} color="light">
                Stay connected with us For new offers
              </Titles>
              <br />
              <ParaText size="large" color="light">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </ParaText>
              <br />
              <br />
              <br />
              <Row align="middle" gutter={16}>
                <Col lg={18} md={18} sm={18} xs={18}>
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
            <Col lg={18} md={18} sm={18} xs={18}>
              <Titles level={2} color="neutralColor">
                {" "}
                Stay We Recommended
              </Titles>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="textEnd">
              <ViewAll />
            </Col>
          </Row>
          <br />
          <br />

          <Row gutter={16}>
            <Col lg={14} md={14} sm={14} xs={24}>
              <CardLocations />
              <Row align="middle" gutter={16}>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <CardLocations />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
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
          <br />
          <br />
          <Row align="middle" gutter={40}>
            <Col lg={8} md={8} sm={8} xs={24}>
              <FreedomCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24}>
              <FreedomCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24}>
              <FreedomCard />
            </Col>
          </Row>
        </div>
      </div>

      <div className="about mainGap">
        <div className="mainContainer">
          <br />
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
                <br />
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
          <br />
          <br />

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
            {" "}
            Frequently Asked Questions
          </Titles>{" "}
          <br />
          <br />
          <CollapsePanel />
        </div>
      </div>

      <FooterPart />
    </>
  );
}
