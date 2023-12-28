import React from "react";
import { Col, Row } from "antd";
import ParaText from "@/commonUl/ParaText";
import ShowImage from "@/commonUl/ShowImage";
import styles from "./styles.module.css";
export default function BlogLarge() {
  return (
    <>
      <div className={styles.tabTitle}>
        <Row gutter={16}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.imageTitle}>
              <ShowImage src="/images/tab/tab.png" size={100} />
              <br />
              <span className={styles.month}>1 Month Ago </span>
              <ParaText size="small" color="paraGraf">
                Tick one more destination off of your bucket list with one of
                our most popular vacations in 2022
              </ParaText>
              <br />
              <ParaText size="textGraf" color="darkgraydark">
                lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                eleifend sed ex. Donec quis magna sed felis elementum blandit
                nec quis sem. Maecen.
              </ParaText>
              <br />
              <br />
              <ParaText
                size="extraSmall"
                color="paraGraf"
                className={styles.underline}
              >
                View Post
              </ParaText>
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <div className={styles.imageTitle}>
              <Row gutter={16}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={10} xs={10}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={14} xs={14}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Akame Ga Kill: Season finale
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
                <Col xxl={8} xl={8} lg={8} md={8} sm={10} xs={10}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={14} xs={14}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Akame Ga Kill: Season finale
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
                <Col xxl={8} xl={8} lg={8} md={8} sm={10} xs={10}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={14} xs={14}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Akame Ga Kill: Season finale
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
                <Col xxl={8} xl={8} lg={8} md={8} sm={10} xs={10}>
                  <ShowImage src="/images/tab/small.png" size={100} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={14} xs={14}>
                  <div className={styles.smallTitle}>
                    <ParaText size="small" color="paraGraf">
                      Akame Ga Kill: Season finale
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
