import Backdrop from "../Backdrop";

interface IModal {
  children: JSX.Element;
}
const Modal = ({ children }: IModal) => {
  return (
    <Backdrop>
      <div className="bg-zinc-950 rounded-2xl border border-zinc-900 border-solid px-10 py-5 cursor-default max-w-7xl max-h-screen">
        {children}
      </div>
    </Backdrop>
  );
};
export default Modal;
