import Sidebar from "@/components/common/Sidebar";
import InstanceButton, {
  InstanceStatus,
} from "@/components/shared/Instances/InstanceButton";
import React from "react";

interface InstanceProps {
  // Define your props here
}

const Instance: React.FC<InstanceProps> = ({}) => {
  return (
    <main className="flex flex-row h-full">
      <Sidebar>
        <InstanceButton label="Test" status={InstanceStatus.DEVELOPMENT} />
      </Sidebar>
    </main>
  );
};

export default Instance;
