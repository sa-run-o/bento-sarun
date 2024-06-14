import loadingStore from "../store/loadingStore";
import informationStore from "../store/informationStore";
import instance from "./instance";

const path = "information";

export const getEngagement = async () => {
  loadingStore.getState().setIsMainLoading(true);
  const result = await instance.get(`/${path}/information`);
  informationStore.getState().setLike(result.data.like);
  informationStore.getState().setView(result.data.view);
  informationStore.getState().setComments(result.data.comments);
  informationStore.getState().setPersonalInformation(result.data.personal);
  informationStore.getState().setProjectList(result.data.project);
  informationStore.getState().setStackList(result.data.stack);
  loadingStore.getState().setIsMainLoading(false);
};
