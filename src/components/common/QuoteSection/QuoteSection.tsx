import { PortableText } from "@portabletext/react";
import { FC } from "react";
import components from "../BlockContent/components";
import {
  Element,
  Header,
  InnerContainer1,
  InnerContainer2,
  InnerContainerLeft,
  InnerContainerRight,
} from "./QuoteSection.styled";

type QuoteSectionProps = {
  id?: string;
  header: any;
  leftColumn: any; // Text content for the quote-style column
  rightColumn: any; // Text content for the normal text column
  backgroundColor?: string;
  backgroundImage?: string;
};

const QuoteSection: FC<QuoteSectionProps> = ({
  id,
  header,
  leftColumn,
  rightColumn,
  backgroundColor,
  backgroundImage,
}) => {
  return (
    <Element id={id || ""} $background={backgroundColor}>
      <Header>
        <PortableText components={components} value={header} />
      </Header>
      <InnerContainer1 $bgImg={backgroundImage}>
        <InnerContainer2>
          <InnerContainerLeft>
            <PortableText components={components} value={leftColumn} />
          </InnerContainerLeft>
          <InnerContainerRight>
            <PortableText components={components} value={rightColumn} />
          </InnerContainerRight>
        </InnerContainer2>
      </InnerContainer1>
    </Element>
  );
};

export default QuoteSection;
