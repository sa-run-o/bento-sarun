import informationStore from "../store/informationStore";
import instance from "./instance";

const path = "like";

export const increaseLike = async () => {
  const result = await instance.post(`/${path}/increase`);
  informationStore.getState().setLike(result.data.count);
};
export const decreaseLike = async () => {
  const result = await instance.post(`/${path}/decrease`);
  informationStore.getState().setLike(result.data.count);
};
