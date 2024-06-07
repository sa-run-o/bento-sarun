import modalStore from "../store/modalStore";

interface IBackdrop {
  children: JSX.Element;
}
const Backdrop = ({ children }: IBackdrop) => {
  const { setModalComponent } = modalStore();
  return (
    <div
      className="fixed z-20 top-0 left-0 w-screen h-screen bg-black/90 flex justify-center items-center cursor-pointer"
      onClick={() => setModalComponent(undefined)}
    >
      {children}
    </div>
  );
};
export default Backdrop;
