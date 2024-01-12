import styled from 'styled-components';
import { ReactComponent as TrackDownSvg } from 'assets/icons/mp3-download-icon.svg';
import { ReactComponent as ScoreDownSvg } from 'assets/icons/score-download-icon.svg';

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
              {track.vocal && <TrackInfo>{track.vocal}</TrackInfo>}
            </TrackInfoInnerContainer>
            {track.arrangers && (
              <TrackInfoInnerContainer>
                <TrackInfo>
                  {track.songWriter
                    ? track.songWriter + ' 사/곡 '
                    : track.originalSong + ' / '}
                </TrackInfo>
                <TrackInfo>편곡 </TrackInfo>
                {track.arrangers.map((arranger) => (
                  <TrackInfo>{arranger}</TrackInfo>
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
            <IconTitle>MP3</IconTitle>
          </DownloadIcon>
        </a>
      </InnerContainer>
      {track.scoreLink && (
        <a href={track.scoreLink} target="_blank" rel="noopener noreferrer">
          <DownloadIcon>
            <ScoreDownSvg />
            <IconTitle>악보</IconTitle>
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

const TrackInfo = styled.h3`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const IconTitle = styled.p`
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
