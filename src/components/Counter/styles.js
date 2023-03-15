import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
  gap: 24px;
  padding: 32px 24px;
  margin: 0 auto;
  width: 50%;

  img {
    width: 80%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  p {
    text-align: center;
    width: 60px;
    font-size: 48px;
  }
`;

