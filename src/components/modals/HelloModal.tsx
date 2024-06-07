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
      <div className="text-3xl font-bold mt-3">Your lucky number is</div>
      <div className="text-5xl font-bold my-8 text-emerald-500">
        {luckyNumber}
      </div>
      <div className="flex text-xl">
        <div>Hello, visitor number</div>
        <div className="ml-1 text-emerald-500 font-bold">{luckyNumber}</div>
        <div>. Glad to meet you here.</div>
      </div>
      <div className="text-xs mt-4 text-zinc-600">Click outside to close.</div>
    </div>
  );
};
export default HelloModal;
