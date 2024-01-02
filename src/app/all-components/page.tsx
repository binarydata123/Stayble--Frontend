import LocationsCard from "@/commonUl/LocationsCard";
import { Button, Col, Row } from "antd";
import React from "react";
export default function page() {
  return (
    <>
      <Row align="middle" gutter={16}>
        <Col lg={8} md={8} sm={8} xs={24}></Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          {/* <ButtonUI label='Button Text' className=''/>  */}
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          {/* <ButtonUI label='Button Text' className='smallButton'/> */}
        </Col>
      </Row>

      <Row align="middle" gutter={16}>
        <Col lg={8} md={8} sm={8} xs={24}>
          {/* <LocationsCard/> */}
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}></Col>
        <Col lg={8} md={8} sm={8} xs={24}></Col>
      </Row>
    </>
  );
}
