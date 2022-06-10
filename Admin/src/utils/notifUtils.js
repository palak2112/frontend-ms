import { Store, NOTIFICATION_TYPE } from "react-notifications-component";

export function showNotification(type, data) {
  Store.addNotification({
    title: type === "danger" ? "Oops" : "Success",
    message: data,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: 3000,
      pauseOnHover: true,
      onScreen: true,
      showIcon: true,
    },
  });
}
