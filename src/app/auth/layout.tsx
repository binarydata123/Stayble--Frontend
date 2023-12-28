"use client";
import React, { useState } from "react";
import { Col, Image, Row } from "antd";
import "./style.css";
import LoginImageSection from "@/components/Public/LoginImageSection";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="authWrapper">
      <div className="main">
        <a href="#">
          <Image src="/images/logo.svg" alt="" className="logoStyle" />
        </a>
      </div>
      <div className="fullWidth">
        <div className="loginForm">
          <Row className="reverseCol">
            <Col xs={24} lg={12} md={24} sm={24}>
              {children}
            </Col>
            <Col xs={24} lg={12} md={24} sm={24}>
              <div className="loginImage">
                <div className="mobileViewNone">
                  <LoginImageSection
                    imagePath="/images/login.jpg"
                    imageAlt=""
                  />
                </div>
                <div className="tabAndDasktopNone imgRound">
                  <Image src="/images/Rectangle-6.png" alt="login-img.png" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
