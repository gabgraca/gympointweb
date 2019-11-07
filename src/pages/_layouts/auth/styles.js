import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
`;

export const Content = styled.div`
  background: #fff;
  height: 448px;
  width: 360px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  padding: 30px;

  img {
    margin-top: 26px;
  }
  span {
    margin-top: 5px;
    font-weight: bold;
    font-size: 29px;
    color: #ee4d64;
  }

  form {
    margin-top: 15px;
    padding: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;

    p {
      font-weight: bold;
      font-size: 14px;
      margin-top: 5px;
    }

    input {
      height: 45px;
      border-radius: 4px;
      border: 1px solid #eee;
      color: #999999;
      padding: 20px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
  }
`;
