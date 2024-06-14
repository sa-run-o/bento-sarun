import { Icon } from "@iconify/react";
import { useState } from "react";
import informationStore from "../store/informationStore";

const ProjectExperience = () => {
  const { projectList } = informationStore();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleDecreaseIndex = () => {
    const result = activeIndex === 0 ? projectList.length - 1 : activeIndex - 1;
    setActiveIndex(result);
  };
  const handleIncreaseIndex = () => {
    const result = activeIndex === projectList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(result);
  };
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
      <div className="h-[60%] flex justify-between">
        <div
          className="w-1/12 h-full flex items-center justify-center cursor-pointer hover:bg-zinc-900"
          onClick={() => handleDecreaseIndex()}
        >
          <Icon
            icon="bxs:left-arrow"
            style={{ color: "#10b981", marginRight: "10px" }}
          />
        </div>
        <div className="w-10/12 h-full relative flex justify-center items-center">
          <div className="absolute top-1 left-1 text-xs bg-zinc-900 px-3 py-1 rounded-xl ">{`${
            activeIndex + 1
          } / ${projectList.length}`}</div>
          <div className="h-full py-3">
            <img
              className="h-full"
              alt={projectList[activeIndex].name}
              src={projectList[activeIndex].image}
            />
          </div>
        </div>
        <div
          className="w-1/12 h-full flex items-center justify-center cursor-pointer hover:bg-zinc-900"
          onClick={() => handleIncreaseIndex()}
        >
          <Icon
            icon="bxs:right-arrow"
            style={{ color: "#10b981", marginRight: "10px" }}
          />
        </div>
      </div>
      <div className="h-[30%] border-solid border-t-zinc-800 border-t-2">
        <div className="my-1 font-bold text-lg underline h-1/6">
          {projectList[activeIndex].name}
        </div>
        <div className="text-pretty  overflow-y-scroll h-5/6">
          <div>{projectList[activeIndex].description}</div>
          <div className="mt-1 font-bold text-lg underline">Responsibility</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectExperience;
