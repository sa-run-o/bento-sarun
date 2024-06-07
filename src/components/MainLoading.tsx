import { Icon } from "@iconify/react";
import Backdrop from "./Backdrop";

const MainLoading = () => {
  return (
    <Backdrop>
      <div>
        <Icon
          icon="svg-spinners:bouncing-ball"
          style={{ color: "#10b981" }}
          width={"12em"}
          height={"12em"}
        />
      </div>
    </Backdrop>
  );
};
export default MainLoading;
