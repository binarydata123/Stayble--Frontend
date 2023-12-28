import React from "react";
import { Col, Row } from "antd";
import ParaText from "@/commonUl/ParaText";
import ShowImage from "@/commonUl/ShowImage";
import styles from "./styles.module.css";
export default function BlogSmall() {
  return (
    <>
      <div className={styles.tabTitle}>
        <Row gutter={16}>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className={styles.imageTitle}>
              <Row gutter={16}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </ParaText>
                    <br />
                    <ParaText size="textGraf" color="paraGraf">
                      21 March 2021
                    </ParaText>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.imageTitle}>
              <Row gutter={16}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </ParaText>
                    <br />
                    <ParaText size="textGraf" color="paraGraf">
                      21 March 2021
                    </ParaText>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles.imageTitle}>
              <Row gutter={16}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Tick one more destination off of your bucket list with one
                      of our most popular vacations in 2022
                    </ParaText>
                    <br />
                    <ParaText size="textGraf" color="paraGraf">
                      21 March 2021
                    </ParaText>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
