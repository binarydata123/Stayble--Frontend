import React from "react";
import ParaText from "@/commonUl/ParaText";
import { FiArrowRight } from "react-icons/fi";

export default function ViewAll() {
  return (
    <>
      <a href="#">
        <ParaText size="small" color="neutralColor">
          <b>View all</b> <FiArrowRight />
        </ParaText>
      </a>
    </>
  );
}
