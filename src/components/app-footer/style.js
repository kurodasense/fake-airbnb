import styled from "styled-components";

const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;

  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;
  }

  .service {
    display: flex;

    .item {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;

      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }

      .list {
        .iten {
          margin-top: 6px;
          color: #767676;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .statement {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`;

export default FooterWrapper;
