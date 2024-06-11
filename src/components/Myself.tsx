import React from "react";
import profileImage from "../assets/profile.png";
import { Icon } from "@iconify/react";
const Myself = () => {
  const tags = [
    { icon: "line-md:map-marker-alt-twotone", label: "Thailand" },
    { icon: "line-md:chat", label: "English & Thai" },
    { icon: "line-md:briefcase-twotone", label: "Fullstack developer" },
    { icon: "line-md:person-twotone", label: "26 years old" },
    { icon: "ic:twotone-school", label: "MFU" },
    { icon: "line-md:coffee-twotone-loop", label: "Coffee & Beer lover" },
  ];
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-5 ">
      <div className="col-span-1 row-span-2">
        <div className="w-full h-full bg-emerald-500 flex items-end justify-center rounded-lg overflow-hidden border-4 border-white">
          <img
            alt="display"
            src={profileImage}
            className="w-full h-auto grayscale"
          />
        </div>
      </div>
      <div className="col-span-2 row-span-2 flex flex-col justify-between">
        <div className="flex justify-between text-base">
          <div className="flex rounded-xl border border-zinc-900 border-solid bg-zinc-900 px-3.5 py-0.5 items-center">
            <div className="mr-2">
              <Icon
                icon="svg-spinners:pulse-multiple"
                style={{ color: "#10b981" }}
              />
            </div>
            <div className="text-zinc-700">Available To Work</div>
          </div>
          <div className="flex items-center">
            <div className="text-zinc-700 mr-2">mycv</div>
            <div className="p-1.5 border-zinc-900 border-solid bg-zinc-900 rounded-lg cursor-pointer">
              <Icon
                icon="line-md:download-outline-loop"
                style={{ color: "#10b981" }}
              />
            </div>
          </div>
        </div>
        <div className="text-4xl font-bold">Sarun Olankranok</div>
        <div className="text-base text-zinc-700">
          Current position: Fullstack developer
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="w-full h-full rounded-xl border border-zinc-900 border-solid bg-zinc-900 px-3.5 py-1.5 flex flex-wrap ">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="flex items-center rounded-xl border border-zinc-900 border-solid bg-zinc-800 h-fit w-fit mr-1 p-2 text-xs"
              >
                <div className="mr-1">
                  <Icon icon={tag.icon} style={{ color: "#10b981" }} />
                </div>
                <div>{tag.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="w-full h-full italic text-zinc-500 text-center text-xs">
          <pre>{`
Hello! You can call me Run.
I'm a full-stack developer.
I specialize in React, TypeScript, and Node.js.
I'm also keenly interested in UI/UX design.
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default Myself;
