"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import styles from "./locations.module.css";
import Titles from "@/commonUl/Titles";
import DestinationsCard from "@/commonUl/destinationsCard";
import OurTestimonial from "@/components/Public/ourTestimonial";
import ParaText from "@/commonUl/ParaText";
import OffersCard from "@/commonUl/offersCard";
import ViewAll from "@/components/Public/ViewAll";
export default function page() {
  return (
    <>
      <div className={styles.bannerPartLocations}>
        <div className="mainContainer">
          <Row gutter={16}>
            <Col xl={8} md={24} sm={24} xs={24} className="tabViewCenter">
              <Titles level={3} color="light">
                Enjoy the best moments of
                <span className="yellowText"> life.</span>
              </Titles>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`largeGap ${styles.travelDestinations}`}>
        <div className="mainContainer">
          <div className="lineBox blue"></div>
          <Titles level={3} color="neutralColor">
            Travel’s The Perfect Destinations
          </Titles>
          <div className="marginBottomFive "></div>

          <Row align="middle" gutter={16}>
            <Col lg={8} md={8} sm={8} xs={24} className="marginBottomFive">
              <DestinationsCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="marginBottomFive">
              <DestinationsCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="marginBottomFive">
              <DestinationsCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="marginBottomFive">
              <DestinationsCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="marginBottomFive">
              <DestinationsCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="marginBottomFive">
              <DestinationsCard />
            </Col>
          </Row>
        </div>
      </div>

      <div className={`textCenter ${styles.enjoySummer}`}>
        <div className={styles.summer}>
          <div className="mainContainer">
            <Row>
              <Col lg={3} md={3} sm={3} xs={24}></Col>
              <Col lg={18} md={8} sm={8} xs={24}>
                <Titles level={3} className="darkSlateBlue">
                  Enjoy Summer Deals
                </Titles>
                <div className="marginTopOne"></div>
                <Titles level={1} color="neutralColor">
                  Upto 40% Discount
                </Titles>
                <div className="marginTopTwo"></div>
                <ParaText size="small" color="neutralColor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </ParaText>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={`largeGap ${styles.travelDestinations}`}>
        <div className="mainContainer">
          <div className="lineBox blue"></div>
          <Titles level={3} color="neutralColor">
            Todays Top Offers
          </Titles>
          <div className="marginBottomFive"></div>
          <Row align="middle" gutter={30}>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OffersCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OffersCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OffersCard />
            </Col>
          </Row>
        </div>
      </div>

      <div className={`largeGap ${styles.trendingTours}`}>
        <div className="mainContainer">
          <div className="lineBox blue"></div>
          <Row align="middle" gutter={16}>
            <Col lg={18} md={18} sm={18} xs={16}>
              <Titles level={3} color="neutralColor">
                Todays Top Offers
              </Titles>
            </Col>
            <Col lg={6} md={6} sm={6} xs={8} className="textEnd">
              <ViewAll />
            </Col>
          </Row>
          <div className="marginBottomFive"></div>
          <Row align="middle" gutter={30}>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OffersCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OffersCard />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OffersCard />
            </Col>
          </Row>
        </div>
      </div>

      <div className={`largeGap ${styles.ourTestimonial}`}>
        <div className="mainContainer">
          <center>
            <div className="lineBox blue"></div>
            <Titles level={3} color="neutralColor">
              What people say about us
            </Titles>
          </center>
          <div className="marginBottomFive "></div>
          <Row gutter={30}>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OurTestimonial />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OurTestimonial />
            </Col>
            <Col lg={8} md={8} sm={8} xs={24} className="tabMarginTopTwo">
              <OurTestimonial />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
