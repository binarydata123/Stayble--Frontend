import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Tabs } from "antd";
import CollapsePanel from "@/commonUl/CollapsePanel";

type TabPosition = "left";

const VerticalTabsHome: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Do you offer discounts if I pay by the week or month?`,
            key: id,
            children: <CollapsePanel />,
          };
        })}
      />
    </>
  );
};

export default VerticalTabsHome;
