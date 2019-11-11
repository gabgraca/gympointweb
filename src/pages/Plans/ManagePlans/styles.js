import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
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

  button {
    height: 36px;
    font-size: 14px;
    font-weight: bold;
    width: 142px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    svg {
      font-size: 20px;
      line-height: 23px;
      color: #fff;
    }
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
      text-align: center;
    }
    th:nth-of-type(1) {
      text-align: left;
    }
  }

  tbody tr td {
    border-bottom: 1px solid #eeeeee;
    color: #666666;
    text-align: center;

    &:nth-child(1) {
      text-align: left;
    }

    &:nth-child(4) {
      text-align: right;
    }
    &:nth-child(5) {
      text-align: right;
    }

    a {
      color: #4d85ee;
      line-height: 18px;
    }

    button {
      background: inherit;
      color: #de3b3b;
      font-size: 14px;
      font-weight: normal;
    }
  }
`;
