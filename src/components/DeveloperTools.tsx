import { Icon } from "@iconify/react";

const DeveloperTools = () => {
  const toolList = [
    { icon: "logos:react", label: "React" },
    { icon: "logos:typescript-icon", label: "Typescript" },
    { icon: "vscode-icons:file-type-tailwind", label: "Tailwindcss" },
    { icon: "line-md:github-loop", label: "gh-page" },
    { icon: "logos:nodejs", label: "Nodejs" },
    { icon: "logos:firebase", label: "Firebase" },
  ];
  return (
    <div className="w-full h-full relative overflow-scroll">
      <div className="font-bold flex justify-center items-center">
        <Icon
          icon="line-md:cog-loop"
          style={{ color: "#10b981", marginRight: "10px" }}
        />
        <div>Developer Tools</div>
      </div>
      {toolList.map((tool) => {
        return (
          <div className="flex  items-center rounded-2xl border border-zinc-900 border-solid mt-4 py-2 px-4">
            <div className="w-10">
              <Icon icon={tool.icon} />
            </div>
            <div>{tool.label}</div>
          </div>
        );
      })}
    </div>
  );
};
export default DeveloperTools;
