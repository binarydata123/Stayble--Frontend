import React from "react";
import { Tabs } from "antd";
import styles from "./tabSection.module.css";
import type { TabsProps } from "antd";
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Dominican Republic",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Category name",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Category name",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Category name",
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: "Category name",
    children: "Content of Tab Pane 3",
  },
  {
    key: "6",
    label: "Category name",
    children: "Content of Tab Pane 3",
  },
];

export default function BlogTabsSection() {
  return (
    <>
      <div className={styles.blogSectionTab}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
}
