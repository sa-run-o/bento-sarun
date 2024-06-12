import { Icon } from "@iconify/react";
const socialMediaList = [
  {
    name: "facebook",
    value: "typcn:social-facebook-circular",
    font: "font-facebook",
    backgroundHover: "#1877F2",
  },
  {
    name: "INSTAGRAM",
    value: "",
    font: "font-instagram",
    backgroundHover: "linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)",
  },
  {
    name: "Linkedin",
    value: "typcn:social-linkedin-circular",
    font: "font-linkedin",
    backgroundHover: "#0A66C2",
  },
  {
    name: "GitHub",
    value: "",
    font: "font-github",
    backgroundHover: "#3A72B8",
  },
];
interface ITagList {
  isReverse: boolean;
}
const TagsList = ({ isReverse }: ITagList) => {
  return (
    <div
      className={`flex whitespace-nowrap w-full ${
        isReverse
          ? "flex-row-reverse animate-slideLeftToRight"
          : "flex-row animate-slideRightToLeft"
      } hover:animation-pause mt-2`}
    >
      {socialMediaList.map((socialMedia) => {
        return (
          <div
            className={`flex cursor-pointer ${
              isReverse ? "ml-2" : "mr-2"
            } text-xl font-bold rounded-2xl border border-zinc-900 border-solid px-5 py-2 items-center justify-center text-zinc-400 `}
            style={{ background: "#020617" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = socialMedia.backgroundHover;
              e.currentTarget.style.color = "#0F172A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#020617";
              e.currentTarget.style.color = "#94A3B8";
            }}
            onClick={() => {
              console.log(socialMedia.value);
            }}
          >
            <div className={`${socialMedia.font}`}>{socialMedia.name}</div>
          </div>
        );
      })}
    </div>
  );
};
const MySocialMedia = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex justify-center items-center">
        <div>
          <Icon
            icon="iconamoon:lightning-2-fill"
            style={{ color: "#10b981", marginRight: "10px" }}
          />
        </div>
        <div className="font-bold text-base">My Social Media</div>
      </div>
      <TagsList isReverse={false} />
      <TagsList isReverse={true} />
    </div>
  );
};
export default MySocialMedia;
