import styled from 'styled-components';
import { WORSHIP_INFO_LIST } from 'assets/data/constants';

type WorshipInfoBoxProps = {
  imageSrc: string;
  target: string;
  place: string;
  time: string;
  youtubeID: string;
  youtubeURL: string;
};

export const WorshipInfoBox = (worshipInfo: WorshipInfoBoxProps) => {
  return (
    <Container>
      <Image src={worshipInfo.imageSrc} />
      <InfoList>
        <InfoItem>
          {WORSHIP_INFO_LIST.target}
          {worshipInfo.target}
        </InfoItem>
        <InfoItem>
          {WORSHIP_INFO_LIST.place}
          {worshipInfo.place}
        </InfoItem>
        <InfoItem>
          {WORSHIP_INFO_LIST.time}
          {worshipInfo.time}
        </InfoItem>
        <InfoItem>
          {WORSHIP_INFO_LIST.youtube}
          <Anchor
            href={worshipInfo.youtubeURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {worshipInfo.youtubeID}
          </Anchor>
        </InfoItem>
      </InfoList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Image = styled.img`
  max-width: 132px;
  max-height: 132px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.li`
  color: #000;
  font-size: 13px;
  line-height: 16px;
  list-style-type: disc;
`;

const Anchor = styled.a`
  text-decoration: underline;
  text-underline-position: under;
  font-size: 13px;
  line-height: 16px;
`;
