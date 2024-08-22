import styled from 'styled-components';

export const EventContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  position: relative; /* Ensure EventDate is positioned relative to EventContainer */
  overflow: hidden; /* Prevent overflow of EventDate */
`;

export const EventImage = styled.div<{ imageUrl: string }>`
  width: 200px;
  height: 112px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin-right: 15px;
  position: relative;
`;

export const EventDate = styled.div`
  position: absolute;
  background: rgba(40, 85, 125, .96);
  color: white;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  height: 100%;
  width: 40%; /* Initial width */
  box-shadow: inset 2px 0 14px -2px #22486a;
  bottom: 0;
  left: 0;
  text-align: center;
  justify-content: center;
  opacity: 1; /* Visible by default */
  transition: width 0.3s ease; /* Smooth transition for width */

  span {
    display: block;
  }

  ${EventContainer}:hover & {
    width: 100%; /* Expand to full width on hover */
  }
`;

export const EventDateDay = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const EventDateMonth = styled.span`
  font-size: 0.8em;
`;
export const EventDateYear = styled.span`
  font-size: 0.8em;
`;

export const EventContent = styled.div`
  flex: 1;
`;

export const EventTitle = styled.h2`
  font-size: 1.2em;
  margin: 0;
`;

export const EventDescription = styled.p`
  font-size: 0.9em;
`;

export const EventLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;