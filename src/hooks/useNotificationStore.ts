import { create } from "zustand";
import { NotificationState, NotificationType } from "~/models";

const useNotificationStore = create<NotificationState>((set) => ({
  notification: {
    type: "error" as NotificationType,
    message: "",
  },
  setNotification: (type, message) => set({ notification: { type, message } }),
}));

export default useNotificationStore;
