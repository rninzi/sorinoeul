import styled from 'styled-components';
import { TitleBox } from 'components/TitleBox';
import { ALBUM_CREDIT, TITLE } from 'assets/data/constants';

export const AlbumCredit = () => {
  return (
    <Container>
      <TitleBox>{TITLE.albumCredit}</TitleBox>
      <InnerContainer>
        {ALBUM_CREDIT.map((item) => (
          <LineContainer>
            <SubTitle>{item.role}</SubTitle>
            <BodyContainer>
              {item.names.map((name) => (
                <Body>{name}</Body>
              ))}
            </BodyContainer>
          </LineContainer>
        ))}
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 30px);
  margin-left: 30px;
  gap: 28px;
  word-break: keep-all;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 390px;
`;

const LineContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const SubTitle = styled.h3`
  color: #000;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
`;

const BodyContainer = styled.div`
  display: flex;
  column-gap: 5px;
  flex-wrap: wrap;
`;

const Body = styled.p`
  color: #000;
  font-size: 12px;
  line-height: 15px;
`;
