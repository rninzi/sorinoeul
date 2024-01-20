import styled from 'styled-components';
import { ALBUM_INTRODUCTION } from 'assets/data/constants';

export const IntroductionBox = () => {
  return (
    <>
      <AlbumIntro>{ALBUM_INTRODUCTION}</AlbumIntro>
    </>
  );
};

const AlbumIntro = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin: 0 20px 0 30px;
  white-space: pre-line;
  max-width: 390px;
  align-self: flex-start;
`;
