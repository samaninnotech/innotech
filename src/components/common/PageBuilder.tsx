import { sanityUrlFor } from "@/sanity/sanity-client";
import {
  ConsultationSection,
  HeroSection,
  HomePageTopPost,
  InfoSection,
  isConsultationSection,
  isHeroSection,
  isHomePageTopPost,
  isInfoSection,
  isOnlyTextSection,
  isOurCompanySection,
  isPageTopBanner,
  isPageTopBar,
  isPartnerShipSection,
  isQuoteSection,
  isSolutionsSection,
  isTabItemsSection,
  isTeamList,
  isVideoSection,
  isVisionsSection,
  OnlyTextSection,
  OurCompanySection,
  PageTopBanner,
  PageTopBar,
  PartnerShipSection,
  QuoteSection,
  Section,
  SolutionsSection,
  TabItemsSection,
  TeamList,
  VideoSection,
  VisionsSection
} from "@/sanity/types";
import { FC, ReactNode } from "react";
import {
  ConsultationSection as ConsultationSectionComponent,
  HeroSectionComponent,
  HomePageTopPost as HomePageTopPostComponent,
  InfoSection as InfoSectionComponent,
  OnlyTextSection as OnlyTextSectionComponent,
  OurCompanySection as OurCompanySectionComponent,
  PageTopBanner as PageTopBannerComponent,
  PageTopBar as PageTopBarComponent,
  PartnerShipSection as PartnerShipSectionComponent,
  QuoteSection as QuoteSectionComponent,
  SolutionsSection as SolutionsSectionComponent,
  TabItemsSection as TabItemsSectionComponent,
  TeamList as TeamListcomponent,
  VideoSection as VideoSectionComponent,
  VisionsSection as VisionsSectionComponent
} from ".";
// import {
//   Carousel as CarouselComponent,
//   CountersSectionComponent,
//   FAQSection as FAQSectionComponent,
//   HeroSection as HeroSectionComponent,
//   InfoSection as InfoSectionComponent,
//   NewsLetterForm,
//   TextLinkSection as TextLinkSectionComponent,
// } from ".";
// import AssistancePage from "../Pages/AssistancePage";
// import ContactsPage from "../Pages/ContactsPage";
// import BlockSectionComponent from "./BlockSection";
// import CardLinkSection from "./CardLinkSection";
// import ImageLinkSection from "./ImageLinkSection";
// import LargeBackgroundSectionComponent from "./LargeBackgroundSection";

type PageBuilderProps = {
  sections: Section[];
  locale: string;
};

const PageBuilder: FC<PageBuilderProps> = async ({ sections, locale }) => {
  if (!sections?.length) {
    return <></>;
  }

  const renderedSections: ReactNode[] = [];
  for (const s of sections) {
    if (isPageTopBar(s)) {
        renderedSections.push(buildPageTopBar(s));
    } else if (isHomePageTopPost(s)) {
        renderedSections.push(buildHomePageTopPost(s));
      
    } else if (isConsultationSection(s)) {
      renderedSections.push(buildConsultationSection(s));
    }
    else if (isSolutionsSection(s)) {
      renderedSections.push(buildSolutionsSection(s));
    }  else if (isHeroSection(s)) {
        renderedSections.push(buildHeroSection(s));
    } else if (isPartnerShipSection(s)) {
      renderedSections.push(buildPartnershipSection(s));
  } 
    else if (isOurCompanySection(s)) {
      renderedSections.push(buildOurCompanySection(s));
  }
  else if (isVideoSection(s)) {
    renderedSections.push(buildVideoSection(s));
  }else if (isVisionsSection(s)) {
    renderedSections.push(buildVisionsSection(s));
  }
  else if (isTeamList(s)) {
    renderedSections.push(buildTeamList(s));
  }
  else if (isPageTopBanner(s)) {
      renderedSections.push(buildPageTopBanner(s));
    }
    else if (isQuoteSection(s)) {
      renderedSections.push(buildQuoteSection(s));
    } else if (isInfoSection(s)) {
      renderedSections.push(buildInfoSection(s));
    }
    else if (isTabItemsSection(s)) {
      renderedSections.push(buildTabItemsSection(s));
    }
    else if (isOnlyTextSection(s)) {
      renderedSections.push(buildOnlyTextSection(s));
    }
    // if (isContactsSection(s)) {
    //   const accountInfo = await getGlobalAccountInfo(locale);
    //   if (accountInfo) {
    //     renderedSections.push(buildContactsPage(s, accountInfo));
    //   }
    // } else if (isAssistanceSection(s)) {
    //   const assistanceInfo = await getAssistanceInfo();
    //   if (assistanceInfo) {
    //     renderedSections.push(buildAssistancePage(s, assistanceInfo));
    //   }
    // } else if (isInfoSection(s)) {
    //   renderedSections.push(buildInfoSection(s));
    // } else if (isImageLinksSection(s)) {
    //   renderedSections.push(buildImageLinksSection(s));
    // } else if (isHeroSection(s)) {
    //   renderedSections.push(buildHeroSection(s));
    // } else if (isFAQSection(s)) {
    //   renderedSections.push(buildFAQSection(s));
    // } else if (isCarousel(s)) {
    //   renderedSections.push(buildCarousel(s));
    // } else if (isTextLinkSection(s)) {
    //   renderedSections.push(buildTextLinksSection(s));
    // } else if (isCountersSection(s)) {
    //   renderedSections.push(buildCountersSection(s));
    // } else if (isCardLinkSection(s)) {
    //   renderedSections.push(buildCardLinkSection(s));
    // } else if (isBlockSection(s)) {
    //   renderedSections.push(buildBlockSection(s));
    // } else if (isNewsletterFormSection(s)) {
    //   renderedSections.push(buildNewsletterFormSection(s));
    // } else if (isLargeBackgroundSection(s)) {
    //   renderedSections.push(buildLargeBackgroundSection(s));
    // }
  }

  return <>{renderedSections}</>;
};
const buildPageTopBar = (s: PageTopBar) => {
  const { contactLink, contactText, infoLink, infoText  } = s;
  return (
    <PageTopBarComponent contactLink={contactLink} contactText={contactText} infoLink={infoLink} infoText={infoText }      
    />
  );
};
const buildHomePageTopPost = (s: HomePageTopPost) => {
  const { backgroundImage  } = s;
  return (
    <HomePageTopPostComponent backgroundImage={sanityUrlFor(backgroundImage).url()}       
    />
  );
};

