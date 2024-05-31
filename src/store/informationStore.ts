import { create } from "zustand";
interface IInformationStore {
  view: number;
  setView: (data: number) => void;
  like: number;
  setLike: (data: number) => void;
}
const informationStore = create<IInformationStore>((set) => ({
  view: 0,
  setView: (data) => set(() => ({ view: data })),
  like: 0,
  setLike: (data) => set(() => ({ like: data })),
}));
export default informationStore;
