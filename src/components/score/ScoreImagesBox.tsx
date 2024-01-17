import { TrackListItemProps } from 'components/main/TrackListItem';
import styled from 'styled-components';

export const ScoreImagesBox = ({ track }: TrackListItemProps) => {
  return (
    <Container>
      {track.scores?.map((scoreSrc) => (
        <ScoreImage src={scoreSrc} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const ScoreImage = styled.img`
  max-width: 340px;
`;
