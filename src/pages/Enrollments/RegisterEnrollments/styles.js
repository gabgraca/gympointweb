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

  padding: 10px 30px 30px;
  border-radius: 4px;

  strong {
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    color: #444444;
  }
  input {
    color: #999999;
  }

  .UnformInput,
  .locked {
    height: 45px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-top: 8px;
    padding: 15px 13px;
    color: #999999;
    text-align: center;
  }
  .UnformInput {
    background: #fff;
    width: 198px;
  }
`;

export const BottomFields = styled.div`
  display: flex;
  justify-content: space-between;

  .react-datepicker__input-container {
    input {
      height: 45px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin-top: 8px;
      padding: 15px 13px;
      color: #999999;
      text-align: center;
    }
  }

  .divs {
    display: flex;
    flex-direction: column;
    width: 198px;
    height: 100%;
    input {
      width: 198px;
    }
    .locked {
      background: #f5f5f5;
    }
  }
`;
