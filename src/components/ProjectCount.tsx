import informationStore from "../store/informationStore";
import { formatNumberToString } from "../utils/format";

const ProjectCount = () => {
  const { projectList } = informationStore();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center ">
        <div className="text-6xl font-bold">
          {formatNumberToString(projectList?.length || 0)}
        </div>
        <div className="text-3xl text-emerald-500">+</div>
      </div>
      <div className="text-xs text-zinc-700 mt-3">joined project</div>
    </div>
  );
};
export default ProjectCount;
