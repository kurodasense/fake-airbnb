import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) =>
    props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;

    .btn {
      cursor: pointer;
      padding: 12px 15px;
      margin: 0 -20px;
      height: 18px;
      line-height: 18px;
      border-radius: 22px;
      margin-right: 12px;
      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? "rgba(255, 255, 255, 0.1)" : "#f9f9f9"};
      }
    }
    .svg {
      position: relative;
      top: 2px;
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    box-sizing: border-box;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
    align-items: center;
    ${(props) => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
      color: #666;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          user-select: none;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
