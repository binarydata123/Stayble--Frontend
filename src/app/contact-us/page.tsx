"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import styles from "./contactPage.module.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import FormInput from "@/commonUl/FormInput";
import ReviewTextarea from "@/components/Public/ReviewTextarea";
import SecondaryButton from "@/commonUl/SecondaryButton";
import GoogleMap from "@/components/Public/GoogleMap";
export default function page() {
  return (
    <>
      <div className={styles.bannerPartContact}>
        <div className="mainContainer">
          <Row gutter={16}>
            <Col xl={11} md={24} sm={24} xs={24} className="tabViewCenter">
              <Titles level={3} color="light">
                How Can we <span className="yellowText">Help</span>
              </Titles>
              <div className="marginTopOne"></div>
              <Titles level={4} color="light">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </Titles>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`largeGap ${styles.contactPart}`}>
        <div className="mainContainer">
          <Row gutter={40}>
            <Col lg={12} md={12} sm={12} xs={24}>
              <Row align="middle" gutter={16}>
                <Col lg={6} md={6} sm={6} xs={24}>
                  <div className="lineBox blue marginBottomNone"></div>
                </Col>
                <Col lg={18} md={18} sm={18} xs={24}>
                  <Titles level={3} color="neutralColor">
                    Contact us
                  </Titles>
                </Col>
              </Row>
              <div className="marginTopThree"></div>
              <ParaText size="small" className="redTextColor">
                <i>*Indicate Mandatory fields</i>
              </ParaText>
              <div className="marginTopThree">
                <label>Name*</label>
                <FormInput placeHolder="Enter your full name here" />

                <Row gutter={16} className="marginTopTwo">
                  <Col lg={12} md={12} sm={12} xs={24}>
                    <label>
                      Email Address <span className="redTextColor">*</span>
                    </label>
                    <FormInput placeHolder="Enter yoeg. 1235@xyz.com" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={24}>
                    <label>
                      Mobile no. <span className="redTextColor">*</span>
                    </label>
                    <FormInput placeHolder="Enter yoeg. 1235@xyz.com" />
                  </Col>
                </Row>

                <div className="marginTopTwo"></div>
                <label>
                  Contary <span className="redTextColor">*</span>
                </label>
                <FormInput placeHolder="Select" />
                <Row gutter={16} className="marginTopTwo">
                  <Col lg={12} md={12} sm={12} xs={24}>
                    <label>
                      Select State <span className="redTextColor">*</span>
                    </label>
                    <FormInput placeHolder="Select" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={24}>
                    <label>
                      Pin Code <span className="redTextColor">*</span>
                    </label>
                    <FormInput placeHolder="eg.000000" />
                  </Col>
                </Row>

                <div className="marginTopTwo"></div>
                <label>Address</label>
                <ReviewTextarea />

                <div className="marginTopTwo"></div>
                <label>Message/Issue *</label>
                <ReviewTextarea />

                <div className="marginTopTwo"></div>
                <SecondaryButton label="Submit Information" className="w100" />
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
              <div className={styles.googleMap}>
                <GoogleMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.544731897499!2d76.68959877557927!3d30.70308307459846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef45533cde3%3A0x6492bea79120e89a!2sBinary%20Data%20Private%20Limited!5e0!3m2!1sen!2sin!4v1703755455287!5m2!1sen!2sin"
                  width="100%"
                  height="600"
                />
              </div>
              <div className="marginTopTwo"></div>
              <ParaText size="medium">
                <b>Offices</b>
              </ParaText>
              <div className="marginTopTwo"></div>
              <ParaText size="medium">
                United States <br /> 500 5th Avenue Suite 400, NY 10110
              </ParaText>

              <div className="marginTopTwo"></div>
              <ParaText size="medium">
                United Kingdom <br /> High St, Bromley BR1 1DN
              </ParaText>

              <div className="marginTopTwo"></div>
              <ParaText size="medium">
                France <br />
                80 avenue des Terroirs de France, Paris
              </ParaText>

              <div className="marginTopTwo"></div>
              <ParaText size="small">
                <b>For Quick Inquiries</b>
              </ParaText>

              <div className="marginTopTwo"></div>
              <ParaText size="small">
                <b>
                  <Image
                    src="/images/Rectangle-5.png"
                    alt="Mask Group"
                    width={20}
                    height={20}
                  />
                  +44 0000000000
                </b>
              </ParaText>

              <div className="marginTopOne"></div>
              <ParaText size="small">
                <b>
                  <Image
                    src="/images/Rectangle-5.png"
                    alt="Mask Group"
                    width={20}
                    height={20}
                  />
                  +1 0000000000
                </b>
              </ParaText>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
