import React from "react";
import { Select } from "antd";

const SelectCounter: React.FC = () => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select Room type"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={[
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ]}
  />
);

export default SelectCounter;
