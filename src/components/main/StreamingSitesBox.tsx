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
  margin: 20px 0 0 30px;
  word-break: keep-all;
  white-space: pre-line;
`;

const StreamingInfo = styled.p`
  color: #000;
  font-size: 11px;
  line-height: 13px;
`;
