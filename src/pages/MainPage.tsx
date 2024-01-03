import styled from 'styled-components';
import { GreetingBox } from '../components/main/GreetingBox';

export const MainPage = () => {
  return (
    <Container>
      <GreetingBox />
    </Container>
  );
};

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: calc(100vh - 72px);
  padding-top: 40px;
  box-sizing: border-box;
  background: #f4f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
