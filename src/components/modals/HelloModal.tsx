import { Icon } from "@iconify/react";

interface IHelloModal {
  luckyNumber: number;
}
const HelloModal = ({ luckyNumber }: IHelloModal) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Icon
          icon="line-md:emoji-smile-twotone"
          style={{ color: "#10b981" }}
          width="3em"
          height="3em"
        />
      </div>
      <div className="text-3xl font-bold mt-3 text-center">
        Your lucky number is
      </div>
      <div className="text-5xl font-bold my-8 text-emerald-500">
        {luckyNumber}
      </div>
      <div className="flex text-xl text-center">
        <div>Hello, visitor number {luckyNumber}. Glad to see you here.</div>
      </div>
      <div className="text-xs mt-4 text-zinc-600 text-center">
        Better on desktop. Click outside to close.
      </div>
    </div>
  );
};
export default HelloModal;
