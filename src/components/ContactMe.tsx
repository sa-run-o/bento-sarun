import { Icon } from "@iconify/react";

const ContactMe = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="font-bold">Contact me</div>
      <div className="w-full h-4/5 bg-zinc-800 rounded-xl flex flex-col justify-between items-center cursor-pointer text-sm py-12">
        <div className="bg-zinc-950 h-12 w-12 flex justify-center items-center rounded-full">
          <Icon
            icon="line-md:email-opened-twotone"
            style={{ color: "#10b981", width: "30px", height: "30px" }}
          />
        </div>
        <div>sarun.olan@gmail.com</div>
      </div>
    </div>
  );
};
export default ContactMe;
