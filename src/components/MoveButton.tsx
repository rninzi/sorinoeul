import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type MoveButtonProps = {
  onClick: () => void;
};

export const MoveButton = ({
  onClick,
  children,
}: PropsWithChildren<MoveButtonProps>) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  color: #000;
  font-size: 14px;
  font-style: italic;
  line-height: 17px;
`;
