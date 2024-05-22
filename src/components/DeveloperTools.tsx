import { Icon } from "@iconify/react";
import { useState } from "react";

const DeveloperTools = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  const toolList = [
    { icon: "logos:react", label: "React" },
    { icon: "logos:typescript-icon", label: "Typescript" },
    { icon: "vscode-icons:file-type-tailwind", label: "Tailwindcss" },
    { icon: "line-md:github-loop", label: "gh-page" },
  ];
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative"
    >
      {showPopup && (
        <div className="absolute -top-96 right-0 bg-zinc-950 rounded-2xl border border-zinc-900 border-solid w-72 h-96 p-4 overflow-scroll">
          {toolList.map((tool) => {
            return (
              <div className="flex justify-center items-center rounded-2xl border border-zinc-900 border-solid mt-4 p-2">
                <div className="mr-2">
                  <Icon icon={tool.icon} />
                </div>
                <div className="text-xl">{tool.label}</div>
              </div>
            );
          })}
        </div>
      )}
      <div className="w-full h-full text-sm font-bold flex justify-center items-center hover:text-emerald-500">
        Website Developer Tools
      </div>
    </div>
  );
};
export default DeveloperTools;
