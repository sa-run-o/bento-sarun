import { Icon } from "@iconify/react";
import { useState } from "react";

const LikeMe = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center ">
        <div className="text-6xl font-bold">{likeCount}</div>
      </div>
      <div
        className={`text-xs text-zinc-700 cursor-pointer flex items-center border ${
          isLiked ? "border-emerald-500" : "border-zinc-900"
        } border-solid py-1 px-3 rounded-lg mt-3`}
        onClick={() => {
          if (isLiked) {
            setLikeCount(likeCount - 1);
          } else {
            setLikeCount(likeCount + 1);
          }
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
