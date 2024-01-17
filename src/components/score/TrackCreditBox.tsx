import { SOUNDTRACK_CREDIT_ROLE } from 'assets/data/constants';
import styled from 'styled-components';
import { TrackCreditItem } from './TrackCreditItem';
import { TrackListItemProps } from 'components/main/TrackListItem';

export const TrackCreditBox = ({ track }: TrackListItemProps) => {
  return (
    <Container>
      <div>
        <TrackCreditItem
          role={
            track.credit.songWriter
              ? SOUNDTRACK_CREDIT_ROLE.songWriter
              : SOUNDTRACK_CREDIT_ROLE.song
          }
          names={track.credit.songWriter || track.credit.originalSong}
        />
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.arrangers}
          names={track.credit.arrangers}
        />
      </div>
      <div>
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.vocal}
          names={track.credit.vocal}
        />
        {track.credit.chorus && (
          <TrackCreditItem
            role={SOUNDTRACK_CREDIT_ROLE.chorus}
            names={track.credit.chorus}
          />
        )}
        {track.credit.kids && (
          <TrackCreditItem
            role={SOUNDTRACK_CREDIT_ROLE.kids}
            names={track.credit.kids}
          />
        )}
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.bass}
          names={track.credit.bass}
        />
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.drum}
          names={track.credit.drum}
        />
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.electricGuitar}
          names={track.credit.electricGuitar}
        />
        {track.credit.acousticGuitar && (
          <TrackCreditItem
            role={SOUNDTRACK_CREDIT_ROLE.acousticGuitar}
            names={track.credit.acousticGuitar}
          />
        )}
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.piano}
          names={track.credit.piano}
        />
        <TrackCreditItem
          role={SOUNDTRACK_CREDIT_ROLE.keyboard}
          names={track.credit.keyboard}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 15px;
`;
