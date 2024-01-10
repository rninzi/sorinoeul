import styled from 'styled-components';
import { TitleBox } from '../TitleBox';
import { TITLE } from '../../assets/data/constants';
import melonLogo from '../../assets/images/logo-melon.png';
import genieLogo from '../../assets/images/logo-genie.png';
import youtubeMusicLogo from '../../assets/images/logo-youtube-music.png';
import bugsLogo from '../../assets/images/logo-bugs.png';

export const StreamingSitesBox = () => {
  return (
    <Container>
      <TitleBox>{TITLE.streaming}</TitleBox>
      <InnerContainer>
        <LeftLogo src={melonLogo} />
        <GenieLogo src={genieLogo} />
        <LeftLogo src={youtubeMusicLogo} />
        <RightLogo src={bugsLogo} />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 30px);
  margin: 105px 0 0 30px;
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 70px;
  margin-top: 65px;
  justify-items: center;
  align-items: center;
`;

const LeftLogo = styled.img`
  width: 120px;
  height: 35px;
`;

const RightLogo = styled.img`
  width: 120px;
  height: 35px;
  justify-self: left;
`;

const GenieLogo = styled(RightLogo)`
  height: 40px;
`;
