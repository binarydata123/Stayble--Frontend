"use client";
import { Col, Image, Input, Row } from "antd";
import React from "react";
import styles from "./blog.module.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import ShowImage from "@/commonUl/ShowImage";
import SecondaryButton from "@/commonUl/SecondaryButton";
import CheckBox from "@/commonUl/CheckBox";
import { FaTimeline } from "react-icons/fa6";
import { WiTime8 } from "react-icons/wi";
export default function SingleBlog() {
  return (
    <>
      <div className={styles.bannerblog}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col xl={24} md={24} sm={24} xs={24} className="tabViewCenter">
              <div className={`textLeft ${styles.blogTitle}`}>
                <Titles level={5} color="light" className="marginBottomThree">
                  10 Nov 2022
                </Titles>
                <br />
                <Titles level={3} color="light" className="marginTopThree">
                  It is a long established fact <br /> that a reader will
                  <span className="yellowText"> be distracted</span>
                </Titles>
                <div className="flex marginTopFive">
                  <Image src="/images/user.png" alt="" />
                  <ParaText
                    size="medium"
                    color="light"
                    className="paddingLeftTwenty"
                  >
                    George Costanza
                  </ParaText>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <section className="large">
        <div className="mainContainer">
          <Row gutter={16}>
            <Col xxl={16} xl={14} lg={16} md={16} sm={24} xs={24}>
              <div className={styles.singleBlog}>
                <Titles
                  level={5}
                  color="neutralColor"
                  className="marginBottomThree"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices dui diam arcu pharetra at laoreet pellentesque.
                  Imperdiet sit ut ornare nulla risus id fames nascetur urna.
                  Eros in neque tincidunt.
                </Titles>
                <br />
                <ParaText color="colordark" size="small">
                  Vel leo proin facilisis metus sit ut cursus sagittis. Diam
                  donec mus malesuada et ac vulputate. Aenean lacinia
                  suspendisse et mattis adipiscing id dictum commodo nunc.
                  Feugiat lorem cras ut cras enim neque, elit, facilisi
                  habitasse. Facilisis faucibus nunc congue urna diam. Vitae,
                  diam justo, massa, elit. In et nibh ut in diam tellus at
                  tellus diam.
                </ParaText>
                <div className={styles.article}>
                  <Titles level={4} color="neutralColor">
                    In this article
                  </Titles>
                  <ul className="marginRemove">
                    <li>How to travel without spending a dime</li>
                    <li>Get the most out of your credit card reward points</li>
                    <li>Why you don’t need more than 3 pieces of clothing</li>
                  </ul>
                </div>
                <ParaText color="colordark" size="small">
                  Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit
                  in ut erat in. Et nulla a magna amet, amet. Sodales malesuada
                  laoreet bibendum neque amet turpis non. Ac arcu lacus turpis
                  elementum imperdiet. Euismod purus, libero scelerisque vitae,
                  libero fermentum urna, nunc.
                </ParaText>
                <div className={styles.paddingFiftyTop}></div>
                <Titles level={4} color="neutralColor">
                  Research Your Destination
                </Titles>
                <br />
                <ParaText color="colordark" size="small">
                  Before embarking on your journey, take the time to research
                  your destination. This includes understanding the local
                  culture, customs, and laws, as well as identifying top
                  attractions, restaurants, and accommodations. Doing so will
                  help you navigate your destination with confidence and avoid
                  any cultural faux pas.
                </ParaText>
                <div className={styles.paddingFiftyTop}></div>
                <ParaText color="colordark" size="small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                  Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                  Aenean euismod elementum nisi quis eleifend quam adipiscing
                  vitae. Viverra adipiscing at in tellus.
                </ParaText>

                <Row
                  gutter={16}
                  className={`${styles.paddingFiftyTop} ${styles.paddingFiftyBottom}`}
                >
                  <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <ShowImage
                      src="/images/card/blog.png"
                      alt="post new"
                      size={100}
                    />
                  </Col>
                  <Col
                    xxl={12}
                    xl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    className={styles.mobileView}
                  >
                    <ShowImage
                      src="/images/card/blogtwo.png"
                      alt="post new"
                      size={100}
                    />
                  </Col>
                </Row>
                <Titles level={4} color="neutralColor">
                  How to travel without spending a dime
                </Titles>
                <br />
                <ParaText color="colordark" size="small">
                  Dignissim lacus sit congue lacus aliquam. Ut non fermentum
                  vulputate donec enim sed ornare scelerisque. Sollicitudin orci
                  leo egestas fermentum platea a imperdiet nisl. Velit placerat
                  nibh nisl ut feugiat. Egestas id egestas nunc mattis. Sed
                  mauris vitae commodo pharetra, vestibulum rhoncus natoque.
                </ParaText>
                <br />
                <ParaText color="colordark" size="small">
                  Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam
                  mauris etiam nibh maecenas nibh interdum mauris suspendisse.
                  Volutpat, enim interdum facilisi mauris vitae id. Vel
                  malesuada sit etiam dolor. Ullamcorper habitant vitae, nec
                  pretium ullamcorper viverra integer praesent tincidunt. At
                  erat sagittis tellus ultricies in a.
                </ParaText>
                <div className={styles.paddingFiftyTop}></div>
                <Titles level={4} color="neutralColor">
                  Get the most out of your credit card reward points
                </Titles>
                <div className={styles.paddingFiftyTopSmall}></div>
                <ParaText color="colordark" size="small">
                  Massa, libero morbi morbi sed non sed. In et neque lectus
                  ultricies leo eros. Auctor in elementum accumsan malesuada
                  gravida neque cursus pellentesque nunc. Dui nullam odio neque
                  varius massa praesent. Neque, porta vel, morbi nulla at
                  tincidunt. Neque, et ultrices duis fermentum, tincidunt sem
                  sed. Erat accumsan dui enim nisl morbi feugiat.esent
                  tincidunt. At erat sagittis tellus ultricies in a.
                </ParaText>
                <br />
                <ParaText color="colordark" size="small">
                  Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu
                  sed. Nibh non semper amet sit hac tristique orci. Quis velit
                  vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed
                  ipsum, lacinia in sit vitae. Duis luctus convallis risus purus
                  sollicitudin purus id eu. Faucibus mattis eget ullamcorper eu
                  suspendisse elit elit lacus purus. Tortor felis.
                </ParaText>
                <div className={styles.paddingFiftyTop}></div>
                <Titles level={4} color="neutralColor">
                  Why you don’t need more than 3 pieces of clothing
                </Titles>
                <div className={styles.paddingFiftyTopSmall}></div>
                <ParaText color="colordark" size="small">
                  Massa aenean cursus nulla urna dui, fermentum cursus in
                  facilisis. Vulputate euismod vestibulum dolor in elementum
                  quis quis. Erat proin in eget arcu tellus ut ultrices. Quis
                  maecenas ullamcorper ante sit leo placerat. Quisque dictum
                  laoreet eget quam leo tortor scelerisque sit nullam. Lacus,
                  tortor, aenean mattis lobortis lacinia mauris. Viverra nulla.
                </ParaText>
                <div className={styles.paddingFiftyTopSmall}></div>
                <ParaText color="colordark" size="small">
                  Sed pellentesque quam lorem urna. Mauris donec molestie eget
                  massa pellentesque facilisis netus mauris. Magna eget eget
                  sollicitudin at faucibus odio. At augue sit nisi et metus cras
                  dignissim vel, tortor. Maecenas molestie consequat cursus
                  posuere ultrices facilisis hac bibendum semper. Sed lorem vel
                  donec proin. Volutpat aliquet rhoncus sit et.
                </ParaText>
                <div className={styles.paddingFiftyTopSmall}></div>
                <div className={` ${styles.article} ${styles.italic}`}>
                  <Titles level={5}>
                    “ Traveling can expose you to new environments and potential
                    health risks, so it s crucial to take precautions to stay
                    safe and healthy. ”
                  </Titles>
                </div>
                <div className={styles.paddingFiftyTopSmall}></div>
                <ShowImage
                  size={100}
                  src="/images/image-full.png"
                  alt="full image"
                />
                <div className={styles.paddingFiftyTop}></div>
                <Titles level={3} color="neutralColor">
                  Keep reading
                </Titles>
                <div className={styles.paddingFiftyTop}></div>
                <Row gutter={24}>
                  <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <div className={styles.blogTitle}>
                      <ShowImage
                        size={100}
                        src="/images/card/blogCard.png"
                        alt="full image"
                      />
                    </div>
                  </Col>
                  <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                    <div className={styles.blogTitle}>
                      <Titles level={5} color="neutralColor">
                        Why you don’t need more than 3 pieces of clothing
                      </Titles>
                      <ParaText size="small" color="colordark">
                        Et vitae, mollis euismod lobortis blandit amet sed amet.
                        Amet ut amet nisl tortor arcu non id nulla mauris neque
                        nisl magna.
                      </ParaText>
                    </div>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <div className={styles.blogTitle}>
                      <ShowImage
                        size={100}
                        src="/images/card/blogCardTwo.png"
                        alt="full image"
                      />
                    </div>
                  </Col>
                  <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                    <div className={styles.blogTitle}>
                      <Titles level={5} color="neutralColor">
                        Why you should cook with your family together everyday
                      </Titles>
                      <ParaText size="small" color="colordark">
                        Rutrum aliquet eros semper nunc. In adipiscing augue
                        sagittis, fermentum donec nunc lacinia. Risus in egestas
                        in orci quam.
                      </ParaText>
                    </div>
                  </Col>
                </Row>
                <div className={styles.paddingFiftyTopSmall}></div>
                <div className={styles.article}>
                  <Row align="middle">
                    <Col xxl={4} xl={4} lg={4} md={4} sm={24} xs={24}>
                      <div className={styles.blogTitle}>
                        <ShowImage
                          size="small"
                          src="/images/card/circle.png"
                          alt="full image"
                        />
                      </div>
                    </Col>
                    <Col xxl={20} xl={20} lg={20} md={20} sm={24} xs={24}>
                      <Titles level={4} color="neutralColor">
                        Written by George Costanza
                      </Titles>
                      <ParaText size="small" color="paraGraf">
                        Volutpat cursus id id tincidunt duis id. Urna curabitur
                        ultrices molestie bibendum. Purus orci nisl, commodo
                        ipsum, ut urna, elementum. Nunc potenti lectus in erat
                        ligula cras. Eget.
                      </ParaText>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
              <div className={styles.latestBlog}>
                <ParaText size="medium" color="neutralColor">
                  Subscription Subscribe to our newsletter and receive a
                  selection of cool articles every weeks
                </ParaText>
                <div className={styles.paddingFiftyTopSmall}></div>
                <Input
                  placeholder="Enter your email"
                  style={{
                    height: "60px",
                    borderRadius: "4px",
                    border: "1px solid #CECECE;",
                  }}
                />
                <SecondaryButton
                  label="SUBSCRIBE"
                  className={styles.subscriberBtn}
                />
                <div className={styles.paddingFiftyTopSmall}></div>
                <CheckBox
                  title="By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
"
                />
                <div className={styles.paddingFiftyTopSmall}></div>
                <div className={styles.theLatest}>
                  <Titles level={5} color="neutralColor">
                    The Latest
                  </Titles>
                  <div className={styles.theLatestText}>
                    <br />
                    <ShowImage size={100} src="/images/icon/bgImage.png" />
                    <div className={styles.overLayText}>
                      <ParaText
                        size="medium"
                        color="light"
                        className="weight600"
                      >
                        10 Habits That Will Change Your Live for the Better If
                        envy and jealousy are impacting your friendships
                      </ParaText>
                    </div>
                    <div className={styles.overLayTextSecond}>
                      <ParaText
                        size="extraSmall"
                        color="light"
                        className="flex"
                      >
                        <span className={styles.date}> June 21,2022</span>
                        <span className={styles.line}></span>
                        <WiTime8 style={{ margin: "0px 10px" }} />
                        <span className={styles.time}>2 minute read</span>
                      </ParaText>
                    </div>
                  </div>

                  <div className={styles.paddingLeftTwenty}>
                    <div className={styles.paddingFiftyTopSmall}></div>
                    <ParaText
                      size="medium"
                      color="neutralColor"
                      className="weight600"
                    >
                      10 Habits That Will Change Your Live for the Better If
                      envy and jealousy are impacting your friendships
                    </ParaText>
                    <div className={styles.paddingFiftyTopSmall}></div>
                    <ParaText
                      size="extraSmall"
                      color="colordark"
                      className="flex weight600"
                    >
                      <span className={styles.date}> June 21,2022</span>
                      <span className={styles.line1}></span>
                      <WiTime8 style={{ margin: "0px 10px" }} />
                      <span className={styles.time}>2 minute read</span>
                    </ParaText>
                    <div className={styles.paddingFiftyTopSmall}></div>
                    <ParaText
                      size="medium"
                      color="neutralColor"
                      className="weight600"
                    >
                      10 Habits That Will Change Your Live for the Better If
                      envy and jealousy are impacting your friendships
                    </ParaText>
                    <div className={styles.paddingFiftyTopSmall}></div>
                    <ParaText
                      size="extraSmall"
                      color="colordark"
                      className="flex weight600"
                    >
                      <span className={styles.date}> June 21,2022</span>
                      <span className={styles.line1}></span>
                      <WiTime8 style={{ margin: "0px 10px" }} />
                      <span className={styles.time}>2 minute read</span>
                    </ParaText>
                    <div className={styles.paddingFiftyTopSmall}></div>
                    <ParaText
                      size="medium"
                      color="neutralColor"
                      className="weight600"
                    >
                      10 Habits That Will Change Your Live for the Better If
                      envy and jealousy are impacting your friendships
                    </ParaText>
                    <div className={styles.paddingFiftyTopSmall}></div>
                    <ParaText
                      size="extraSmall"
                      color="colordark"
                      className="flex weight600"
                    >
                      <span className={styles.date}> June 21,2022</span>
                      <span className={styles.line1}></span>
                      <WiTime8 style={{ margin: "0px 10px" }} />
                      <span className={styles.time}>2 minute read</span>
                    </ParaText>
                  </div>
                  <div className={styles.paddingFiftyTopSmall}></div>
                  <div className={styles.paddingFiftyTop}></div>
                  <div className={styles.onlineUser}>
                    <Row gutter={24}>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <ShowImage size="small" src="/images/icon/img.png" />
                          <div className={styles.onlineIcon}> </div>
                        </div>
                      </Col>
                      <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <Titles
                            level={5}
                            color="neutralColor"
                            className={styles.paddingLeftTwenty}
                          >
                            Integer Maecenas Eget Viverra
                          </Titles>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.paddingFiftyTopSmall}></div>
                  <div className={styles.onlineUser}>
                    <Row gutter={24}>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <ShowImage size="small" src="/images/icon/img2.png" />
                          <div className={styles.onlineIcon}> </div>
                        </div>
                      </Col>
                      <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <Titles
                            level={5}
                            color="neutralColor"
                            className={styles.paddingLeftTwenty}
                          >
                            A Pretium Enim Dolor Donec Eu Venenatis Curabitur
                          </Titles>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.paddingFiftyTopSmall}></div>
                  <div className={styles.onlineUser}>
                    <Row gutter={24}>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <ShowImage size="small" src="/images/icon/img3.png" />
                          <div className={styles.onlineIcon}> </div>
                        </div>
                      </Col>
                      <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <Titles
                            level={5}
                            color="neutralColor"
                            className={styles.paddingLeftTwenty}
                          >
                            A Pretium Enim Dolor Donec Eu Venenatis Curabitur
                          </Titles>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.paddingFiftyTopSmall}></div>
                  <div className={styles.onlineUser}>
                    <Row gutter={24}>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <ShowImage size="small" src="/images/icon/img4.png" />
                          <div className={styles.onlineIcon}> </div>
                        </div>
                      </Col>
                      <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <Titles
                            level={5}
                            color="neutralColor"
                            className={styles.paddingLeftTwenty}
                          >
                            Integer Maecenas Eget Viverra
                          </Titles>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.paddingFiftyTopSmall}></div>
                  <div className={styles.onlineUser}>
                    <Row gutter={24}>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <ShowImage size="small" src="/images/icon/img1.png" />
                          <div className={styles.onlineIcon}> </div>
                        </div>
                      </Col>
                      <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
                        <div className={styles.onlineUserImage}>
                          <Titles
                            level={5}
                            color="neutralColor"
                            className={styles.paddingLeftTwenty}
                          >
                            Integer Maecenas Eget Viverra
                          </Titles>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.paddingFiftyTop}></div>
                  <Titles level={5} color="neutralColor">
                    Follow Us
                  </Titles>
                  <div className={styles.paddingFiftyTop}></div>
                  <div
                    className="flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div className="textCenter">
                      <Image
                        src="/images/icon/ic_baseline-facebook.png"
                        alt="facebook"
                      />
                      <br />
                      <ParaText size="small" color="neutralColor">
                        10
                      </ParaText>
                    </div>
                    <div className="textCenter">
                      <Image src="/images/icon/twiter.png" alt="facebook" />
                      <br />
                      <ParaText size="small" color="neutralColor">
                        69k
                      </ParaText>
                    </div>
                    <div className="textCenter">
                      <Image src="/images/icon/instagram.png" alt="facebook" />
                      <br />
                      <ParaText size="small" color="neutralColor">
                        45
                      </ParaText>
                    </div>
                    <div className="textCenter">
                      <Image
                        src="/images/icon/mdi_pinterest.png"
                        alt="facebook"
                      />
                      <br />
                      <ParaText size="small" color="neutralColor">
                        69k
                      </ParaText>
                    </div>
                    <div className="textCenter">
                      <Image src="/images/icon/youtube.png" alt="facebook" />
                      <br />
                      <ParaText size="small" color="neutralColor">
                        69k
                      </ParaText>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
