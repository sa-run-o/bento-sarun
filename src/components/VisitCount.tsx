import { useEffect } from "react";
import informationStore from "../store/informationStore";
import { formatNumberToString } from "../utils/format";
import { increaseView } from "../apis/visit";
import { Icon } from "@iconify/react";

const VisitCount = () => {
  const { view } = informationStore();
  useEffect(() => {
    const isTrue = localStorage.getItem("visited");
    if (isTrue !== "true") {
      increaseView();
    }
    localStorage.setItem("visited", "true");
  }, []);
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full text-sm font-bold flex justify-center items-center ">
        <div className="mr-2">
          <Icon
            icon="line-md:watch-twotone-loop"
            style={{ color: "#10b981" }}
          />
        </div>
        <div>
          Number of visited: {`${view ? formatNumberToString(view) : ""}`}
        </div>
      </div>
    </div>
  );
};
export default VisitCount;
