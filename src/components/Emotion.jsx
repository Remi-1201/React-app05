/** @jsxRuntime classic */

/** @jsx jsx */

import { jsx, css } from "@emotion/react";
// StyledComponents's style
import styled from "@emotion/styled";

export const Emotion = () => {
  // CSS were copied from CssModules.module.scss
  // write CSS inside [ `  `; ]
  const containerStyle = css`
    border: solid 2px #c5dedd;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // write CSS inside [ ({ }); ]
  const titleStyle = css({
    margin: 0,
    color: "#003049"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>

      {/* StyledComponents's style */}
      <SButton>FIGHT !!</SButton>
    </div>
  );
};

// StyledComponents's style
const SButton = styled.button`
  background-color: #fde2e4;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #99c1de;
    color: white;
    cursor: pointer;
  }
`;
