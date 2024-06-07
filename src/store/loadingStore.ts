import { create } from "zustand";

interface ILoadingStore {
  isMainLoading: boolean;
  setIsMainLoading: (data: boolean) => void;
}
const LoadingStore = create<ILoadingStore>((set) => ({
  isMainLoading: true,
  setIsMainLoading: (data) => set(() => ({ isMainLoading: data })),
}));
export default LoadingStore;
