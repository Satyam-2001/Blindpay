import React, { ReactNode } from "react";
import SidebarItem from "./SidebarItem";
import { HomeIcon, SearchIcon } from "lucide-react";

interface SidebarProps {
  // Define your props here
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="fixed -left-[270px] top-0 z-20 flex h-full w-[270px] min-w-[270px] flex-col overflow-hidden overflow-y-auto border-r border-solid border-zinc-200 bg-white transition-all md:relative md:left-0 md:z-10 md:bg-inherit">
      <div className="w-full border-b border-solid border-zinc-200 p-3">
        <a className="group" href="/">
          <SidebarItem label="Home" Icon={<HomeIcon />} />
        </a>
        <SidebarItem label="Search" Icon={<SearchIcon />} hoverEffect={false} />
      </div>
      <div className="w-full p-3 flex-1">{children}</div>
    </aside>
  );
};

export default Sidebar;
