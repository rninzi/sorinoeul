import styled from 'styled-components';
import { TitleBox } from 'components/TitleBox';
import {
  ALBUM_CREDIT,
  ALBUM_CREDIT_LINE_BREAK,
  COPYRIGHT,
  TITLE,
} from 'assets/data/constants';
import { useWindowSize } from 'hooks/useWindowSize';

export const AlbumCredit = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <TitleBox>{TITLE.albumCredit}</TitleBox>
      <InnerContainer>
        {ALBUM_CREDIT.map((item, id) => (
          <>
            <LineContainer key={item.role}>
              <Role>{item.role}</Role>
              <NamesContainer>
                {item.names.map((name, index) => (
                  <Name key={index}>{name}</Name>
                ))}
              </NamesContainer>
            </LineContainer>
            {ALBUM_CREDIT_LINE_BREAK.map(
              (lineNumber) =>
                id === lineNumber &&
                (id === 3 && width < 422 ? <></> : <LineBreakContainer />)
            )}
          </>
        ))}
      </InnerContainer>
      <Copyright>{COPYRIGHT.albumCredit}</Copyright>
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
  max-width: 400px;
`;

const LineContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const LineBreakContainer = styled.div`
  height: 11px;
`;

const Role = styled.h3`
  color: #000;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  min-width: fit-content;
`;

const NamesContainer = styled.div`
  display: flex;
  column-gap: 5px;
  flex-wrap: wrap;
`;

const Name = styled.p`
  color: #000;
  font-size: 12px;
  line-height: 15px;
`;

const Copyright = styled.p`
  color: #000;
  font-size: 10px;
  line-height: 15px;
  white-space: pre-line;
  word-break: keep-all;
`;
