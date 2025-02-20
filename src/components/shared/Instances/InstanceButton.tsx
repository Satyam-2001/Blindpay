import {
  sidebarHoverClass,
  sidebarMainClass,
} from "@/components/common/Sidebar/SidebarItem";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";
import React from "react";

export enum InstanceStatus {
  DEVELOPMENT = "Development",
  PRODUCTION = "Production",
}

interface InstanceButtonProps {
  // Define your props here
  label: string;
  status: InstanceStatus;
}

const InstanceButton: React.FC<InstanceButtonProps> = ({ label, status }) => {
  return (
    <a href="instances/12">
      <div
        className={cn(
          sidebarMainClass,
          sidebarHoverClass,
          "rounded-md p-[6px] transition min-h-[52px] text-left"
        )}
      >
        <div className="bg-zinc-100 rounded-sm h-[36px] w-[36px] relative aspect-square overflow-hidden min-w-[32px] text-xs object-cover object-center">
          <div className="flex h-full w-full items-center justify-center bg-gray-100 font-bold text-gray-500 uppercase">
            {label.slice(0, 2)}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-0.5 text-sm font-normal">{label}</div>
          <div className="inline-flex items-center rounded-full border transition-colors focus:outline-none bg-inherit border-zinc-300 text-zinc-500 border-dashed px-2 py-[2px] text-[11px] leading-[12px] font-normal [&>svg]:text-[10px] gap-[4px]">
            <TriangleAlert size={"14px"} />
            {status}
          </div>
        </div>
      </div>
    </a>
  );
};

export default InstanceButton;
