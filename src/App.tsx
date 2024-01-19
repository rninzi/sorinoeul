import styled from 'styled-components';
import { Header } from 'components/Header';
import { MainPage } from 'pages/MainPage';
import { Footer } from 'components/Footer';
import { ScorePage } from 'pages/ScorePage';
import { Routes, Route } from 'react-router-dom';
import { scrollToTop } from 'utils/scrollToTop';
import { useNavigate } from 'react-router-dom';
import { WorshipInfoPage } from 'pages/WorshipInfoPage';
import { ApplyPage } from 'pages/ApplyPage';

const App = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    scrollToTop();
    navigate('/');
  };

  return (
    <Container>
      <Header onLogoClick={onLogoClick} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/score/:trackNumber" element={<ScorePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/worshipInformation" element={<WorshipInfoPage />} />
      </Routes>
      <Footer />
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
