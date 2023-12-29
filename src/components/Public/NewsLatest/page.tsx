import React from "react";
import styles from "./newsLatest.module.css";
import ParaText from "@/commonUl/ParaText";
import Titles from "@/commonUl/Titles";
import Image from "next/image";
import { FaCalendarDay } from "react-icons/fa6";
import { LuArrowRightCircle } from "react-icons/lu";
import SecondaryButton from "@/commonUl/SecondaryButton";

export default function NewsLatest() {
  return (
    <>
      <div className="marginBottomTwo">
        <div className={styles.newsLatest}>
          <Image
            src="/images/home/card8.png"
            alt="video image"
            width={800}
            height={800}
          />
          <div className="marginBottomTwo"></div>
          <br />
          <div className={styles.borderLeftColor}>
            <span> MARCH 14, 2022</span>
          </div>
          <br />
          <br />
          <Titles level={4} color="neutralColor">
            It is a long established fact that a reader will be distracted
          </Titles>
          <br />
          <ParaText size="medium" color="darkgray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </ParaText>
          <br />
          <div className="marginBottomTwo"></div>
          <a href="#">
            <SecondaryButton label="Read More" />
          </a>
        </div>
      </div>
    </>
  );
}
