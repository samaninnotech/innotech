import Link from "@/i18n/Link";
import styled from "styled-components";

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

export const EventContainer = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const EventInfo = styled.div`
  padding: 10px 0;
`;

export const EventMeta = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  color: gray;
`;

export const EventDate = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url("https://img.icons8.com/material-outlined/24/000000/calendar.png");
    background-size: cover;
    margin-right: 5px;
  }
`;

export const EventTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;

  &:hover {
    color: #25567a;
  }
`;

export const EventDescription = styled.p`
  margin: 10px 0;
`;

export const EventReadMore = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  span {
    margin-left: 5px;
  }
  &:hover {
    text-decoration: none;
  }
`;