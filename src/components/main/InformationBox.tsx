import styled from 'styled-components';

type InformationBoxProps = {
  title: string;
  description: string;
};

export const InformationBox = ({ title, description }: InformationBoxProps) => {
  return (
    <div>
      <Title>{title}</Title>
      <Description>- {description}</Description>
    </div>
  );
};

const Title = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

const Description = styled(Title)`
  margin-left: 10px;
`;
