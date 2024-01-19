import { BUTTON_TEXT } from 'assets/data/constants';
import { trackListData } from 'assets/data/mockupData';
import { BackButton } from 'components/BackButton';
import { MoveButton } from 'components/MoveButton';
import { ScoreImagesBox } from 'components/score/ScoreImagesBox';
import { TrackCreditBox } from 'components/score/TrackCreditBox';
import { TrackTitleBox } from 'components/score/TrackTitleBox';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const ScorePage = () => {
  const { trackNumber } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {Number(trackNumber) < 7 ? (
        <Container>
          <ButtonContainer $isNext={Number(trackNumber) < 6}>
            {Number(trackNumber) > 1 && (
              <MoveButton
                onClick={() => navigate(`/score/${Number(trackNumber) - 1}`)}
              >
                {BUTTON_TEXT.prev}
              </MoveButton>
            )}
            {Number(trackNumber) < 6 && (
              <MoveButton
                onClick={() => navigate(`/score/${Number(trackNumber) + 1}`)}
              >
                {BUTTON_TEXT.next}
              </MoveButton>
            )}
          </ButtonContainer>
          <TrackTitleBox track={trackListData[Number(trackNumber) - 1]} />
          <TrackCreditBox track={trackListData[Number(trackNumber) - 1]} />
          <ScoreImagesBox track={trackListData[Number(trackNumber) - 1]} />
          <BackButton href={'#trackList'} onClick={() => navigate('/')}>
            {BUTTON_TEXT.trackList}
          </BackButton>
        </Container>
      ) : (
        <EmptyContainer>악보 정보를 제공하지 않는 경로입니다.</EmptyContainer>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  height: 100%;
  background: #f4f4f5;
  padding-left: 40px;
  padding-bottom: 50px;
  padding-right: 20px;
`;

const EmptyContainer = styled.div`
  max-width: 450px;
  width: 100%;
  height: calc(100vh - 72px - 90px);
  background: #f4f4f5;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div<{ $isNext: boolean }>`
  display: flex;
  gap: 10px;
  max-width: ${({ $isNext }) => ($isNext ? '350px' : '300px')};
  width: 100%;
  margin: 20px 0 16px 0;
  justify-content: flex-end;
`;
