import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const TitleBox = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Title>{children}</Title>
      <Division />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  flex-shrink: 0;
`;

const Division = styled.div`
  background: #000;
  flex-grow: 1;
  height: 1px;
`;
