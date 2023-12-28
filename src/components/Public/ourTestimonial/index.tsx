"use client";
import React from "react";
import styles from "./ourTestimonial.module.css";
import ParaText from "@/commonUl/ParaText";
import Titles from "@/commonUl/Titles";
import { Image } from "antd";
import { FaStar } from "react-icons/fa6";

export default function OurTestimonial() {
  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.profileTestimonial}>
          <Image
            src="/images/Rectangle-5.png"
            alt="Mask Group"
            width={162}
            height={162}
          />
        </div>
        <Titles level={5} color="dark">
          Darlen Roberson
        </Titles>
        <div className="marginBottomOne "></div>
        <ParaText size="small" color="dark">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s
        </ParaText>
        <div className="marginBottomTwo "></div>
        <div className="starReview">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </>
  );
}
