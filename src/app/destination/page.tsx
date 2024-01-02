"use client";
import { Col, Divider, Row } from "antd";
import React from "react";
import styles from "./destination.module.css";
import Titles from "@/commonUl/Titles";
import { FaRegHeart } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import RateStar from "@/commonUl/RateStar";
import Link from "next/link";
import { WiDayShowers } from "react-icons/wi";
import ParaText from "@/commonUl/ParaText";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import ShowImage from "@/commonUl/ShowImage";
import OffersCard from "@/commonUl/offersCard";
import Accordian from "@/commonUl/Accordian";
import ViewAll from "@/components/Public/ViewAll";
import OffersCardReveiw from "@/commonUl/offersCardReveiw";
import DatePickerDesign from "@/commonUl/DatePickerDesign";
import CounterPlus from "@/commonUl/CounterPlus";
import SelectCounter from "@/commonUl/SelectCounter";
import SecondaryButton from "@/commonUl/SecondaryButton";
import CheckBox from "@/commonUl/CheckBox";
export default function Destination() {
  return (
    <>
      <div className={styles.bannerblog}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col xl={24} md={24} sm={24} xs={24} className="tabViewCenter">
              <div className={`textLeft ${styles.blogTitle}`}>
                <Titles level={3} color="light" className="marginTopThree">
                  Enjoy the best moments <br /> of life in
                  <span className="yellowText">Galnesville.</span>
                </Titles>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <section>
        <div className="mainContainer">
          <div className={styles.destinationText}>
            <Row gutter={24}>
              <Col xl={16} md={16} sm={24} xs={24}>
                <Row align="middle" gutter={16}>
                  <Col xl={20} md={20} sm={20} xs={20}>
                    <div className="lineBox blue"></div>
                    <Titles
                      level={3}
                      color="neutralColor"
                      className={styles.fontSizeFourty}
                    >
                      5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head
                      Galnesville
                    </Titles>
                  </Col>
                  <Col xl={4} md={4} sm={24} xs={24}>
                    <div className="flex">
                      <div className={styles.heartBtn}>
                        <FaRegHeart />
                      </div>
                      <div className={styles.shareBtn}>
                        <LuShare2 />
                      </div>
                    </div>
                  </Col>
                </Row>
                <div
                  className="flex marginTopThree"
                  style={{ color: "#4F4F4F" }}
                >
                  <IoLocationOutline />
                  <span className={styles.marginLeft}>Jacksonville West -</span>
                  <Link
                    href="#"
                    className={`${styles.marginLeft} ${styles.marginRight}`}
                  >
                    View on map
                  </Link>
                  <RateStar />
                  <span className={styles.marginLeft}> (1,186 Reviews)</span>
                </div>

                <div className="marginTopThree">
                  <Row align="middle">
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row align="middle" className="marginTopTwo">
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row align="middle" className="marginTopTwo">
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={8} md={8} sm={8} xs={24}>
                      <Row align="middle">
                        <Col xl={2} md={2} sm={2} xs={2}>
                          <WiDayShowers />
                        </Col>
                        <Col xl={20} md={20} sm={20} xs={20}>
                          <ParaText size="small" color="paraGraf">
                            2 Days 1 Nights
                          </ParaText>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Divider />
                <div className="marginTopThree"></div>
                <ParaText color="colordark" size="small">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents.
                </ParaText>
                <div className="marginTopThree"></div>
                <ParaText color="colordark" size="small">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents.
                </ParaText>
                <Divider />
                <Row align="middle">
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <Titles level={5} color="blockgray">
                      Departure & Return Location
                    </Titles>
                  </Col>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <ParaText color="colordark" size="small">
                      John F.K. International Airport (Google Map)
                    </ParaText>
                  </Col>
                </Row>
                <Divider />
                <Row align="middle">
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <Titles level={5} color="blockgray">
                      Departure Time
                    </Titles>
                  </Col>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <ParaText color="colordark" size="small">
                      3 Hours Before Flight Time
                    </ParaText>
                  </Col>
                </Row>
                <Divider />
                <Row align="middle">
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <Titles level={5} color="blockgray">
                      Bedroom
                    </Titles>
                  </Col>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <ParaText color="colordark" size="small">
                      4 Bedrooms
                    </ParaText>
                  </Col>
                </Row>
                <Divider />
                <Row align="middle">
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <Titles level={5} color="blockgray">
                      Bathroom
                    </Titles>
                  </Col>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <ParaText color="colordark" size="small">
                      6 Bathrooms John F.K. International Airport (Google Map)
                    </ParaText>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <Titles level={5} color="blockgray">
                      Price Includes
                    </Titles>
                  </Col>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <FaCheck style={{ color: "#1877F2" }} />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Air fares
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <FaCheck style={{ color: "#1877F2" }} />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Tour Guide
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <FaCheck style={{ color: "#1877F2" }} />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Entrance Fees
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <FaCheck style={{ color: "#1877F2" }} />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Entrance Fees
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <FaCheck style={{ color: "#1877F2" }} />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        All transportation in destination location
                      </ParaText>
                    </div>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <Titles level={5} color="blockgray">
                      Price Excludes
                    </Titles>
                  </Col>
                  <Col xl={12} md={12} sm={12} xs={24}>
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <IoMdClose />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Guide Service Fee
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <IoMdClose />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Driver Service Fee
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <IoMdClose />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Any Private Expenses
                      </ParaText>
                    </div>
                    <br />
                    <div className="flex">
                      <span className={styles.marginRight}>
                        <IoMdClose />
                      </span>
                      <ParaText
                        color="colordark"
                        size="small"
                        className="marginLeft"
                      >
                        Any Private Expenses
                      </ParaText>
                    </div>
                  </Col>
                </Row>
                <Divider />
                <div className="marginTopThree"></div>
                <Titles level={5} color="blockgray">
                  What to Expect
                </Titles>
                <div className="marginTopOne"></div>
                <ParaText color="colordark" size="small">
                  Curabitur blandit tempus porttitor. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Cras mattis consectetur
                  purus sit amet fermentum. Etiam porta sem malesuada magna
                  mollis euismod. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </ParaText>
                <div className="marginTopThree"></div>
                <ParaText color="colordark" size="small">
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  Donec ullamcorper nulla non metus auctor fringilla.
                </ParaText>

                <div className="marginTopThree"></div>
                <Col xl={24} md={24} sm={24} xs={24}>
                  <div className="flex">
                    <span
                      className={styles.marginRight}
                      style={{ marginTop: "3px" }}
                    >
                      <FaRegCircleCheck />
                    </span>
                    <ParaText
                      color="colordark"
                      size="small"
                      className="marginLeft"
                    >
                      Ipsum Amet Mattis Pellentesque
                    </ParaText>
                  </div>
                  <div className="marginTopOne"></div>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                  <div className="flex">
                    <span
                      className={styles.marginRight}
                      style={{ marginTop: "3px" }}
                    >
                      <FaRegCircleCheck />
                    </span>
                    <ParaText
                      color="colordark"
                      size="small"
                      className="marginLeft"
                    >
                      Ultricies Vehicula Mollis Vestibulum Fringilla
                    </ParaText>
                  </div>
                  <div className="marginTopOne"></div>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                  <div className="flex">
                    <span
                      className={styles.marginRight}
                      style={{ marginTop: "3px" }}
                    >
                      <FaRegCircleCheck />
                    </span>
                    <ParaText
                      color="colordark"
                      size="small"
                      className="marginLeft"
                    >
                      Condimentum Sollicitudin Fusce Vestibulum Ultricies
                    </ParaText>
                  </div>
                  <div className="marginTopOne"></div>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                  <div className="flex">
                    <span
                      className={styles.marginRight}
                      style={{ marginTop: "3px" }}
                    >
                      <FaRegCircleCheck />
                    </span>
                    <ParaText
                      color="colordark"
                      size="small"
                      className="marginLeft"
                    >
                      Sollicitudin Consectetur Quam Ligula Vehicula
                    </ParaText>
                  </div>
                  <div className="marginTopOne"></div>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                  <div className="flex">
                    <span
                      className={styles.marginRight}
                      style={{ marginTop: "3px" }}
                    >
                      <FaRegCircleCheck />
                    </span>
                    <ParaText
                      color="colordark"
                      size="small"
                      className="marginLeft"
                    >
                      Cursus Pharetra Purus Porta Parturient
                    </ParaText>
                  </div>
                  <div className="marginTopOne"></div>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                  <div className="flex">
                    <span
                      className={styles.marginRight}
                      style={{ marginTop: "3px" }}
                    >
                      <FaRegCircleCheck />
                    </span>
                    <ParaText
                      color="colordark"
                      size="small"
                      className="marginLeft"
                    >
                      Risus Malesuada Tellus Porta Commodo
                    </ParaText>
                  </div>
                  <div className="marginTopOne"></div>
                </Col>
                <Divider />

                <ParaText size="medium" color="paraGraf">
                  Gallery
                </ParaText>
                <div className="marginTopOne"></div>
                <ShowImage src="/images/destination/gallery.png" size={100} />
                <br />
                <Divider />
                <div className="marginTopThree"></div>
                <Titles level={5} color="blockgray">
                  Itinerary
                </Titles>
                <div className="marginTopOne"></div>
                <ParaText color="colordark" size="small">
                  We have carefully planned out each day to give you the best
                  possible experience. From exploring historic landmarks to
                  tasting delicious local cuisine, each day is packed with
                  adventure and excitement. Join us as we take you on a journey
                  through some of the most fascinating destinations in the
                  world.
                </ParaText>
                <div className="marginTopTwo"></div>
                <Accordian />
              </Col>
              <Col xl={8} md={8} sm={24} xs={24}>
                <div className={styles.bookDestination}>
                  <Titles level={3} color="blockgray" className="textCenter">
                    Book your Destination
                  </Titles>
                  <Divider />
                  <Row align="middle">
                    <Col xl={12} md={12} sm={24} xs={24}>
                      <ParaText>Price</ParaText>
                      <Titles level={4} color="blockgray">
                        From
                      </Titles>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24} className="textEnd">
                      <Titles level={3} color="blockgray">
                        $480
                      </Titles>
                    </Col>
                  </Row>

                  <div className={styles.dateStyle}>
                    <ParaText size="large" color="neutralColor">
                      Date
                    </ParaText>
                    <DatePickerDesign />
                  </div>

                  <div className={styles.dateStyle}>
                    <Row align="middle">
                      <Col lg={12}>
                        <ParaText size="large" color="neutralColor">
                          Adults
                        </ParaText>
                        <br />
                        <ParaText color="colordark" size="extraSmall">
                          Over 18+ ($480)
                        </ParaText>
                      </Col>
                      <Col lg={12} className="textEnd">
                        <CounterPlus />
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.dateStyle}>
                    <Row align="middle">
                      <Col lg={12}>
                        <ParaText size="large" color="neutralColor">
                          Childern
                        </ParaText>
                        <br />
                        <ParaText color="colordark" size="extraSmall">
                          Over 18+ ($480)
                        </ParaText>
                      </Col>
                      <Col lg={12} className="textEnd">
                        <CounterPlus />
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.dateStyle}>
                    <Row align="middle">
                      <Col lg={24}>
                        <ParaText size="large" color="neutralColor">
                          Room
                        </ParaText>
                        <br />
                        <br />
                        <SelectCounter />
                      </Col>
                    </Row>
                  </div>
                  <br />
                  <br />
                  <Row align="middle">
                    <Col lg={24}>
                      <ParaText size="large" color="neutralColor">
                        Extra Services
                      </ParaText>
                      <br />
                      <ParaText color="colordark" size="extraSmall">
                        Add extra services on your reservation
                      </ParaText>
                    </Col>
                  </Row>
                  <br />

                  <CheckBox title="Health Insurance ($220)" />
                  <CheckBox title="Medical Insurance ($20)" />
                  <br />
                  <br />
                  <SecondaryButton
                    label="Book Your Destination Now"
                    className="w100"
                  />
                </div>
              </Col>
            </Row>
            <div className="largeGapTop">
              <div className="mainContainer">
                <div className="lineBox blue"></div>
                <Titles level={3} color="neutralColor">
                  Todays Top Offers
                </Titles>
                <div className="marginBottomFive"></div>
                <Row align="middle" gutter={30}>
                  <Col
                    lg={8}
                    md={12}
                    sm={8}
                    xs={24}
                    className="tabMarginTopTwo"
                  >
                    <OffersCard />
                  </Col>
                  <Col
                    lg={8}
                    md={12}
                    sm={8}
                    xs={24}
                    className="tabMarginTopTwo"
                  >
                    <OffersCard />
                  </Col>
                  <Col
                    lg={8}
                    md={12}
                    sm={8}
                    xs={24}
                    className="tabMarginTopTwo"
                  >
                    <OffersCard />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.travelDestinationsSection}>
        <div className="mainContainer">
          <div className="lineBox blue"></div>
          <Row align="middle" gutter={16}>
            <Col lg={18} md={18} sm={18} xs={16}>
              <Titles level={3} color="neutralColor">
                Recommended Hotels
              </Titles>
            </Col>
            <Col lg={6} md={6} sm={6} xs={8} className="textEnd">
              <ViewAll />
            </Col>
          </Row>
          <div className="marginBottomFive"></div>
          <Row align="middle" gutter={30}>
            <Col lg={8} md={12} sm={12} xs={24} className="tabMarginTopTwo">
              <OffersCardReveiw />
            </Col>
            <Col lg={8} md={12} sm={12} xs={24} className="tabMarginTopTwo">
              <OffersCardReveiw />
            </Col>
            <Col lg={8} md={12} sm={12} xs={24} className="tabMarginTopTwo">
              <OffersCardReveiw />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
