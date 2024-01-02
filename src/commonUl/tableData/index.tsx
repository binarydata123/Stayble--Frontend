"use client";
import React from "react";
import styles from "./tableData.module.css";
import ParaText from "../ParaText";
import { Table } from "antd";
import TableHotelCard from "../tableHotelCard";
import FreeButton from "../freeButton";
import ViewDetailButton from "../ViewDetailButton";
import EditButton from "../editButton";
import TrashButton from "../trashButton";

const { Column, ColumnGroup } = Table;
interface DataType {
  key: React.Key;
  firstName: any;
  lastName: any;
  age: any;
  address: any;
  tags: any;
  payment: any;
  manage: any;
}

const data: DataType[] = [
  {
    key: "1",
    firstName: (
      <div>
        <TableHotelCard />
      </div>
    ),
    lastName: "Gainesville",
    age: (
      <ParaText size="large" color="lightBlue" className="weight700">
        5<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    address: (
      <ParaText size="large" color="lightBlue" className="weight700">
        69<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    tags: (
      <ParaText size="large" color="lightBlue" className="weight700">
        $55550
      </ParaText>
    ),
    manage: <FreeButton />,
    payment: (
      <div className="dFlex gap textCenter">
        <EditButton />
        <EditButton />
        <TrashButton />
      </div>
    ),
  },
  {
    key: "2",
    firstName: (
      <div>
        <TableHotelCard />
      </div>
    ),
    lastName: "Gainesville",
    age: (
      <ParaText size="large" color="lightBlue" className="weight700">
        5<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    address: (
      <ParaText size="large" color="lightBlue" className="weight700">
        69<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    tags: (
      <ParaText size="large" color="lightBlue" className="weight700">
        $55550
      </ParaText>
    ),
    manage: <ViewDetailButton />,
    payment: (
      <div className="dFlex gap textCenter">
        <EditButton />
        <EditButton />
        <TrashButton />
      </div>
    ),
  },
  {
    key: "3",
    firstName: (
      <div>
        <TableHotelCard />
      </div>
    ),
    lastName: "Gainesville",
    age: (
      <ParaText size="large" color="lightBlue" className="weight700">
        5<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    address: (
      <ParaText size="large" color="lightBlue" className="weight700">
        69<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    tags: (
      <ParaText size="large" color="lightBlue" className="weight700">
        $55550
      </ParaText>
    ),
    manage: <ViewDetailButton />,
    payment: (
      <div className="dFlex gap textCenter">
        <EditButton />
        <EditButton />
        <TrashButton />
      </div>
    ),
  },
  {
    key: "4",
    firstName: (
      <div>
        <TableHotelCard />
      </div>
    ),
    lastName: "Gainesville",
    age: (
      <ParaText size="large" color="lightBlue" className="weight700">
        5<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    address: (
      <ParaText size="large" color="lightBlue" className="weight700">
        69<small className={`weight500 ${styles.smallFont}`}>(View)</small>
      </ParaText>
    ),
    tags: (
      <ParaText size="large" color="lightBlue" className="weight700">
        $55550
      </ParaText>
    ),
    manage: <ViewDetailButton />,
    payment: (
      <div className="dFlex gap textCenter">
        <EditButton />
        <EditButton />
        <TrashButton />
      </div>
    ),
  },
];

export default function TableData() {
  return (
    <>
      <div className={styles.tablePart}>
        <Table dataSource={data}>
          <Column title="Hotels" dataIndex="firstName" key="firstName" />
          <Column title="LOCATION" dataIndex="lastName" key="lastName" />
          <Column title="Reviews" dataIndex="age" key="age" />
          <Column title="Total Bookings" dataIndex="address" key="address" />
          <Column title="Payment Details" dataIndex="tags" key="tags" />
          <Column title="manage" dataIndex="manage" key="manage" />
          <Column title="Payment" dataIndex="payment" key="payment" />
        </Table>
      </div>
    </>
  );
}
