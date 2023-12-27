import React from "react";
import ParaText from "../../../commonUl/ParaText";
import Image from "next/image";
import Titles from "../../../commonUl/Titles";
import styles from "./locationsCard.module.css";

export default function LocationsCard() {
  return (
    <>
      <div className="textCenter">
        <div className={styles.locationsCard}>
          <Image
            src="/images/card-img.png"
            alt="Your External Image"
            width={500}
            height={500}
          />
          <br />
          <ParaText size="medium" color="primaryColor">
            <b>Kissimmee East</b>
          </ParaText>
          <Titles level={5} color="neutralColor">
            {" "}
            Experience Kissimmee
          </Titles>
          <a href="#">
            <ParaText size="medium" color="darkgray">
              View Locations
            </ParaText>
          </a>
        </div>
      </div>
    </>
  );
}
