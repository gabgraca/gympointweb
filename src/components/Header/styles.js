import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  padding: 0px 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    img {
      width: 46px;
      height: 23px;
      margin-right: 2px;
    }

    span {
      font-size: 15px;
      font-weight: bold;
      color: #ee4d64;
      border-right: 1px solid #979797;
      margin-right: 10px;
      padding-right: 30px;
    }

    a {
      margin-left: 20px;
      margin-right: 20px;
      font-weight: bold;
      font-size: 15px;
      color: #999999;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    strong {
      color: #666666;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    a {
      color: #de3b3b;
      font-size: 14px;
    }
  }
`;
