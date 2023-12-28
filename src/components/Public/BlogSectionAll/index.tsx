import React from "react";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import BlogLarge from "../BlogLarge";
import BlogSmall from "../BlogSmall";
export default function BlogSectionAll() {
  return (
    <>
      <div className={styles.blogAll}>
        <Row className="" gutter={16}>
          <Col xxl={14} xl={14} lg={14} md={14} sm={24} xs={24}>
            <BlogLarge />
          </Col>
          <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24}>
            <BlogSmall />
          </Col>
        </Row>
      </div>
    </>
  );
}
