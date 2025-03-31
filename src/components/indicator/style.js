import styled from "styled-components";

const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 0.3s ease;
    > * {
      flex-shrink: 0;
    }
  }
`;

export default IndicatorWrapper;
