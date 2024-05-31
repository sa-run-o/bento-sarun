import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import informationStore from "../store/informationStore";
import { formatNumberToString } from "../utils/format";
import { decreaseLike, increaseLike } from "../apis/like";

const LikeMe = () => {
  const { like } = informationStore();
  const [isLiked, setIsLiked] = useState(false);
  const handleGetLikeHistory = async () => {
    const isLiked: boolean = localStorage.getItem("isLiked") === "true";
    setIsLiked(isLiked);
  };
  useEffect(() => {
    handleGetLikeHistory();
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center ">
        <div className="text-6xl font-bold">{formatNumberToString(like)}</div>
      </div>
      <div
        className={`text-xs text-zinc-700 cursor-pointer flex items-center border ${
          isLiked ? "border-emerald-500" : "border-zinc-900"
        } border-solid py-1 px-3 rounded-lg mt-3`}
        onClick={() => {
          if (isLiked) {
            decreaseLike();
          } else {
            increaseLike();
          }
          localStorage.setItem("isLiked", `${!isLiked}`);
          setIsLiked(!isLiked);
        }}
      >
        <div className="mr-2">
          <Icon icon="iconamoon:like-duotone" style={{ color: "#10b981" }} />
        </div>
        <div className={`${isLiked ? "text-emerald-500" : ""}`}>Like me</div>
      </div>
    </div>
  );
};
export default LikeMe;
