import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: #ff859b;
  }

  > h2 {
    width: 100%;
    text-align: start;
    font-size: 24px;
    margin: 48px 0;
    font-weight: 500;
  }

  > p {
    width: 100%;
    text-align: start;
    font-size: 14px;
    color: #cac4cf;
  }

  > button:last-child {
    background: transparent;
    border: none;

    margin-top: 42px;
    color: #ff859b;
  }
`;

export const Background = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  opacity: 0.3;
`;
