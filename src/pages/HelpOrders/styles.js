import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const List = styled.table`
  background: #fff;
  margin-top: 20px;
  width: 100%;
  border-radius: 4px;
  padding: 30px 30px;
  thead {
    color: #444444;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    th {
      text-align: left;
    }
  }
  tbody tr td {
    border-bottom: 1px solid #eeeeee;
    color: #666666;
    text-align: left;

    &:nth-child(2) {
      text-align: right;
    }

    button {
      background: inherit;
      color: #4d85ee;
      font-size: 14px;
      font-weight: normal;
    }
  }
`;

export const AnswerScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 425px;
    margin: auto;
    background: #ffffff;
    border-radius: 4px;
    padding: 30px;

    strong {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
    }

    p {
      margin-top: 8px;
      margin-bottom: 20px;
      height: 104px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #666666;
    }
    .Answer {
      border: none;
      color: #444444;
      padding: 0px;
    }
    textarea {
      margin-top: 8px;
      resize: none;
      width: 390px;
      height: 127px;
      padding: 13px 15px;
      color: #999999;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 21px;
    }
  }
`;
