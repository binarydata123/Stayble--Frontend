"use client";
import { Col, Image, Row } from "antd";
import React from "react";
import "./common.css";
import MenuAdmin from "@/commonUl/MenuAdmin";
import DashboardCard from "@/commonUl/DashboardCard";
import RoomsCard from "@/commonUl/roomsCard";
import TodayBookingCard from "@/commonUl/todayBookingCard";
import TodayBookingCardBackground from "@/commonUl/todayBookingCardBackground";
import TopBar from "@/commonUl/topBar";
import Switch from "@/commonUl/Switch";
import NotificationsBlank from "@/commonUl/notificationsBlank";

export default function page() {
  return (
    <>
      <TopBar />

      <div className="formPart">
        <div className="mainContainer ">
          <div className="marginTopFour"> </div>
          <Row gutter={40}>
            <Col lg={6} md={24} xs={24}>
              <MenuAdmin />
            </Col>
            <Col lg={7} md={24} xs={24}>
              <DashboardCard />
              <br />
              <RoomsCard />

              <br />
              <TodayBookingCard />
              <br />
              <TodayBookingCardBackground />

              <br />
              <Switch />
            </Col>
            <Col lg={7} md={24} xs={24}>
              <NotificationsBlank />
            </Col>
            <Col lg={3} md={24} xs={24}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}
