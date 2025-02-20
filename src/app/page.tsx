import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignVerticalDistributeCenter, HomeIcon } from "lucide-react";
import Sidebar from "@/components/common/Sidebar";
import SidebarItem from "@/components/common/Sidebar/SidebarItem";

export default function Home() {
  return (
    <main className="flex flex-row h-full">
      <Sidebar>
        <div className="relative flex-1 overflow-auto w-full">
          <SidebarItem
            label="Instances"
            Icon={<AlignVerticalDistributeCenter strokeWidth={1.75} />}
            hoverEffect={false}
          />
        </div>
        <div className="w-full p-4 flex justify-center mt-auto">
          <Button size="lg" className="bg-blue-500 rounded-x-lg border p-4">
            Connect Wallet
          </Button>
        </div>
      </Sidebar>
    </main>
  );
}
