"use client";
import React, { useState } from "react";
import "./style.css";
import { Col, Image, Row } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import SecondaryButton from "../../commonUl/SecondaryButton";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="headerPart">
        <div className="mainContainer">
          <Row align="middle">
            <Col xl={4} md={4} xs={24} className="logoMain">
              <Link href="/">
                <Image
                  src="/images/Logo.png"
                  alt="Footer Logo"
                  width={215}
                  height={76}
                />
              </Link>
            </Col>
            <Col xl={16} md={20} xs={24}>
              <div className="menuBar">
                <div className="barIcon">
                  <MenuOutlined onClick={() => toggleMenu()} />
                </div>
                <div
                  className={`closeBar ${
                    isMenuOpen ? "open" : "headBtnMobile"
                  }`}
                >
                  <CloseOutlined onClick={() => toggleMenu()} />
                  <ul className="navBar">
                    <li className="active">
                      <Link href="# ">Home</Link>
                    </li>
                    <li>
                      <Link href="#">Locations</Link>
                    </li>
                    <li>
                      <Link href="#">Step Inside </Link>
                    </li>
                    <li>
                      <Link href="#">Offers </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} md={24} xs={24} className="textEnd headerButton">
              <div className={`  ${isMenuOpen ? "open" : "headBtnMobile"}`}>
                <SecondaryButton label="Book Now" className="smallButton" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
