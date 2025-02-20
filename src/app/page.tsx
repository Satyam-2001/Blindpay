import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  AlignVerticalDistributeCenter,
  HomeIcon,
  TriangleAlert,
} from "lucide-react";
import Sidebar from "@/components/common/Sidebar";
import SidebarItem, {
  sidebarHoverClass,
  sidebarMainClass,
} from "@/components/common/Sidebar/SidebarItem";
import { cn } from "@/lib/utils";
import InstanceButton, {
  InstanceStatus,
} from "@/components/shared/Instances/InstanceButton";

export default function Home() {
  return (
    <main className="flex flex-row h-full">
      <Sidebar>
        <div className="flex-1 w-full">
          <SidebarItem
            label="Instances"
            Icon={<AlignVerticalDistributeCenter strokeWidth={1.75} />}
            hoverEffect={false}
          />
          <InstanceButton label="Test" status={InstanceStatus.DEVELOPMENT} />
        </div>
        <div className="w-full p-4 flex justify-center mt-auto">
          <Button
            size="lg"
            className="bg-indigo-500 text-[16px] font-bold rounded-x-lg border p-4 hover:bg-indigo-400 rounded-[20px]"
          >
            Connect Wallet
          </Button>
        </div>
      </Sidebar>
    </main>
  );
}
