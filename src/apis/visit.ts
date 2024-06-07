import LoadingStore from "../store/loadingStore";
import instance from "./instance";

const path = "view";

export const increaseView = async () => {
  LoadingStore.getState().setIsMainLoading(true);
  const result = await instance.post(`/${path}/increase`);
  LoadingStore.getState().setIsMainLoading(false);
  return result.data.count;
};
