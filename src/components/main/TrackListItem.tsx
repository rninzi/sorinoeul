import styled from 'styled-components';
import { ReactComponent as TrackDownSvg } from '../../assets/icons/mp3-download-icon.svg';
import { ReactComponent as ScoreDownSvg } from '../../assets/icons/score-download-icon.svg';

type Track = {
  id: number;
  title: string;
  vocal?: string | null;
  songWriter?: string | null;
  originalSong?: string | null;
  arrangers?: string[] | null;
  soundTrackLink: string;
  scoreLink?: string | null;
};

export type TrackListItemProps = {
  track: Track;
};

export const TrackListItem = ({ track }: TrackListItemProps) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <ItemLeftBox>
          <Title>{String(track.id).padStart(2, '0')}.</Title>
          <TrackInfoContainer>
            <TrackInfoInnerContainer>
              <Title>{track.title}</Title>
              {track.vocal && <Body1>{track.vocal}</Body1>}
            </TrackInfoInnerContainer>
            {track.arrangers && (
              <TrackInfoInnerContainer>
                <Body1>
                  {track.songWriter
                    ? track.songWriter + ' 사/곡 '
                    : track.originalSong + ' / '}
                </Body1>
                <Body1>편곡 </Body1>
                {track.arrangers.map((arranger) => (
                  <Body1>{arranger}</Body1>
                ))}
              </TrackInfoInnerContainer>
            )}
          </TrackInfoContainer>
        </ItemLeftBox>
        <a
          href={track.soundTrackLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon>
            <TrackDownSvg />
            <Body2>MP3</Body2>
          </DownloadIcon>
        </a>
      </InnerContainer>
      {track.scoreLink && (
        <a href={track.scoreLink} target="_blank" rel="noopener noreferrer">
          <DownloadIcon>
            <ScoreDownSvg />
            <Body2>악보</Body2>
          </DownloadIcon>
        </a>
      )}
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 330px;
  justify-content: space-between;
`;

const ItemLeftBox = styled.div`
  display: flex;
  gap: 15px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

const Body1 = styled.h3`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const Body2 = styled.p`
  color: #000;
  font-size: 10px;
  line-height: 12px;
`;

const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackInfoInnerContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const DownloadIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
