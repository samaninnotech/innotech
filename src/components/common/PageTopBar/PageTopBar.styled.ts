import { mediaRules } from '@/themes/media-breakpoints';
import styled from 'styled-components';

export const PageTopBarContainer = styled.div`
  background-color: rgba(255, 255, 255, 0); 
  color: white;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 400;
  width: 100%;
  z-index: 1000;
  position: absolute; 
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 14px;
  line-height: 1.78;
  letter-spacing: 0em;
  margin: 0px;
  a {
    text-decoration: none;
    color: inherit;
  }
  `;

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 0 15px;
  display: none; 
  box-sizing: inherit;
  ${mediaRules.sm} {
    display: block; 
    max-width: 720px;
  }
  ${mediaRules.md} {
    display: block; 
    max-width: 940px;
  }
  ${mediaRules.lg} {
    display: block; 
    max-width: 1100px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  margin: 0px -15px;
`;

export const TopBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0; /* Add padding to ensure some space around the text */
`;

export const TopBarLeft = styled.div``;



export const TopBarRight = styled.div``;

export const TopBarInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const InfoItem = styled.li`
  margin-left: 15px;

  &:first-child {
    margin-left: 0;
  }
`;

export const InfoLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

export const InfoIcon = styled.i`
  margin-right: 5px;
`;

export const InfoText = styled.span`
  font-weight: bold;
`;
