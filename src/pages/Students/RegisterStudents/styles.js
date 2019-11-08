import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;

export const BackButton = styled.button`
  background: #cccccc;
  &:hover {
    background: ${darken(0.03, '#cccccc')};
  }
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
    width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    svg {
      position: absolute;
      font-size: 20px;
      color: #ffffff;
      margin-top: 8px;
      margin-left: 15px;
    }
    div {
      button {
        width: 112px;
        height: 36px;
        padding: 10px 16px 10px 44px;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
      }
    }
  }
`;
export const Fields = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 900px;
  height: 307px;
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
`;