const buildConsultationSection = (s : ConsultationSection) => {
  const { consultationSwiperSlides } = s;
  return (
    <ConsultationSectionComponent
      consultationSwiperSlides={consultationSwiperSlides}
    />
  );
};
const buildSolutionsSection = (s : SolutionsSection) => {
  const { solutionCards, title, text } = s;
  return (
    <SolutionsSectionComponent title={title} text={text} solutionCards={solutionCards}/>
  );
};

const buildPartnershipSection = (s : PartnerShipSection) => {
  const {header, partnershipCards} = s;
  return (
    <PartnerShipSectionComponent header={header} partnershipCards={partnershipCards}/>
  )
}

const buildOurCompanySection = (s : OurCompanySection) => {
  const {accordionItems} = s;
  return (
    <OurCompanySectionComponent accordionItems={accordionItems}/>
  )
}
const buildVideoSection = (s : VideoSection) => {
const { centralImage, leftTopImage, rightTopImage, leftBottomImage, rightBottomImage, videoLink} = s;
  return (
    <VideoSectionComponent 
      centralImage={centralImage}
      leftTopImage={leftTopImage}
      leftBottomImage={leftBottomImage} 
      rightBottomImage={rightBottomImage}
      rightTopImage={rightTopImage}
      videoLink={videoLink}
    />
  )
}
const buildVisionsSection = (s : VisionsSection) => {
  const { sectionTitle, topHeading, footerText, visionCards} = s;
    return (
      <VisionsSectionComponent sectionTitle={sectionTitle} topHeading={topHeading} footerText={footerText} visionCards={visionCards}        
      />
    )
  }

  const buildTeamList = (s : TeamList) => {
    const { header, teamMembers} = s;
      return (
        <TeamListcomponent header={header} teamMembers={teamMembers}/>
      )
    }
    
  const buildPageTopBanner = (s : PageTopBanner) => {
    const {imageUrl, altText } = s;
      return (
        <PageTopBannerComponent imageUrl={imageUrl} altText={altText}/>
      )
    }
  const buildQuoteSection = (s : QuoteSection) => {
    const {header, left_column, right_column, backgroundColor, backgroundImage } = s;
      return (
        <QuoteSectionComponent header={header} leftColumn={left_column} rightColumn={right_column} backgroundColor={backgroundColor} backgroundImage={backgroundImage}/>
      )
    }
  const buildInfoSection = (s: InfoSection) => {
  const { header,numberOfColumns, infoBlocks} = s;
  return (
    <InfoSectionComponent
      header={header}
      numberOfColumns={numberOfColumns}
      infoBlocks={infoBlocks}
    />
  );
};
const buildTabItemsSection = (s: TabItemsSection) => {
  const { header, tabItems} = s;
  return (
    <TabItemsSectionComponent
      header={header}
      tabItems={tabItems}
    />
  );
};
const buildOnlyTextSection = (s: OnlyTextSection) => {
  const {text} = s;
  return (
    <OnlyTextSectionComponent text={text}/>
  )
}


