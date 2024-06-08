import { Icon } from "@iconify/react";
import notificationStore from "../store/notificationStore";

const Notification = () => {
  const { notificationMessage } = notificationStore();
  return (
    <div className="fixed z-10 bottom-8 right-8 h-10">
      <div className="h-full overflow-hidden bg-white w-80 flex items-center">
        <div className=" h-full w-4 bg-emerald-500 mr-2"></div>
        <div>
          <Icon
            icon="line-md:bell-twotone-loop"
            style={{ color: "#10b981", marginRight: "10px" }}
          />
        </div>
        <div className="font-bold text-black">{notificationMessage}</div>
      </div>
    </div>
  );
};
export default Notification;
