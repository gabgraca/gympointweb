import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  button {
    height: 36px;
    font-size: 14px;
    font-weight: bold;
    width: 112px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0px 15px;
    svg {
      font-size: 20px;
      line-height: 23px;
      color: #fff;
    }
  }
`;

export const BackButton = styled.button`
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  width: 112px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 15px;

  svg {
    font-size: 20px;
    line-height: 23px;
    color: #fff;
  }
  background: #cccccc;
  &:hover {
    background: ${darken(0.03, '#cccccc')};
  }
`;
