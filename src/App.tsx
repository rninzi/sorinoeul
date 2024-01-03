import styled from 'styled-components';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';

const App = () => {
  return (
    <Container>
      <Header />
      <MainPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f8f8f9;
`;

export default App;
