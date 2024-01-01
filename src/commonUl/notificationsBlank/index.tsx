"use client";
import React from "react";
import styles from "./notificationsBlank.module.css";
import ParaText from "../ParaText";
import { IoNotificationsOffOutline } from "react-icons/io5";

export default function NotificationsBlank() {
  return (
    <>
      <div className={styles.notificationsBlank}>
        <ParaText size="small" color="blueColor">
          <b>Notifications</b>
        </ParaText>
        <div className="textCenter marginTopThree">
          <IoNotificationsOffOutline className={styles.notificationsNone} />
          <br />
          <ParaText size="small" color="mediumDark" className="weight700">
            No New Notifications
          </ParaText>
          <br />
          <ParaText size="small" color="mediumDark">
            Check this section for job updates, and general notifications.
          </ParaText>
        </div>
      </div>
    </>
  );
}
