import styled from 'styled-components';
import { ReactComponent as LogoSvg } from 'assets/images/logo.svg';
import { COPYRIGHT } from 'assets/data/constants';

export const Footer = () => {
  return (
    <Container>
      <Logo />
      <Copyright>{COPYRIGHT.footer}</Copyright>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 90px;
  background: #f4f4f5;
  max-width: 450px;
  width: 100%;
`;

const Logo = styled(LogoSvg)`
  width: 52px;
  height: 52px;
`;

const Copyright = styled.p`
  color: #000;
  font-size: 10px;
  line-height: 17px;
`;
