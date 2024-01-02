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
import Table from "@/commonUl/tableData";
import LeaveButton from "@/commonUl/leaveButton";
import NotAvailableButton from "@/commonUl/notAvailableButton";
import OnShiftButton from "@/commonUl/onShiftButton";
import PickupButton from "@/commonUl/pickupButton";
import ViewDetailButton from "@/commonUl/ViewDetailButton";
import FreeButton from "@/commonUl/freeButton";

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
              <br />
              <LeaveButton />
              <div className="marginTopTwo"> </div>
              <NotAvailableButton />
              <div className="marginTopTwo"> </div>
              <OnShiftButton />
              <div className="marginTopTwo"> </div>
              <PickupButton />
              <div className="marginTopTwo"> </div>
              <FreeButton />
              <div className="marginTopTwo"> </div>
              <ViewDetailButton />
            </Col>
            <Col lg={3} md={24} xs={24}></Col>
          </Row>
          <div className="marginTopFour"> </div>
          <Table />
        </div>
      </div>
    </>
  );
}
