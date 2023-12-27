import React from "react";
import styles from "./newsLatest.module.css";
import ParaText from "@/commonUl/ParaText";
import Titles from "@/commonUl/Titles";
import Image from "next/image";
import { FaCalendarDay } from "react-icons/fa6";
import { LuArrowRightCircle } from "react-icons/lu";

export default function NewsLatest() {
  return (
    <>
      <div className={styles.newsLatest}>
        <Image
          src="/images/video-img.png"
          alt="video image"
          width={800}
          height={800}
        />
        <br />
        <a href="#">
          <ParaText size="medium" color="darkgray">
            <FaCalendarDay />
            <b> September 23, 2019</b>
          </ParaText>
        </a>
        <Titles level={4} color="neutralColor">
          It is a long established fact that a reader will be distracted
        </Titles>
        <br />
        <a href="#">
          <ParaText size="large" color="linkLight">
            <b>
              Read More <LuArrowRightCircle />
            </b>
          </ParaText>
        </a>
      </div>
    </>
  );
}
