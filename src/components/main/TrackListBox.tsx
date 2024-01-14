import styled from 'styled-components';
import albumArt from 'assets/images/album-art.png';
import { TrackListItem } from './TrackListItem';
import { mockupData } from 'assets/data/mockupData';

export const TrackListBox = () => {
  return (
    <Container>
      <AlbumArtContainer>
        <AlbumArtImg src={albumArt} />
      </AlbumArtContainer>
      <TrackList>
        {mockupData.map((data) => (
          <TrackListItem track={data} />
        ))}
      </TrackList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 105px;
  align-items: center;
`;

const AlbumArtContainer = styled.div`
  max-width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25) inset;
  margin-bottom: 49px;
`;

const AlbumArtImg = styled.img`
  width: 90%;
  margin: 15px;
`;

const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
