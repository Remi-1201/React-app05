import styled from "styled-components";

export const StyledComponents = () => {
  return (
    // change <div> to <Container>
    <SContainer>
      <STitle>- Styled components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

// styled = from [import styled...] above
// [styled.div]'s[div] =
// = <div> changed to <SContainer> above
// write CSS inside [`  `;]
// CSS were copied from CssModules.module.scss
const SContainer = styled.div`
  border: solid 2px #c5dedd;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #003049;
`;

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
