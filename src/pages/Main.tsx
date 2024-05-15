import styled from "styled-components";
import { media } from "../utils/media";

const Main = () => {
  return (
    <SContainer>
      <div style={{ gridArea: "session-one" }}>1</div>
      <div style={{ gridArea: "session-two" }}>2</div>
      <div style={{ gridArea: "session-three" }}>3</div>
    </SContainer>
  );
};
export default Main;
const SContainer = styled.div`
  width: 93%;
  height: 93%;
  display: grid;
  overflow: scroll;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
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
    background-color: #252525;
    overflow: hidden;
    height: 100%;
  }
`;
