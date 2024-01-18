import styled from 'styled-components';
import { TitleBox } from 'components/TitleBox';
import { TITLE, WORSHIP_INFO } from 'assets/data/constants';
import { WorshipInfoBox } from './WorshipInfoBox';

export const HighSchoolWorshipBox = () => {
  return (
    <Container>
      <TitleBox>{TITLE.worshipInfo}</TitleBox>
      <InnerContainer>
        {WORSHIP_INFO.map((item, index) => (
          <WorshipInfoBox
            key={index}
            imageSrc={item.imgSrc}
            target={item.target}
            place={item.place}
            time={item.time}
            youtubeID={item.youtubeID}
            youtubeURL={item.youtubeURL}
          />
        ))}
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  margin: 105px 0 90px 30px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;
