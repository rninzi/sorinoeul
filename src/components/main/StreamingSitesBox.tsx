import styled from 'styled-components';
import { STREAMING_INFO } from 'assets/data/constants';

export const StreamingSitesBox = () => {
  return (
    <Container>
      <StreamingInfo>{STREAMING_INFO}</StreamingInfo>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 30px);
  margin: 50px 0 0 30px;
  word-break: keep-all;
`;

const StreamingInfo = styled.p`
  color: #000;
  font-size: 15px;
  line-height: 18px;
`;
