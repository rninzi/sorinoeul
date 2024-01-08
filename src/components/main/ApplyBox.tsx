import styled from 'styled-components';
import { TitleBox } from '../TitleBox';
import teamImg from '../../assets/images/team-image.png';
import { InformationBox } from './InformationBox';
import { APPLY, SERVICE_INFO, TITLE } from '../../assets/data/constants';
import { ReactComponent as DownloadSvg } from '../../assets/icons/application-download-icon.svg';

export const ApplyBox = () => {
  return (
    <Container>
      <TitleBox>{TITLE.apply}</TitleBox>
      <img src={teamImg} alt="소리노을 이미지" />
      <InnerContainer>
        <Body1>{APPLY.notify}</Body1>
        {SERVICE_INFO.map((item) => (
          <InformationBox title={item.title} detail={item.detail} />
        ))}
        <BottomBox>
          <Body1>
            {APPLY.inquiry} : {APPLY.email}
          </Body1>
          <DownloadBox
            href={APPLY.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadSvg />
            <Body2>{APPLY.download}</Body2>
          </DownloadBox>
        </BottomBox>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  margin: 105px 0 0 30px;
  word-break: keep-all;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 390px;
`;

const Body1 = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const BottomBox = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const Body2 = styled(Body1)`
  font-weight: 600;
`;

const DownloadBox = styled.a`
  display: flex;
  border: 1px dashed gray;
  border-radius: 2px;
  gap: 3px;
  padding: 1px 6px;
  align-items: center;
  cursor: pointer;
`;
