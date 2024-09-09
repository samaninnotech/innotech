"use client";
import { FC } from "react";
import {
  Container,
  InfoIcon,
  InfoLink,
  InfoText,
  PageTopBarContainer,
  Row,
  TopBarInfo,
  TopBarLeft,
  TopBarRight,
  TopBarWrap,
} from "./PageTopBar.styled";

type TopBarProps = {
  contactLink: string;
  contactText: string;
  infoLink: string;
  infoText: string;
};

const PageTopBar: FC<TopBarProps> = ({
  contactLink,
  contactText,
  infoLink,
  infoText,
}) => {
  return (
    <PageTopBarContainer>
      <Container>
        <Row>
          <TopBarWrap>
            <TopBarLeft>
              <a href={contactLink} className="font-medium display-inline">
                {contactText}
              </a>
            </TopBarLeft>
            <TopBarRight>
              <TopBarInfo>
                <InfoLink href={infoLink} className="info-link">
                  <InfoIcon className="info-icon fa fa-phone" />
                  <InfoText>
                    <strong>{infoText}</strong>
                  </InfoText>
                </InfoLink>
              </TopBarInfo>
            </TopBarRight>
          </TopBarWrap>
        </Row>
      </Container>
    </PageTopBarContainer>
  );
};

export default PageTopBar;
