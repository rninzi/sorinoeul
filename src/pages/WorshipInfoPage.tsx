import styled from 'styled-components';
import { HighSchoolWorshipBox } from 'components/main/HighSchoolWorshipBox';
import { BackButton } from 'components/BackButton';
import { useNavigate } from 'react-router-dom';
import { BUTTON_TEXT } from 'assets/data/constants';

export const WorshipInfoPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HighSchoolWorshipBox />
      <ButtonContainer>
        <BackButton href={'#hyperlink'} onClick={() => navigate('/')}>
          {BUTTON_TEXT.main}
        </BackButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: calc(100vh - 72px);
  background: #f4f4f5;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-right: 30px;
  align-self: flex-end;
`;
