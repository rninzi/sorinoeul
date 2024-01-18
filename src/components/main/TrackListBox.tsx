import styled from 'styled-components';
import albumArt from 'assets/images/album-art.png';
import { TrackListItem } from './TrackListItem';
import { trackListData } from 'assets/data/mockupData';
import { useNavigate } from 'react-router-dom';

export const TrackListBox = () => {
  const navigate = useNavigate();

  return (
    <Container id="trackList">
      <AlbumArtContainer>
        <AlbumArtImg src={albumArt} />
      </AlbumArtContainer>
      <TrackList>
        {trackListData.map((data) => (
          <TrackListItem
            key={data.trackNumber}
            track={data}
            onClick={() =>
              data.trackNumber < 7 && navigate(`/score/${data.trackNumber}`)
            }
          />
        ))}
      </TrackList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 88px;
  margin-bottom: 105px;
  align-items: center;
  max-width: 360px;
  width: 100%;
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
  width: 100%;
`;
