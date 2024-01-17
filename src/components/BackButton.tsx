import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ReactComponent as BackButtonIcon } from 'assets/icons/back-button-icon.svg';

export const BackButton = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <BackButtonIcon />
      {children}
    </Container>
  );
};

const Container = styled.button`
  margin-top: 10px;
  display: flex;
  gap: 6px;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  align-items: center;
  max-width: 340px;
  justify-content: flex-end;
`;
