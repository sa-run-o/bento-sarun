import loadingStore from "../store/loadingStore";
import informationStore from "../store/informationStore";
import instance from "./instance";

const path = "information";

export const getEngagement = async () => {
  loadingStore.getState().setIsMainLoading(true);
  const result = await instance.get(`/${path}/engagement`);
  informationStore.getState().setLike(result.data.like);
  informationStore.getState().setView(result.data.view);
  informationStore.getState().setComments(result.data.comments);
  loadingStore.getState().setIsMainLoading(false);
};
