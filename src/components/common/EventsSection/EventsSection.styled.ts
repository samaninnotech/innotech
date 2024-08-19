import styled from 'styled-components';

export const EventsSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 720px;
  }

  @media (min-width: 990px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
`;
