import styled from "styled-components";
import { media } from "../utils/media";
import Myself from "../components/Myself";
import YearExperience from "../components/YearExperience";

const Main = () => {
  const SContainer =
    "w-screen h-screen flex flex-row flex-wrap p-5 justify-between overflow-scroll";
  const SGridContainer =
    "grow min-w-96 h-full grid grid-cols-6 grid-rows-9 gap-3 ml-2 mt-2 mr-2 mb-2 xl:mt-0 xl:mb-0";
  const SEachGrid =
    "bg-zinc-950 rounded-2xl border border-zinc-900 border-solid";

  return (
    <div className={SContainer}>
      <div className={`${SGridContainer} order-1`}>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>1</div>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>2</div>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>3</div>
      </div>
      <div className={`${SGridContainer} order-2`}>
        <div className={`${SEachGrid} col-span-2 row-span-2 px-6 py-4`}>4</div>
        <div className={`${SEachGrid} col-span-2 row-span-2 px-6 py-4`}>5</div>
        <div className={`${SEachGrid} col-span-2 row-span-2 px-6 py-4`}>6</div>
        <div className={`${SEachGrid} col-span-6 row-span-5 px-6 py-4`}>7</div>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>8</div>
      </div>
      <div className={`${SGridContainer} order-3`}>
        <div className={`${SEachGrid} col-span-6 row-span-5 px-6 py-4`}>9</div>
        <div className={`${SEachGrid} col-span-3 row-span-4 px-6 py-4`}>10</div>
        <div className={`${SEachGrid} col-span-3 row-span-3 px-6 py-4`}>11</div>
        <div className={`${SEachGrid} col-span-3 row-span-1 px-6 py-4`}>12</div>
      </div>
    </div>
  );
};
export default Main;
