"use client";
import React from "react";
import "./style.css";
import { Badge, Col, Row } from "antd";

export default function BadgeSuccess() {
  return (
    <>
      <div className="BadgeButton">
        <Badge status="success" text="2 Deals" className="success" />
      </div>
    </>
  );
}
