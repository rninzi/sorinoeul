import styled from 'styled-components';
import { ApplyBox } from 'components/main/ApplyBox';
import { BackButton } from 'components/BackButton';
import { useNavigate } from 'react-router-dom';
import { BUTTON_TEXT } from 'assets/data/constants';

export const ApplyPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ApplyBox />
      <ButtonContainer>
        <BackButton href="#hyperlink" onClick={() => navigate('/')}>
          {BUTTON_TEXT.main}
        </BackButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100%;
  background: #f4f4f5;
  padding-top: 50px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-right: 30px;
  margin-top: 40px;
  align-self: flex-end;
`;
