import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
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

  div {
    width: 395px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

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

    input {
      width: 237px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      line-height: 16px;
      color: #999;
      padding: 10px 30px;
    }
  }
`;

export const Search = styled.div`
  display: block;
  max-width: 237px;
  height: 36px;

  svg {
    position: absolute;
    margin-top: 8px;
    margin-left: 8px;
    font-size: 20px;
    line-height: 23px;
    color: #ddd;
  }
`;

export const List = styled.table`
  background: #fff;
  margin-top: 20px;
  width: 1200px;
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
    th:nth-of-type(3) {
      text-align: center;
    }
  }

  tbody tr td {
    padding: 20px 0px;

    border-bottom: 1px solid #eeeeee;

    color: #666666;

    &:nth-child(3) {
      text-align: center;
    }
    a {
      color: #666666;
    }
  }
`;
