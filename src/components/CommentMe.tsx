import { Icon } from "@iconify/react";
import informationStore from "../store/informationStore";
import { formatNanosecondsToDate } from "../utils/format";
import { useState } from "react";

const CommentMe = () => {
  const { comments } = informationStore();
  const [nameMessage, setNameMessage] = useState("");
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    if (!message) return;
    const by = nameMessage || "Anonymous";
    const datetime = Math.floor(Date.now() / 1000);
    setNameMessage("");
    setMessage("");
  };
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
          <div>Say Hello to me</div>
        </div>
      </div>
      <div className="h-3/5 overflow-y-scroll">
        {comments?.map((comment, index) => {
          return (
            <div
              className="w-full border border-solid border-zinc-900 rounded-lg py-3 px-5 mt-3 bg-zinc-900"
              key={index}
            >
              <div>{comment.data}</div>
              <div className="flex justify-end items-center mt-3 italic">
                <div className="text-xs text-zinc-500">{comment.by}@</div>
                <div className="text-xs text-zinc-500">
                  {formatNanosecondsToDate(comment.timestamp.seconds)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-1/5 flex justify-between items-center border-t border-solid border-zinc-900">
        <div className="w-4/12 flex items-center">
          <input
            className="w-full text-xs h-10 bg-zinc-900 border border-solid border-zinc-900 mr-1 rounded-md px-2 outline outline-0 focus:outline-0"
            placeholder="name"
            value={nameMessage}
            onChange={(e) => setNameMessage(e.target.value)}
          />
          <div className="text-xs mx-1">say:</div>
        </div>
        <div className="w-7/12">
          <input
            className="w-full text-xs h-10 bg-zinc-900 border border-solid border-zinc-900 rounded-md px-2 outline outline-0 focus:outline-0"
            placeholder="say something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div
          className="w-1/12"
          onClick={() => {
            handleSendMessage();
          }}
        >
          <div className="w-full h-full text-center rounded-md bg-zinc-900 text-xs cursor-pointer ml-1 py-3">
            send
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentMe;
