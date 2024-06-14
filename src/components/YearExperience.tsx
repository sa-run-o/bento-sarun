import informationStore from "../store/informationStore";
import { formatNumberToString } from "../utils/format";

const YearExperience = () => {
  const { personalInformation } = informationStore();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center ">
        <div className="text-6xl font-bold">
          {formatNumberToString(personalInformation?.workingYear || 0)}
        </div>
        <div className="text-3xl text-emerald-500">+</div>
      </div>
      <div className="text-xs text-zinc-700 mt-3">years experience</div>
    </div>
  );
};
export default YearExperience;
