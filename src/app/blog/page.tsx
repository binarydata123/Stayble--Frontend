"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import styles from "./blog.module.css";
import Titles from "@/commonUl/Titles";
import SecondaryButton from "@/commonUl/SecondaryButton";
import BlogCard from "@/commonUl/BlogCard";
import ParaText from "@/commonUl/ParaText";
import ShowImage from "@/commonUl/ShowImage";
import BlogTabsSection from "@/components/Public/BlogTabsSection";
import BlogLarge from "@/components/Public/BlogLarge";
import BlogSmall from "@/components/Public/BlogSmall";
import BlogSectionAll from "@/components/Public/BlogSectionAll";
export default function page() {
  return (
    <>
      <div className={styles.bannerblog}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
            <Col xl={24} md={24} sm={24} xs={24} className="tabViewCenter">
              <div className={`textCenter ${styles.blogTitle}`}>
                <Titles level={3} color="light">
                  Inspiration for travel by real people
                </Titles>
                <Titles level={4} color="light">
                  Book smart, travel simple
                </Titles>
                <SecondaryButton
                  label="Start planning your trip"
                  className={styles.blogBtn}
                ></SecondaryButton>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`mainGap ${styles.apartmentPart}`}>
        <div className="mainContainer">
          <Row gutter={16} className="marginBottomFour ">
            <Col xl={12} md={12} xs={24}>
              <div className="lineBox blue"></div>
              <Titles level={3} color="neutralColor">
                Our Latest News and <br className="mobileViewNone" />
                Updates
              </Titles>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.blogPost}>
        <div className="mainContainer">
          <Row gutter={24} className="marginBottomFive">
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div>
                <BlogCard
                  imageSrc="/images/blog/card.png"
                  imageSize={100}
                  alt="blog card"
                  title="Integer Maecenas Eget Viverra"
                  subtitle="Aliquam"
                  subtitleSmall="Aenean Eleifend"
                  authorImageSrc="/images/blog/user.svg"
                  authorName="Joanna Wellick"
                  date="June 28, 2018"
                  shares="1K"
                  content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
                  postLink="#"
                />
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div>
                <BlogCard
                  imageSrc="/images/blog/card1.png"
                  imageSize={100}
                  alt="blog card"
                  title="Integer Maecenas Eget Viverra"
                  subtitle="Aliquam"
                  subtitleSmall="Aenean Eleifend"
                  authorImageSrc="/images/blog/user.svg"
                  authorName="Joanna Wellick"
                  date="June 28, 2018"
                  shares="1K"
                  content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
                  postLink="#"
                />
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div>
                <BlogCard
                  imageSrc="/images/blog/card2.png"
                  imageSize={100}
                  alt="blog card"
                  title="Integer Maecenas Eget Viverra"
                  subtitle="Aliquam"
                  subtitleSmall="Aenean Eleifend"
                  authorImageSrc="/images/blog/user.svg"
                  authorName="Joanna Wellick"
                  date="June 28, 2018"
                  shares="1K"
                  content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
                  postLink="#"
                />
              </div>
            </Col>
          </Row>
          <Row gutter={24} className="marginBottomFive">
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div>
                <BlogCard
                  imageSrc="/images/blog/card3.png"
                  imageSize={100}
                  alt="blog card"
                  title="Integer Maecenas Eget Viverra"
                  subtitle="Aliquam"
                  subtitleSmall="Aenean Eleifend"
                  authorImageSrc="/images/blog/user.svg"
                  authorName="Joanna Wellick"
                  date="June 28, 2018"
                  shares="1K"
                  content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
                  postLink="#"
                />
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div>
                <BlogCard
                  imageSrc="/images/blog/card4.png"
                  imageSize={100}
                  alt="blog card"
                  title="Integer Maecenas Eget Viverra"
                  subtitle="Aliquam"
                  subtitleSmall="Aenean Eleifend"
                  authorImageSrc="/images/blog/user.svg"
                  authorName="Joanna Wellick"
                  date="June 28, 2018"
                  shares="1K"
                  content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
                  postLink="#"
                />
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} xs={24}>
              <div>
                <BlogCard
                  imageSrc="/images/blog/card5.png"
                  imageSize={100}
                  alt="blog card"
                  title="Integer Maecenas Eget Viverra"
                  subtitle="Aliquam"
                  subtitleSmall="Aenean Eleifend"
                  authorImageSrc="/images/blog/user.svg"
                  authorName="Joanna Wellick"
                  date="June 28, 2018"
                  shares="1K"
                  content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
                  postLink="#"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.bannerSection}>
        <div className={`mainContainer ${styles.bannerblogSection}`}>
          <Row align="middle" gutter={16}>
            <Col xl={24} md={24} sm={24} xs={24} className="tabViewCenter">
              <div className="textCenter">
                <Titles level={3} color="light">
                  Richird Norton photorealistic rendering as <br /> real photos
                </Titles>
                <ParaText size="small" color="light">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. The credibly productivate
                  seamless data.
                </ParaText>
                <SecondaryButton
                  label="Start planning your trip"
                  className={styles.blogBtn}
                ></SecondaryButton>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <section>
        <div className={`mainContainer ${styles.topDestinations}`}>
          <Titles level={5}>Top Destinations</Titles>
          <ParaText size="textGraf" color="paraGraf">
            Tick one more destination off of your bucket list with one of our
            most popular vacations in 2022
          </ParaText>

          <div className={`flex ${styles.flexBox}`}>
            <div className={styles.imageBoxCard}>
              <ShowImage size={100} src="/images/card/one.png" alt="" />
              <div className={styles.titleCenter}>
                <Titles level={5} color="light">
                  Dominican Republic
                </Titles>
              </div>
            </div>
            <div className={styles.imageBoxCard}>
              <ShowImage size={100} src="/images/card/two.png" alt="" />
              <div className={styles.titleCenter}>
                <Titles level={5} color="light">
                  Maecenas Tincidunt
                </Titles>
              </div>
            </div>
            <div className={styles.imageBoxCard}>
              <ShowImage size={100} src="/images/card/three.png" alt="" />
              <div className={styles.titleCenter}>
                <Titles level={5} color="light">
                  Dominican Republic
                </Titles>
              </div>
            </div>
            <div className={styles.imageBoxCard}>
              <ShowImage size={100} src="/images/card/four.png" alt="" />
              <div className={styles.titleCenter}>
                <Titles level={5} color="light">
                  Dominican Republic
                </Titles>
              </div>
            </div>
            <div className={styles.imageBoxCard}>
              <ShowImage size={100} src="/images/card/five.png" alt="" />
              <div className={styles.titleCenter}>
                <Titles level={5} color="light">
                  Dominican Republic
                </Titles>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tabSectionBlog">
        <div className="mainContainer">
          <BlogTabsSection />
          <br />
          <div className={styles.blogTabSectionTitle}>
            <BlogSectionAll />
          </div>
        </div>
      </section>
    </>
  );
}
