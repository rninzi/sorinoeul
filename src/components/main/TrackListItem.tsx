import styled from 'styled-components';
import { ReactComponent as TrackDownSvg } from 'assets/icons/mp3-download-icon.svg';
import { ReactComponent as ScoreDownSvg } from 'assets/icons/score-download-icon.svg';
import { downloadFile } from 'utils/downloadFile';

type Track = {
  trackNumber: number;
  title: string;
  subtitle?: string;
  credit: Credit;
  soundTrackURL: string;
  scoreURL?: string | null;
  scores?: string[] | null;
};

type Credit = {
  vocal?: string[] | null;
  songWriter?: string[] | null;
  originalSong?: string[] | null;
  arrangers?: string[] | null;
  chorus?: string[] | null;
  kids?: string[] | null;
  bass: string[] | null;
  drum: string[] | null;
  electricGuitar: string[] | null;
  acousticGuitar?: string[] | null;
  piano: string[] | null;
  keyboard: string[] | null;
};

export type TrackListItemProps = {
  track: Track;
};

export const TrackListItem = ({ track }: TrackListItemProps) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <ItemLeftBox>
          <Title>{String(track.trackNumber).padStart(2, '0')}.</Title>
          <TrackInfoContainer>
            <TrackInfoInnerContainer>
              <Title>
                {track.title} {track.subtitle && track.subtitle}
              </Title>
              {track.credit.vocal && (
                <TrackInfo>{track.credit.vocal}</TrackInfo>
              )}
            </TrackInfoInnerContainer>
            {track.credit.arrangers && (
              <TrackInfoInnerContainer>
                <TrackInfo>
                  {track.credit.songWriter
                    ? track.credit.songWriter + ' 사/곡 '
                    : track.credit.originalSong + ' / '}
                </TrackInfo>
                <TrackInfo>편곡 </TrackInfo>
                {track.credit.arrangers.map((arranger) => (
                  <TrackInfo>{arranger}</TrackInfo>
                ))}
              </TrackInfoInnerContainer>
            )}
          </TrackInfoContainer>
        </ItemLeftBox>
        <DownloadButton
          onClick={() =>
            downloadFile(
              track.soundTrackURL,
              track.trackNumber + '.' + track.title + '.mp3'
            )
          }
        >
          <TrackDownSvg />
          <IconTitle>MP3</IconTitle>
        </DownloadButton>
      </InnerContainer>
      {track.scoreURL && (
        <DownloadButton
          onClick={() =>
            track.scoreURL &&
            downloadFile(
              track.scoreURL,
              track.trackNumber + '.' + track.title + '.pdf'
            )
          }
        >
          <ScoreDownSvg />
          <IconTitle>악보</IconTitle>
        </DownloadButton>
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

const DownloadButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
