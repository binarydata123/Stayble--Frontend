"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import "./signup.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="formPart">
        <div className="mainContainerFull">
          <Row gutter={40}>
            <Col lg={12} md={24} xs={24}>
              <div className="formCenter">
                <div className="leftCardForm">
                  <Image
                    src="/images/Logo.png"
                    alt="Footer Logo"
                    width={215}
                    height={76}
                  />
                  <div className="textCenter marginTopFour">
                    <div className="width80 heightUnset">
                      <Image
                        src="/images/image206.png"
                        alt="Footer Logo"
                        width={630}
                        height={661}
                      />
                    </div>
                    <div className="marginTopFour"></div>
                    <Titles level={6} color="yellowText">
                      Welcome To, Stayable
                    </Titles>
                    <div className="marginTopOne"></div>
                    <ParaText size="medium" color="light">
                      Signup for exclusive access
                    </ParaText>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} xs={24}>
              <div className="formCenter backgroundWhite">
                <div className="cardForm">
                  <Titles level={3} color="neutralColor">
                    Sign up
                  </Titles>

                  <div className="marginTopThree"></div>
                  <Row gutter={16} className="marginTopTwo">
                    <Col lg={12} md={12} sm={12} xs={24}>
                      <label>First Name</label>
                      <FormInput placeHolder="First Name" />
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={24}
                      className="mobileMarginTopTwo"
                    >
                      <label>Last Name</label>
                      <FormInput placeHolder="Last Name" />
                    </Col>
                  </Row>

                  <div className="marginTopThree">
                    <label>Email Address </label>
                    <FormInput placeHolder="Enter your Email Address " />
                    <div className="marginTopThree"></div>
                    <Row gutter={16} className="marginTopTwo">
                      <Col lg={12} md={12} sm={12} xs={24}>
                        <label>Password</label>
                        <FormInput placeHolder="First Name" />
                      </Col>
                      <Col
                        lg={12}
                        md={12}
                        sm={12}
                        xs={24}
                        className="mobileMarginTopTwo"
                      >
                        <label>Last Name</label>
                        <FormInput placeHolder="Last Name" />
                      </Col>
                    </Row>
                    <div className="marginTopTwo"></div>
                    <label className="extraSmall dFlex align">
                      <input type="checkbox" className="checkBox" /> &nbsp; I
                      agree to the Terms & Policy
                    </label>

                    <div className="marginTopThree"></div>
                    <SecondaryButton
                      label="SIGN UP"
                      className="largeButton w100"
                    />
                    <div className="marginTopThree"></div>
                    <div className="or">or</div>
                    <div className="marginTopThree"></div>
                    <Row align="middle" gutter={30}>
                      <Col lg={12} md={12} sm={12} xs={24}>
                        <Link href="#" className="ContinueButton">
                          <Image
                            src="/images/google.png"
                            alt="Footer Logo"
                            width={24}
                            height={24}
                          />{" "}
                          Continue With Google
                        </Link>
                      </Col>
                      <Col
                        lg={12}
                        md={12}
                        sm={12}
                        xs={24}
                        className="tabMarginTopTwo"
                      >
                        <Link href="#" className="ContinueButton">
                          <Image
                            src="/images/apple.png"
                            alt="Footer Logo"
                            width={24}
                            height={24}
                          />{" "}
                          Continue With Apple
                        </Link>
                      </Col>
                    </Row>
                    <div className="marginTopThree"></div>
                    <p className="linkText textCenter">
                      Don t you have an account? <Link href="#"> Sign up</Link>
                    </p>
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
