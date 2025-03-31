import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  border-bottom-color: ${(props) =>
    props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"};
  font-size: 14px;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;
    background-color: ${(props) =>
      props.theme.isAlpha
        ? "rgba(255, 255, 255, 0)"
        : "rgba(255, 255, 255, 1)"};

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchAreaWrapper = styled.div`
  height: ${(props) => (props.isSearch ? "100px" : "0")};
  transition: height 0.3s ease;
`;
