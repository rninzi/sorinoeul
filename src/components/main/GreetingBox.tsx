import styled from 'styled-components';
import pastor from '../../assets/images/pastor.png';
import { GREETINGS, PASTOR, POSITION } from '../../assets/data/greetings';
import { ReactComponent as SignSvg } from '../../assets/images/sign.svg';

export const GreetingBox = () => {
  return (
    <Container>
      <ImageBox src={pastor} />
      <InnerContainer>
        <Greetings>{GREETINGS}</Greetings>
        <BottomContainer>
          <div>
            <Name>{PASTOR}</Name>
            <Name>{POSITION}</Name>
          </div>
          <SignSvg />
        </BottomContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 366px;
  height: 366px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ImageBox = styled.img`
  margin-top: 26px;
  margin-right: 37px;
  width: 141px;
  height: 201px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GreetingsStyle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

const Greetings = styled(GreetingsStyle)`
  margin: 0 20px;
  white-space: pre-line;
  word-break: keep-all;
`;

const Name = styled(GreetingsStyle)`
  margin: 0 0 0 20px;
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 20px;
`;
