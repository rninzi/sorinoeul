import { HYPERLINKS } from 'assets/data/constants';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const LinkToUrl = () => {
  const navigate = useNavigate();
  return (
    <Container id="hyperlink">
      {HYPERLINKS.map((item, index) => (
        <LineContainer key={item.title}>
          {index > 0 ? (
            <HyperlinkButton onClick={() => navigate(item.url)}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
            </HyperlinkButton>
          ) : (
            <Hyperlink
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.title}
            >
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
            </Hyperlink>
          )}
        </LineContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: flex-start;
  margin-left: 30px;
  margin-top: 50px;
  width: calc(100% - 30px);
  margin-bottom: 80px;
`;

const LineContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Icon = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

const Hyperlink = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #000;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

const Title = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
  text-underline-position: under;
`;

const HyperlinkButton = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #000;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;
