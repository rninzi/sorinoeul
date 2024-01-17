import styled from 'styled-components';

type TrackCreditItemProps = {
  role: string;
  names?: string[] | null;
};

export const TrackCreditItem = ({ role, names }: TrackCreditItemProps) => {
  return (
    <Container>
      <Role>{role}</Role>
      <NamesContainer>
        {names?.map((name) => (
          <Name>{name}</Name>
        ))}
      </NamesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Role = styled.h3`
  color: #000;
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
`;

const NamesContainer = styled.div`
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
`;

const Name = styled.p`
  color: #000;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`;
