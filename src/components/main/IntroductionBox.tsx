import styled from 'styled-components';
import { ReactComponent as AlbumLogoSvg } from 'assets/images/album-logo.svg';
import { ALBUM_INTRODUCTION } from 'assets/data/constants';

export const IntroductionBox = () => {
  return (
    <>
      <AlbumLogo />
      <AlbumIntro>{ALBUM_INTRODUCTION}</AlbumIntro>
    </>
  );
};

const AlbumLogo = styled(AlbumLogoSvg)`
  margin-top: 53px;
  margin-bottom: 35px;
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
