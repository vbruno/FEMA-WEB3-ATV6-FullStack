import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: #ff859b0c;
    color: #ff859b;

    display: flex;
    align-items: center;

    padding: 0 124px;

    > button {
      color: #ff859b;

      background: transparent;
      border: none;

      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-size: 16px;
        font-weight: 400;
      }
    }

    svg {
      color: #ff859b;
      font-size: 24px;
    }
  }

  button {
    height: 48px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;

  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: #ff859b;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;
