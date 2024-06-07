import { create } from "zustand";

interface IModalStore {
  modalComponent: JSX.Element | undefined;
  setModalComponent: (data: JSX.Element | undefined) => void;
}
const modalStore = create<IModalStore>((set) => ({
  modalComponent: undefined,
  setModalComponent: (data) => set(() => ({ modalComponent: data })),
}));
export default modalStore;
