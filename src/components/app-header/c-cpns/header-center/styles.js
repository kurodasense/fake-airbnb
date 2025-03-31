import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    will-change: transform, opacity;

    ${(props) => props.theme.mixin.boxShadow};

    .text {
      padding: 0 16px;
      color: ${(props) =>
        props.theme.isAlpha ? "rgba(255, 255, 255, 0.8)" : "#222"};
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    /* transition: all 400ms linear; */

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 400ms ease;
    transform: translateY(-58px) scale(0.35, 0.727273);
    opacity: 0;
  }

  .detail-enter {
    transform: translateY(-58px) scale(0.35, 0.727273);
    opacity: 0;
  }

  .detail-enter-active {
    transform: translateY(0) scale(1);
    opacity: 1;
    transition: all 400ms ease;
  }

  .bar-enter {
    transform: translateY(58px) scale(2.85714, 1.375);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 400ms ease;
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  .bar-exit {
    transform: translateY(0) scale(1);
    opacity: 0;
  }

  .bar-exit-active {
    transition: all 400ms ease;
    transform: translateY(58px) scale(2.85714, 1.375);
    opacity: 1;
  }
`;
