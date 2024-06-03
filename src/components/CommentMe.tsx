import { Icon } from "@iconify/react";

const CommentMe = () => {
  return (
    <div className="w-full h-full">
      <div className="h-1/5 flex justify-center items-center border-b border-solid border-zinc-900">
        <div className="font-bold flex items-center">
          <div>
            <Icon
              icon="line-md:emoji-smile-wink-twotone"
              style={{ color: "#10b981", marginRight: "10px" }}
            />
          </div>
          <div>Rave Reviews Showcase</div>
        </div>
      </div>
    </div>
  );
};
export default CommentMe;
