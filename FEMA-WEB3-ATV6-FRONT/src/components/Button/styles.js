import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ $variant }) => ($variant ? "#0D0C0F" : "#FF859B")};
  color: ${({ $variant }) => ($variant ? "#FF859B" : "#312e38")};

  height: 56px;
  border: 56px;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;
