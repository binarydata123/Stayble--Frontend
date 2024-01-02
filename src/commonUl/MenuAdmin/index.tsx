"use client";
import "./style.css";
import type { MenuProps } from "antd";
import { Image, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    "Dashboard",
    "1",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons1.png"
      alt="Dashboard"
      className="menuIcon"
    />
  ),
  getItem(
    "Booking ",
    "2",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons2.png "
      alt="Booking "
      className="menuIcon"
    />
  ),
  getItem(
    "Destination ",
    "3",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons3.png "
      alt="Destination "
      className="menuIcon"
    />
  ),
  getItem(
    "Hotels (room)",
    "4",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons4.png "
      alt="Hotels (room)"
      className="menuIcon"
    />
  ),
  getItem(
    "Deal",
    "5",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons5.png "
      alt="Deal"
      className="menuIcon"
    />
  ),
  getItem(
    "Guest",
    "6",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons6.png "
      alt="Guest"
      className="menuIcon"
    />
  ),
  getItem(
    "Staff",
    "7",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons7.png "
      alt="Staff"
      className="menuIcon"
    />
  ),
  getItem(
    "Blogs",
    "8",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons8.png "
      alt="Blogs"
      className="menuIcon"
    />
  ),
  getItem(
    "Rate",
    "9",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons9.png "
      alt="Rate"
      className="menuIcon"
    />
  ),
  getItem(
    "Ticket",
    "10",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons10.png "
      alt="Ticket"
      className="menuIcon"
    />
  ),
  getItem(
    "Settings",
    "11",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons11.png "
      alt="Settings"
      className="menuIcon"
    />
  ),
  getItem(
    "Logout",
    "12",
    <Image
      src="/images/AdminMenuIcons/AdminMenuIcons12.png "
      alt="Logout"
      className="menuIcon"
    />
  ),
];

export default function MenuAdmin() {
  return (
    <>
      <div className="menuDash darkMenuDash" id="menuId">
        <div>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="dark"
            items={items}
          />
        </div>
      </div>
    </>
  );
}
