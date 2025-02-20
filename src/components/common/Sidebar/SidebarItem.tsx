import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  label: string;
  Icon: ReactNode;
  hoverEffect?: boolean;
  // Define your props here
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  Icon,
  hoverEffect = true,
}) => {
  return (
    <div
      className={cn(
        "flex h-[40px] items-center gap-3 rounded px-3 py-[10px] text-sm font-normal text-zinc-700",
        hoverEffect &&
          "hover:bg-zinc-100 hover:text-zinc-950 group-[.is-active]:bg-zinc-100 group-[.is-active]:text-zinc-950 cursor-pointer"
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center">{Icon}</div>
      <div className="flex-1">{label}</div>
    </div>
  );
};

export default SidebarItem;
