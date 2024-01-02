"use client";
import { Col, Divider, Image, Row } from "antd";
import React from "react";
import "./traveler-details.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";
import { Input } from "antd";
import ShowImage from "@/commonUl/ShowImage";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FiHome } from "react-icons/fi";
const { TextArea } = Input;
export default function page() {
  return (
    <>
      <div className="formPart">
        <div className="mainContainer">
          <Divider />
          <Row gutter={14}>
            <Col lg={12} md={24} xs={24}>
              <div className="formCenter backgroundWhite">
                <div className="cardForm">
                  <div className="lineBox blue"></div>
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
                    <label className="extraSmall flexContainer align">
                      <input type="checkbox" className="checkBox" /> &nbsp;
                      <a href="#">I’m booking for someone else.</a>
                    </label>
                    <div className="marginTopThree"></div>
                    <Titles level={5} color="neutralColor">
                      Any special requests or query
                    </Titles>
                    <div className="marginTopThree"></div>
                    <ParaText size="medium" color="mediumDark">
                      Add your special request or query here
                    </ParaText>
                    <div className="marginTopOne"></div>
                    <TextArea
                      rows={10}
                      placeholder="Write a text"
                      maxLength={6}
                      className="textArea"
                    />

                    <div className="marginTopThree"></div>
                    <SecondaryButton
                      label="Continue"
                      className="largeButton w100"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={24} xs={24}>
              <div className="formCenter">
                <div className="cardForm">
                  <ShowImage size={100} src="/images/card/card.png" />
                  <div className="mainCard">
                    <div className="lineBox blue"></div>
                    <Titles level={5} color="neutralColor">
                      5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head
                      Galnesville
                    </Titles>
                    <div className="marginTopTwo"></div>
                    <div className="dayDiamond">
                      <p className="flexDays">
                        <span>
                          <MdOutlineDateRange
                            style={{ color: "#4F4F4F", marginRight: "10px" }}
                          />
                          Dec 28, 2023 - Jan 5, 2024
                        </span>
                        <span>5 days/4 nights</span>
                      </p>
                    </div>
                    <p className="flexDays">
                      <span>
                        <FaUserGroup
                          style={{ color: "#4F4F4F", marginRight: "10px" }}
                        />
                        Adults 2, Children 1
                      </span>
                    </p>
                    <p className="flexDays">
                      <span>
                        <FiHome
                          style={{ color: "#4F4F4F", marginRight: "10px" }}
                        />
                        King type
                      </span>
                    </p>
                    <Divider className="dased" />
                    <p className="flexDays">
                      <span>
                        <FaUserGroup
                          style={{ color: "#4F4F4F", marginRight: "10px" }}
                        />
                        Adults 2, Children 1
                      </span>
                    </p>
                    <p className="flexDays">
                      <span>
                        <FiHome
                          style={{ color: "#4F4F4F", marginRight: "10px" }}
                        />
                        King type
                      </span>
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
