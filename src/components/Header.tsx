import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../assets/images/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  padding: 0 22px;
  height: 72px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
