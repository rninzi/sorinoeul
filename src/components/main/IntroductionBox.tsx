import styled from 'styled-components';
import albumArt from 'assets/images/album-art.png';
import { ALBUM_INTRODUCTION } from 'assets/data/constants';

export const IntroductionBox = () => {
  return (
    <>
      <AlbumIntro>{ALBUM_INTRODUCTION}</AlbumIntro>
    </>
  );
};

const AlbumArtContainer = styled.div`
  max-width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25) inset;
  margin-top: 53px;
  margin-bottom: 35px;
`;

const AlbumArt = styled.img`
  max-width: 267px;
  margin: 15px;
`;

const AlbumIntro = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin: 0 20px 0 30px;
  white-space: pre-line;
  word-break: keep-all;
  max-width: 390px;
  align-self: flex-start;
`;
