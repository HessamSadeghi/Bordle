import { NotificationType } from "~/models";

export interface NotificationState {
  notification: {
    type: NotificationType;
    message: string;
  };
  setNotification: (type: NotificationType, message: string) => void;
}
