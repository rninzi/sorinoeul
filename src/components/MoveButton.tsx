import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const MoveButton = ({ children }: PropsWithChildren) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  color: #000;
  font-size: 14px;
  font-style: italic;
  line-height: 17px;
`;
