import informationStore from "../store/informationStore";
import instance from "./instance";

const path = "information";

export const getEngagement = async () => {
  const result = await instance.get(`/${path}/engagement`);
  informationStore.getState().setLike(result.data.like);
  informationStore.getState().setView(result.data.view);
  informationStore.getState().setComments(result.data.comments);
};
