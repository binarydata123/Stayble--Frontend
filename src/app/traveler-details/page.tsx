"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import "./traveler-details.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="formPart">
        <div className="mainContainer">
          <Row gutter={40}>
            <Col lg={12} md={24} xs={24}>
              <div className="formCenter backgroundWhite">
                <div className="cardForm">
                  <Titles level={3} color="neutralColor">
                    traveler details
                  </Titles>

                  <div className="marginTopThree"></div>
                  <Row gutter={16} className="marginTopTwo">
                    <Col lg={24} md={24} sm={24} xs={24}>
                      <label>First Name</label>
                      <FormInput placeHolder="First Name" />
                    </Col>
                  </Row>

                  <div className="marginTopThree">
                    <label>Email Address </label>
                    <FormInput placeHolder="Enter your Email Address " />
                    <div className="marginTopTwo"></div>
                    <a href="#">
                      We will send your confirmation & travel guide here via
                      mail
                    </a>
                    <div className="marginTopThree"></div>
                    <Row gutter={16} className="marginTopTwo">
                      <Col lg={24} md={24} sm={24} xs={24}>
                        <label>Phone Number</label>
                        <FormInput placeHolder="123-456-7890" />
                      </Col>
                    </Row>
                    <div className="marginTopThree"></div>
                    <label className="extraSmall dFlex align">
                      <input type="checkbox" className="checkBox" /> &nbsp; I
                      agree to the Terms & Policy
                    </label>

                    <div className="marginTopThree"></div>
                    <SecondaryButton
                      label="Continue"
                      className="largeButton w100"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
