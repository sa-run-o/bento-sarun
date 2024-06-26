import { Icon } from "@iconify/react";
import { useState } from "react";
import informationStore from "../store/informationStore";
const MyStack = () => {
  const { stackList } = informationStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center">
        <div>
          <Icon
            icon="bi:stack"
            style={{ color: "#10b981", marginRight: "10px" }}
          />
        </div>
        <div className="font-bold">My Stack</div>
      </div>
      <div className="flex flex-wrap justify-between cursor-pointer">
        {stackList.map((e, index) => {
          return (
            <div
              key={index}
              className="w-[48%] rounded-2xl border border-zinc-900 border-solid py-3 px-5 mt-5 mr-1 text-xl flex items-center justify-between group"
              onClick={() => {
                window.open(e.link, "_blank");
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center">
                <div>
                  <Icon
                    icon={`${e.icon}`}
                    style={{ color: e.color, marginRight: "10px" }}
                  />
                </div>
                <div>{e.name}</div>
              </div>
              {activeIndex === index && (
                <div className="hidden group-hover:block">
                  <Icon
                    icon="line-md:chevron-right-circle"
                    style={{ color: "grey" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyStack;
