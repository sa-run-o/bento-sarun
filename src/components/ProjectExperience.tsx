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
        <div className="w-10/12  relative flex flex-col  items-center overflow-scroll">
          <div className="absolute top-1 left-1 text-xs bg-zinc-900 px-3 py-1 rounded-xl opacity-70">{`${
            activeIndex + 1
          } / ${projectList.length}`}</div>
          {projectList[activeIndex].image &&
            projectList[activeIndex].image.map((e, index) => {
              return (
                <div className="h-5/6 w-auto py-3" key={index}>
                  <img className="h-full" alt={`project-${index}`} src={e} />
                </div>
              );
            })}
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
        <div className="mt-1 font-bold text-base underline">
          {projectList[activeIndex].name}
        </div>
        <div className="text-pretty  overflow-y-scroll h-5/6">
          <div className="indent-5 text-sm">
            {projectList[activeIndex].description}
          </div>
          <div className="mt-1 font-bold text-base underline">
            Responsibility
          </div>
          {projectList[activeIndex]?.responsibility?.length &&
            projectList[activeIndex].responsibility.map((e, index) => {
              return (
                <div key={index} className="flex text-sm mt-1">
                  <div>
                    <Icon
                      icon="carbon:circle-filled"
                      style={{
                        color: "#10b981",
                        marginRight: "10px",
                        marginTop: "3px",
                      }}
                    />
                  </div>
                  <div>{e}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ProjectExperience;
