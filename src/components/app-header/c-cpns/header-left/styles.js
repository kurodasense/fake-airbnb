import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  color: ${(props) =>
    props.theme.isAlpha ? "#ffffff" : props.theme.color.primary};
  align-items: center;

  .logo {
    cursor: pointer;
    margin-left: 24px;
  }
`;
