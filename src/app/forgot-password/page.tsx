"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import "./forgotPassword.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";
import { LuArrowLeft } from "react-icons/lu";

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
                    <div className="width80 heightUnset ">
                      <Image
                        src="/images/Padlock.png"
                        alt="Footer Logo"
                        width={630}
                        height={661}
                      />
                    </div>
                    <div className="marginTopFour"></div>

                    <Titles level={5} color="yellowText">
                      Build your better <br className="mobileNone" /> customer
                      experience
                    </Titles>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} xs={24}>
              <div className="formCenter backgroundWhite">
                <div className="cardForm">
                  <Titles level={3} color="neutralColor">
                    Forgot Password
                  </Titles>
                  <div className="marginTopTwo"></div>
                  <ParaText size="small" color="dark">
                    No worries, We will send you reset instructios.
                  </ParaText>

                  <div className="marginTopFive">
                    <label>Enter email address </label>
                    <FormInput placeHolder="Enter your Email Address " />

                    <div className="marginTopThree"></div>
                    <SecondaryButton label="LOGIN" className="w100" />

                    <div className="marginTopTwo"></div>
                    <div className="textCenter">
                      <Link href="#">
                        <ParaText size="small" color="dark">
                          <LuArrowLeft /> Back to login
                        </ParaText>
                      </Link>
                    </div>
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
