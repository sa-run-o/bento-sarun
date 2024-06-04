import { create } from "zustand";
interface IComment {
  by: string;
  data: string;
  timestamp: string;
}
interface IInformationStore {
  view: number;
  setView: (data: number) => void;
  like: number;
  setLike: (data: number) => void;
  comments: IComment[];
  setComments: (data: IComment[]) => void;
  addComment: (data: IComment) => void;
}
const informationStore = create<IInformationStore>((set) => ({
  view: 0,
  setView: (data) => set(() => ({ view: data })),
  like: 0,
  setLike: (data) => set(() => ({ like: data })),
  comments: [],
  setComments: (data) => set(() => ({ comments: data })),
  addComment: (data) =>
    set((state) => ({ comments: [...state.comments, data] })),
}));
export default informationStore;
