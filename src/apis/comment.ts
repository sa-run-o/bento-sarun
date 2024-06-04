import informationStore from "../store/informationStore";
import instance from "./instance";
const path = "comment";
interface IUploadComment {
  by: string;
  message: string;
  datetime: string;
}
export const uploadComment = async ({
  by,
  message,
  datetime,
}: IUploadComment) => {
  const result = await instance.post(`/${path}/send`, {
    by,
    message,
    datetime,
  });
  informationStore.getState().addComment(result.data);
};
