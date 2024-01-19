import styled from 'styled-components';
import { TitleBox } from 'components/TitleBox';
import teamImg from 'assets/images/team-image.png';
import { InformationBox } from './InformationBox';
import { APPLY, SERVICE_INFO, TITLE } from 'assets/data/constants';
import { ReactComponent as DownloadSvg } from 'assets/icons/application-download-icon.svg';
import { downloadFile } from 'utils/downloadFile';

export const ApplyBox = () => {
  return (
    <Container>
      <TitleBox>{TITLE.apply}</TitleBox>
      <img src={teamImg} alt="소리노을 이미지" />
      <InnerContainer>
        <Notification>{APPLY.notify}</Notification>
        {SERVICE_INFO.map((item) => (
          <InformationBox
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
        <Notification>{APPLY.promotion}</Notification>
        <BottomBox>
          <Notification>
            {APPLY.inquiry} : {APPLY.email}
          </Notification>
          <DownloadBox
            onClick={() => downloadFile(APPLY.fileUrl, APPLY.fileName)}
          >
            <DownloadSvg />
            <DownloadURL>{APPLY.download}</DownloadURL>
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
  margin: 0 0 0 30px;
  word-break: keep-all;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 390px;
`;

const Notification = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const BottomBox = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  padding-right: 10px;
`;

const DownloadURL = styled(Notification)`
  font-weight: 600;
`;

const DownloadBox = styled.button`
  display: flex;
  border: 1px dashed gray;
  border-radius: 2px;
  gap: 3px;
  padding: 1px 6px;
  align-items: center;
`;
