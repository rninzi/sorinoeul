import styled from 'styled-components';

type InformationBoxProps = {
  title: string;
  detail: string;
};

export const InformationBox = ({ title, detail }: InformationBoxProps) => {
  return (
    <div>
      <Body>{title}</Body>
      <Body2>- {detail}</Body2>
    </div>
  );
};

const Body = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const Body2 = styled(Body)`
  margin-left: 10px;
`;
