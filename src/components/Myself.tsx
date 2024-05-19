import styled from "styled-components";
import { Icon } from "@iconify/react";
import profile from "../assets/profile.png";
const Myself = () => {
  return (
    <SContainer>
      <div className="session-one">
        <div className="profile">
          <img alt="profile" src={profile} />
        </div>
        <div className="info">
          <div className="first">
            <div className="chip">
              <div>
                <Icon
                  icon="svg-spinners:pulse-multiple"
                  style={{ color: "#55e271" }}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>Looking for opportunities</div>
            </div>
            <div className="cv-download">
              <div>mycv</div>
              <div className="icon">
                <Icon icon="line-md:download-loop" style={{ color: "white" }} />
              </div>
            </div>
          </div>
          <div className="sec">Sarun Olankranok (run)</div>
          <div className="third">
            <div style={{ color: "rgb(153, 153, 153)", marginRight: "5px" }}>
              Current position
            </div>
            <div
              style={{ color: "#ffbe98", fontWeight: "bold", fontSize: "20px" }}
            >
              Fullstack developer.
            </div>
          </div>
        </div>
      </div>
      <div className="session-two">
        <div className="tag">
          <div className="chip">
            <Icon icon="line-md:person-twotone" style={{ color: "white" }} />
            <div style={{ marginLeft: "5px" }}>26 years old</div>
          </div>
          <div className="chip">
            <div>
              <Icon
                icon="line-md:my-location-loop"
                style={{ color: "white" }}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>Thailand</div>
          </div>
          <div className="chip">
            <div>
              <Icon icon="mingcute:world-2-fill" style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>English & Thai</div>
          </div>
          <div className="chip">
            <div>
              <Icon
                icon="line-md:briefcase-twotone"
                style={{ color: "white" }}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>Fullstack developer</div>
          </div>
          <div className="chip">
            <div>
              <Icon
                icon="line-md:beer-twotone-loop"
                style={{ color: "white" }}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>Beer lover</div>
          </div>
          <div className="chip">
            <div>
              <Icon
                icon="line-md:coffee-half-empty-twotone-loop"
                style={{ color: "white" }}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>Coffee addict</div>
          </div>
          <div className="chip">
            <div>
              <Icon icon="mdi:university" style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>MFU</div>
          </div>
        </div>
      </div>
    </SContainer>
  );
};
export default Myself;
const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .chip {
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    background-color: rgb(25, 25, 25);
    border: solid 1px rgb(33, 33, 33);
    color: rgb(153, 153, 153);
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 10px;
  }
  .cv-download {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: rgb(153, 153, 153);
    & > div {
      &.icon {
        background-color: rgb(25, 25, 25);
        border: solid 1px rgb(33, 33, 33);
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  & > div {
    &.session-one {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      & > div {
        &.profile {
          width: 30%;
          height: calc(100% - 10px);
          background-color: #ffbe98;
          border: 5px white solid;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
          & > img {
            width: 100%;
            height: 100%;
            filter: grayscale(100%);
          }
        }
        &.info {
          width: 65%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          & > div {
            &.first {
              width: 100%;
              display: flex;
              justify-content: space-between;
            }
            &.sec {
              font-size: 25px;
              font-weight: bold;
            }
            &.third {
              display: flex;
              align-items: flex-end;
            }
          }
        }
      }
    }
    &.session-two {
      display: flex;
      width: 100%;
      padding: 20px;
      & > div {
        &.tag {
          width: calc(100% - 60px);
          background-color: rgb(20, 20, 20);
          border: solid 1px rgb(25, 25, 25);
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          & > div {
            &.chip {
              height: fit-content;
              background-color: rgb(25, 25, 25);
              border: solid 1px rgb(33, 33, 33);
              color: white;
              & > div {
                display: flex;
              }
            }
          }
        }
      }
    }
  }
`;
