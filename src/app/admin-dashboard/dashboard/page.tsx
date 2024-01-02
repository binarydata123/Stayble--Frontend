import { Col, Image, Row } from "antd";
import React from "react";
import "./style.css";
import Titles from "@/commonUl/Titles";
import ParaText from "@/commonUl/ParaText";
import SecondaryButton from "@/commonUl/SecondaryButton";
import CollapsePanel from "@/commonUl/CollapsePanel";
import IconTitle from "@/components/Public/iconTitle";
import CardGallery from "@/components/Public/CardGallery/page";
import OurTestimonial from "@/components/Public/ourTestimonial";
import MenuAdmin from "@/commonUl/MenuAdmin";
export default function page() {
  return (
    <>
      <div className="dashboard">
        <Row>
          <Col xl={5} md={24} sm={24} xs={24} className="leftBack">
            <MenuAdmin />
          </Col>
          <Col xl={19} md={24} sm={24} xs={24} className="backgroundGray"></Col>
        </Row>
      </div>
    </>
  );
}
