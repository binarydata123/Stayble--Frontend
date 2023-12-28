import LocationsCard from "@/commonUl/LocationsCard";
import { Col, Image, Row } from "antd";
import React from "react";
import styles from "./contactPage.module.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import SecondaryButton from "@/commonUl/SecondaryButton";
import CollapsePanel from "@/commonUl/CollapsePanel";
import IconTitle from "@/components/Public/iconTitle";
import CardGallery from "@/components/Public/CardGallery/page";
import OurTestimonial from "@/components/Public/ourTestimonial";
export default function page() {
  return (
    <>
      <div className={styles.bannerPartContact}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
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

      <div className={`mainGap ${styles.apartmentPart}`}>
        <div className="mainContainer">
          <Row align="middle" gutter={16}>
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
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}
