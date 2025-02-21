import styled from "styled-components";

const ViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;
  }
  .scroll-content {
    display: flex;
    transition: transform 300ms ease;
  }

  .control {
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
      width: 32px;
      height: 32px;
      box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;

export default ViewWrapper;
