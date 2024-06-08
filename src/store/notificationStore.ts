import { create } from "zustand";

interface INotificationStore {
  isNotification: boolean;
  setIsNotificationOn: (data: string) => void;
  setIsNotificationOff: () => void;
  notificationMessage: string;
}
const notificationStore = create<INotificationStore>((set) => ({
  isNotification: false,
  setIsNotificationOn: (data: string) =>
    set((state) => {
      setTimeout(() => {
        state.setIsNotificationOff();
      }, 5000);
      return { notificationMessage: data, isNotification: true };
    }),
  setIsNotificationOff: () =>
    set(() => ({ notificationMessage: "", isNotification: false })),
  notificationMessage: "",
}));
export default notificationStore;
