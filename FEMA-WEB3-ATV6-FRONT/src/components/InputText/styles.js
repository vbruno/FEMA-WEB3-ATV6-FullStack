import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: #262529;
  color: #948f99;

  border-radius: 10px;

  > button {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    color: #948f99;

    margin-right: 16px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: #f4ede8;
    background: transparent;
    border: 0;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:placeholder {
      color: #948f99;
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
