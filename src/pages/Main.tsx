import styled from "styled-components";
import { media } from "../utils/media";

const Main = () => {
  return (
    <SContainer>
      <div
        className="session-one default-grid"
        style={{ gridArea: "session-one" }}
      >
        <div className="default-box" style={{ gridArea: "project" }}>
          project
        </div>
        <div className="default-box" style={{ gridArea: "stack" }}>
          stack
        </div>
        <div className="default-box" style={{ gridArea: "service" }}>
          service
        </div>
      </div>
      <div
        className="session-two default-grid"
        style={{ gridArea: "session-two" }}
      >
        <div className="default-box" style={{ gridArea: "year-experience" }}>
          year-experience
        </div>
        <div className="default-box" style={{ gridArea: "project-count" }}>
          project-count
        </div>
        <div className="default-box" style={{ gridArea: "love" }}>
          love
        </div>
        <div className="default-box" style={{ gridArea: "myself" }}>
          myself
        </div>
        <div className="default-box" style={{ gridArea: "social-media" }}>
          social-media
        </div>
      </div>
      <div
        className="session-three default-grid"
        style={{ gridArea: "session-three" }}
      >
        <div className="default-box" style={{ gridArea: "comment" }}>
          comment
        </div>
        <div className="default-box" style={{ gridArea: "focus" }}>
          focus
        </div>
        <div className="default-box" style={{ gridArea: "certificate" }}>
          certificate
        </div>
        <div className="default-box" style={{ gridArea: "contact" }}>
          contact
        </div>
      </div>
    </SContainer>
  );
};
export default Main;
const SContainer = styled.div`
  .default-grid {
    display: grid;
    grid-gap: 10px;
  }
  .default-box {
    background-color: #0f0f0f;
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #191919;
  }
  width: 93%;
  height: 93%;
  display: grid;
  overflow: scroll;
  grid-gap: 10px;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: repeat(1, 100%);
  grid-template-areas: "session-one session-two session-three";

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 100%);
    grid-template-areas: 
    "session-one session-two"
    "session-three session-three";
  `}

  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 100%);
    grid-template-areas: 
    "session-two"
    "session-one"
    "session-three";
  `}
  & > div {
    overflow: hidden;
    height: 100%;
    width: 100%;
    &.session-one {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-template-areas:
        "project project"
        "project project"
        "stack stack"
        "stack stack"
        "service service"
        "service service";
    }
    &.session-two {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-template-areas:
        "year-experience project-count love"
        "myself myself myself"
        "myself myself myself"
        "myself myself myself"
        "social-media social-media social-media"
        "social-media social-media social-media";
    }
    &.session-three {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-template-areas:
        "comment comment focus"
        "comment comment focus"
        "comment comment focus"
        "certificate contact contact"
        "certificate contact contact"
        "certificate contact contact";
    }
  }
`;
