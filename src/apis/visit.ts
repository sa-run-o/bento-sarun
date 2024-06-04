import informationStore from "../store/informationStore";
import instance from "./instance";

const path = "view";

export const increaseView = async () => {
  const result = await instance.post(`/${path}/increase`);
  informationStore.getState().setView(result.data.count);
};
