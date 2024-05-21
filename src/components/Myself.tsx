import React from "react";
import { Icon } from "@iconify/react";
import profile from "../assets/profile.png";

const Myself = () => {
  const chipCss =
    "flex items-center justify-center w-fit bg-[rgb(25,25,25)] border border-[rgb(33,33,33)] text-[rgb(153,153,153)] px-2.5 py-1 text-xs rounded-md";
  const containerCss = "w-full h-full grid grid-cols-1 grid-rows-2";
  const cvDownLoadCss = "flex items-center text-xs text-[rgb(153,153,153)]";
  const cvDownloadIconCss =
    "bg-[rgb(25,25,25)] border border-[rgb(33,33,33)] p-1 cursor-pointer rounded ml-2 flex justify-center items-center";
  const sessionOneCss = "flex justify-between p-5";
  const profileCss =
    "min-w-[10vw] max-w-[10vw] min-h-[10vw] max-h-[10vw] bg-[#ffbe98] border-4 border-white rounded-[10px] flex justify-center items-end overflow-hidden";
  const infoCss = "w-[65%] flex flex-col justify-between";
  const sessionTwoCss = "session-two flex w-full p-5";
  const tagCss =
    "tag w-[calc(100%-60px)] bg-[rgb(20,20,20)] border border-[rgb(25,25,25)] rounded-[10px] p-2.5 flex flex-wrap";
  const chipStyle =
    "flex items-center justify-center w-fit bg-[rgb(25,25,25)] border border-[rgb(33,33,33)] text-[rgb(153,153,153)] px-2.5 py-1 text-xs rounded-md";

  return (
    <>
      <style>
        {`
        @keyframes grayscaleToColor {
          0% {
            filter: grayscale(100%);
          }
          50% {
            filter: grayscale(100%);
          }
          51% {
            filter: grayscale(0%);
          }
          100% {
            filter: grayscale(0%);
          }
        }
        .animate-grayscale-to-color {
          animation: grayscaleToColor 3s ease-in-out infinite;
        }
      `}
      </style>
      <div className={containerCss}>
        <div className={sessionOneCss}>
          <div className={profileCss}>
            <img
              alt="profile"
              src={profile}
              className="w-full h-full animate-grayscale-to-color"
            />
          </div>
          <div className={infoCss}>
            <div className="first flex justify-between w-full">
              <div className={chipCss}>
                <Icon
                  icon="svg-spinners:pulse-multiple"
                  style={{ color: "#55e271" }}
                />
                <div className="ml-1.5">Looking for opportunities</div>
              </div>
              <div className={cvDownLoadCss}>
                <div>mycv</div>
                <div className={cvDownloadIconCss}>
                  <Icon
                    icon="line-md:download-loop"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
            <div className="sec text-lg font-bold">Sarun Olankranok (run)</div>
            <div className="third flex items-end">
              <div className="text-[rgb(153,153,153)] mr-1.5">
                Current position
              </div>
              <div className="text-[#ffbe98] font-bold text-xl">
                Fullstack developer.
              </div>
            </div>
          </div>
        </div>
        <div className={sessionTwoCss}>
          <div className={tagCss}>
            <div className={chipStyle}>
              <Icon icon="line-md:person-twotone" style={{ color: "white" }} />
              <div className="ml-1.5">26 years old</div>
            </div>
            <div className={chipStyle}>
              <Icon
                icon="line-md:my-location-loop"
                style={{ color: "white" }}
              />
              <div className="ml-1.5">Thailand</div>
            </div>
            <div className={chipStyle}>
              <Icon icon="mingcute:world-2-fill" style={{ color: "white" }} />
              <div className="ml-1.5">English & Thai</div>
            </div>
            <div className={chipStyle}>
              <Icon
                icon="line-md:briefcase-twotone"
                style={{ color: "white" }}
              />
              <div className="ml-1.5">Fullstack developer</div>
            </div>
            <div className={chipStyle}>
              <Icon
                icon="line-md:beer-twotone-loop"
                style={{ color: "white" }}
              />
              <div className="ml-1.5">Beer lover</div>
            </div>
            <div className={chipStyle}>
              <Icon
                icon="line-md:coffee-half-empty-twotone-loop"
                style={{ color: "white" }}
              />
              <div className="ml-1.5">Coffee addict</div>
            </div>
            <div className={chipStyle}>
              <Icon icon="mdi:university" style={{ color: "white" }} />
              <div className="ml-1.5">MFU</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myself;
