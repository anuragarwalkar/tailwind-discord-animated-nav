import React from "react";
import { BsFillLightningFill, BsGearFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
      bg-white bg-gray-900 shadow-lg"
    >
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="20" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
      <SidebarIcon icon={<BsGearFill size="28" />} />
    </div>
  );
}

const SidebarIcon = ({ icon, text = "Tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
