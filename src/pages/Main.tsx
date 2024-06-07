import { useCallback, useEffect } from "react";
import Myself from "../components/Myself";
import YearExperience from "../components/YearExperience";
import ProjectCount from "../components/ProjectCount";
import LikeMe from "../components/LikeMe";
import { getEngagement } from "../apis/information";
import VisitCount from "../components/VisitCount";
import DeveloperTools from "../components/DeveloperTools";
import ContactMe from "../components/ContactMe";
import CommentMe from "../components/CommentMe";
import Modal from "../components/modals/Modal";
import Notification from "../components/Notification";
import modalStore from "../store/modalStore";
import { increaseView } from "../apis/visit";
import HelloModal from "../components/modals/HelloModal";
import LoadingStore from "../store/loadingStore";
import MainLoading from "../components/MainLoading";

const Main = () => {
  const { modalComponent, setModalComponent } = modalStore();
  const { isMainLoading } = LoadingStore();
  const handleBaseInformation = useCallback(async () => {
    const isTrue = localStorage.getItem("visited");
    if (isTrue !== "true") {
      const viewIncreased = await increaseView();
      const modalContent = <HelloModal luckyNumber={viewIncreased} />;
      setModalComponent(modalContent);
    }
    localStorage.setItem("visited", "true");
    getEngagement();
  }, [setModalComponent]);

  useEffect(() => {
    handleBaseInformation();
  }, [handleBaseInformation]);
  const SContainer =
    "w-full h-full grid sm:grid-cols-1 sm:grid-rows3 lg:grid-cols-2 lg:grid-rows2 xl:grid-cols-3 xl:grid-rows-1 gap-4 p-5 overflow-scroll relative";
  const SGridContainer = "grid grid-cols-6 grid-rows-9 gap-3";
  const SEachGrid =
    "bg-zinc-950 rounded-2xl border border-zinc-900 border-solid";
  return isMainLoading ? (
    <MainLoading />
  ) : (
    <div className={SContainer}>
      {modalComponent && <Modal>{modalComponent}</Modal>}
      <Notification />
      <div
        className={`${SGridContainer} sm:col-span-1 lg:col-span-1 xl:col-span-1`}
      >
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>1</div>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>2</div>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>3</div>
      </div>
      <div
        className={`${SGridContainer} sm:col-span-1 lg:col-span-1 xl:col-span-1`}
      >
        <div className={`${SEachGrid} col-span-2 row-span-2 px-6 py-4`}>
          <YearExperience />
        </div>
        <div className={`${SEachGrid} col-span-2 row-span-2 px-6 py-4`}>
          <ProjectCount />
        </div>
        <div className={`${SEachGrid} col-span-2 row-span-2 px-6 py-4`}>
          <LikeMe />
        </div>
        <div className={`${SEachGrid} col-span-6 row-span-5 px-6 py-4`}>
          <Myself />
        </div>
        <div className={`${SEachGrid} col-span-6 row-span-3 px-6 py-4`}>8</div>
      </div>
      <div
        className={`${SGridContainer} sm:col-span-1 lg:col-span-2 xl:col-span-1`}
      >
        <div className={`${SEachGrid} col-span-6 row-span-5 px-6 py-4`}>
          <CommentMe />
        </div>
        <div className={`${SEachGrid} col-span-3 row-span-4 px-6 py-4`}>
          <DeveloperTools />
        </div>
        <div className={`${SEachGrid} col-span-3 row-span-3 px-6 py-4`}>
          <ContactMe />
        </div>
        <div className={`${SEachGrid} col-span-3 row-span-1 px-6 py-4`}>
          <VisitCount />
        </div>
      </div>
    </div>
  );
};
export default Main;