// const buildCardLinkSection = (s: CardLinksSection) => {
//   const { title, card_links, _key, background } = s;
//   return (
//     <CardLinkSection
//       title={title}
//       key={_key}
//       cards={card_links || []}
//       background={background}
//     />
//   );
// };

// const buildInfoSection = (s: InfoSection) => {
//   const { title, info_blocks, _key, background } = s;

//   return (
//     <InfoSectionComponent
//       key={_key}
//       heading={title}
//       blocks={info_blocks}
//       background={background}
//     />
//   );
// };

// const buildImageLinksSection = (s: ImageLinksSection) => {
//   const { _key, title, paragraph, image_links, background } = s;
//   return (
//     <ImageLinkSection
//       key={_key}
//       heading={title}
//       paragraph={paragraph}
//       background={background}
//       imgLinks={image_links}
//     ></ImageLinkSection>
//   );
// };

const buildHeroSection = (s: HeroSection) => {
  const { _key, anchor, left_column, right_column, backgroundColor, backgroundImage, height } = s;
  return (
    <HeroSectionComponent
      key={_key}
      id={anchor}
      leftColumn={left_column}
      rightColumn={right_column}
      backgroundColor={backgroundColor}  
      backgroundImage={backgroundImage}   
      height={height}
    />
  );
};


// const buildFAQSection = (s: FAQSection) => {
//   const { _key, faq_list, background, title, paragraph } = s;
//   return (
//     <FAQSectionComponent
//       key={_key}
//       background={background}
//       faqList={faq_list}
//       title={title}
//       paragraph={paragraph}
//     ></FAQSectionComponent>
//   );
// };

// const buildCarousel = (s: Carousel) => {
//   const { _key, title, images, background } = s;
//   const imgSrc = images?.map((i) => sanityUrlFor(i).url()) || [];
//   return (
//     <CarouselComponent
//       key={_key}
//       title={title}
//       imgSrc={imgSrc}
//       imgWidth={1000}
//       imgHeight={1000}
//       background={background}
//     ></CarouselComponent>
//   );
// };

// const buildTextLinksSection = (s: TextLinksSection) => {
//   const { _key, title, paragraph, text_links, background } = s;
//   return (
//     <TextLinkSectionComponent
//       key={_key}
//       heading={title}
//       paragraph={paragraph}
//       background={background}
//       textLinkList={text_links}
//     ></TextLinkSectionComponent>
//   );
// };

// const buildCountersSection = (s: CountersSection) => {
//   const { _key, duration, counters, background } = s;
//   const msDuration = duration * 1000;
//   return (
//     <CountersSectionComponent
//       key={_key}
//       duration={msDuration}
//       counters={counters || []}
//       background={background}
//     ></CountersSectionComponent>
//   );
// };

// const buildContactsPage = (
//   s: ContactsSection,
//   accountInfo: GlobalAccountInfoResult,
// ) => {
//   return (
//     <ContactsPage
//       key={s._key}
//       addresses={accountInfo.account_references || []}
//       emails={accountInfo.emails || []}
//     ></ContactsPage>
//   );
// };

// const buildAssistancePage = (
//   s: AssistanceSection,
//   assistanceInfo: AssistanceInfoResult,
// ) => {
//   const { email, phone, address } = assistanceInfo;
//   return (
//     <AssistancePage
//       key={s._key}
//       email={email}
//       phone={phone}
//       address={address}
//     ></AssistancePage>
//   );
// };

// const buildBlockSection = (s: BlockSection) => {
//   return <BlockSectionComponent section={s} />;
// };

// const buildNewsletterFormSection = (s: NewsletterFormSection) => {
//   const {
//     title,
//     image,
//     accept_marketing_message,
//     legal_consent_message,
//     background,
//   } = s;
//   return (
//     <NewsLetterForm
//       heading={title}
//       imgSrc={sanityUrlFor(image).url()}
//       marketingConsentMessage={accept_marketing_message}
//       legalConsentMessage={legal_consent_message}
//       background={background}
//     ></NewsLetterForm>
//   );
// };

// const buildLargeBackgroundSection = (s: LargeBackgroundSection) => {
//   const { title, image, link } = s;
//   return (
//     <LargeBackgroundSectionComponent
//       title={title}
//       bgImage={sanityUrlFor(image).url()}
//       heroLink={link}
//     />
//   );
// };
export default PageBuilder;
