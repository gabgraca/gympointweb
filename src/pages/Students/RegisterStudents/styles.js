import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

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
`;
export const Fields = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 900px;
  min-height: 307px;
  padding: 10px 30px;
  border-radius: 4px;

  strong {
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    color: #444444;
  }

  input {
    height: 45px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-top: 8px;
    padding: 15px 13px;
    color: #999999;
  }

  span {
    margin-bottom: 5px;
    color: red;
  }
`;

export const BottomFields = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    input {
      width: 270px;
    }
  }
  span {
    margin-bottom: 5px;
    color: red;
  }
`;
