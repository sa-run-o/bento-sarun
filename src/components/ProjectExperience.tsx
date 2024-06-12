import { Icon } from "@iconify/react";
import { useState } from "react";
const projectList = [{ name: "", image: "", desc: "" }];
const ProjectExperience = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="font-bold flex items-center justify-center h-[10%] border-solid border-b-zinc-800 border-b-2">
        <div>
          <Icon
            icon="basil:document-solid"
            style={{ color: "#10b981", marginRight: "10px" }}
          />
        </div>
        <div>My project experience</div>
      </div>
      <div className="h-[60%]">2</div>
      <div className="h-[30%] border-solid border-t-zinc-800 border-t-2 overflow-y-scroll">
        3
      </div>
    </div>
  );
};
export default ProjectExperience;
