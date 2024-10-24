import { buildEventDate } from "@/lib/middlewares/eventDateParser";
import {
  getBlogPosts,
  getEvents,
  getEventsCount,
  getPostsCount,
} from "@/sanity/queries";
import { sanityUrlFor } from "@/sanity/sanity-client";
import {
  BlogHeaderSection,
  BlogLastUpdatesSection,
  BlogPostsListSection,
  Carousel,
  ConsultationSection,
  ContactForm,
  ContactSection,
  Event,
  EventHeaderSection,
  EventRegistrationSection,
  EventsLastUpdatesSection,
  EventsListSection,
  FAQSection,
  GetInTouchSection,
  HeroSection,
  HomePageTopPost,
  InfoSection,
  isBlogHeaderSection,
  isBlogLastUpdatesSection,
  isBlogPostsListSection,
  isCarousel,
  isConsultationSection,
  isContactForm,
  isContactSection,
  isEventHeaderSection,
  isEventRegistrationSection,
  isEventsLastUpdatesSection,
  isEventsListSection,
  isFAQSection,
  isGetInTouchSection,
  isHeroSection,
  isHomePageTopPost,
  isInfoSection,
  isJobApplication,
  isJobOfferSection,
  isOnlyTextSection,
  isOurCompanySection,
  isPageMiddleBanner,
  isPageTopBanner,
  isPageTopBar,
  isPartnerShipSection,
  isQuoteSection,
  isSolutionsSection,
  isTabItemsSection,
  isTeamList,
  isTickItemsSection,
  isVideoSection,
  isVisionsSection,
  isYoutubeSection,
  JobApplication,
  JobOfferSection,
  OnlyTextSection,
  OurCompanySection,
  PageMiddleBanner,
  PageTopBanner,
  PageTopBar,
  PartnerShipSection,
  Post,
  QuoteSection,
  Section,
  SolutionsSection,
  TabItemsSection,
  TeamList,
  TickItemsSection,
  VideoSection,
  VisionsSection,
  YoutubeSection,
} from "@/sanity/types";
import { FC, ReactNode } from "react";
import {
  Carousel as CarouselComponent,
  ConsultationSection as ConsultationSectionComponent,
  ContactForm as ContactFormComponent,
  ContactSection as ContactSectionComponent,
  EventRegistrationSection as EventRegistrationSectionComponent,
  EventsLastUpdatesSection as EventsLastUpdatesSectionComponent,
  FAQSection as FAQSectionComponent,
  GetInTouchSection as GetInTouchSectionComponent,
  HeroSectionComponent,
  HomePageTopPost as HomePageTopPostComponent,
  InfoSection as InfoSectionComponent,
  JobApplication as JobApplicationComponent,
  JobOfferSection as JobOfferSectionComponent,
  OnlyTextSection as OnlyTextSectionComponent,
  OurCompanySection as OurCompanySectionComponent,
  PageMiddleBanner as PageMiddleBannerComponent,
  PageTopBanner as PageTopBannerComponent,
  PageTopBar as PageTopBarComponent,
  PartnerShipSection as PartnerShipSectionComponent,
  QuoteSection as QuoteSectionComponent,
  SolutionsSection as SolutionsSectionComponent,
  TabItemsSection as TabItemsSectionComponent,
  TeamList as TeamListcomponent,
  TickItemsSection as TickItemsSectionComponent,
  VideoSection as VideoSectionComponent,
  VisionsSection as VisionsSectionComponent,
  YoutubeSection as YoutubeSectionComponent,
} from ".";
import BlogHeaderComponent from "./Blog/BlogHeader";
import BlogLastUpdate from "./Blog/BlogLastUpdates";
import PostsList from "./Blog/PostsList";
import EventHeaderComponent from "./Event/EventHeader";
import EventsList from "./Event/EventsList";

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
    } else if (isSolutionsSection(s)) {
      renderedSections.push(buildSolutionsSection(s));
    } else if (isHeroSection(s)) {
      renderedSections.push(buildHeroSection(s));
    } else if (isPartnerShipSection(s)) {
      renderedSections.push(buildPartnershipSection(s));
    } else if (isOurCompanySection(s)) {
      renderedSections.push(buildOurCompanySection(s));
    } else if (isVideoSection(s)) {
      renderedSections.push(buildVideoSection(s));
    } else if (isVisionsSection(s)) {
      renderedSections.push(buildVisionsSection(s));
    } else if (isTeamList(s)) {
      renderedSections.push(buildTeamList(s));
    } else if (isPageTopBanner(s)) {
      renderedSections.push(buildPageTopBanner(s));
    } else if (isQuoteSection(s)) {
      renderedSections.push(buildQuoteSection(s));
    } else if (isInfoSection(s)) {
      renderedSections.push(buildInfoSection(s));
    } else if (isTabItemsSection(s)) {
      renderedSections.push(buildTabItemsSection(s));
    } else if (isOnlyTextSection(s)) {
      renderedSections.push(buildOnlyTextSection(s));
    } else if (isTickItemsSection(s)) {
      renderedSections.push(buildTickItemsSection(s));
    } else if (isGetInTouchSection(s)) {
      renderedSections.push(buildGetInTouchSection(s));
    } else if (isContactSection(s)) {
      renderedSections.push(buildContactSection(s));
    } else if (isJobOfferSection(s)) {
      renderedSections.push(buildJobOfferSection(s));
    } else if (isBlogHeaderSection(s)) {
      renderedSections.push(buildBlogHeaderSection(s));
    } else if (isBlogPostsListSection(s)) {
      const posts = await getBlogPosts(locale, 12, undefined);
      const postsCount = await getPostsCount(locale);
      renderedSections.push(buildBlogPostsListSection(s, posts, postsCount));
    } else if (isBlogLastUpdatesSection(s)) {
      const posts = await getBlogPosts(locale, 12, undefined);
      renderedSections.push(buildBlogLastUpdatesSection(s, posts));
    } else if (isCarousel(s)) {
      renderedSections.push(buildCarousel(s));
    } else if (isEventHeaderSection(s)) {
      renderedSections.push(buildEventHeaderSection(s));
    } else if (isEventsListSection(s)) {
      const events = await getEvents(locale, 12, undefined);
      const postsCount = await getEventsCount(locale);
      renderedSections.push(buildEventsListSection(s, events, postsCount));
    } else if (isEventsLastUpdatesSection(s)) {
      const events = await getEvents(locale, 12, undefined);
      renderedSections.push(buildEventsLastUpdatesSection(s, events));
    } else if (isYoutubeSection(s)) {
      renderedSections.push(buildYoutubeSection(s));
    } else if (isPageMiddleBanner(s)) {
      renderedSections.push(buildPageMiddleBannerSection(s));
    } else if (isContactForm(s)) {
      renderedSections.push(buildContactForm(s));
    } else if (isFAQSection(s)) {
      renderedSections.push(buildFAQSection(s));
    } else if (isEventRegistrationSection(s)) {
      renderedSections.push(buildEventRegistrationSection(s));
    } else if (isJobApplication(s)) {
      renderedSections.push(buildJobApplication(s));
    }
  }

  return <>{renderedSections}</>;
};
const buildPageTopBar = (s: PageTopBar) => {
  const { contactLink, contactText, phoneContact, phoneContactLink } = s;
  return (
    <PageTopBarComponent
      contactLink={contactLink}
      contactText={contactText}
      phoneContact={phoneContact}
      phoneContactLink={phoneContactLink}
    />
  );
};
const buildHomePageTopPost = (s: HomePageTopPost) => {
  const { backgroundImage, heading } = s;
  return (
    <HomePageTopPostComponent
      backgroundImage={sanityUrlFor(backgroundImage).url()}
      heading={heading}
    />
  );
};

const buildConsultationSection = (s: ConsultationSection) => {
  const { consultationSwiperSlides } = s;
  return (
    <ConsultationSectionComponent
      consultationSwiperSlides={consultationSwiperSlides}
    />
  );
};
const buildSolutionsSection = (s: SolutionsSection) => {
  const { solutionCards, title, text } = s;
  return (
    <SolutionsSectionComponent
      title={title}
      text={text}
      solutionCards={solutionCards}
    />
  );
};

const buildPartnershipSection = (s: PartnerShipSection) => {
  const { header, partnershipCards } = s;
  return (
    <PartnerShipSectionComponent
      header={header}
      partnershipCards={partnershipCards}
    />
  );
};

const buildOurCompanySection = (s: OurCompanySection) => {
  const {
    smallHeader,
    largeHeader,
    leftColumnText,
    membersNumber,
    accordionItems,
  } = s;
  return (
    <OurCompanySectionComponent
      accordionItems={accordionItems}
      smallHeader={smallHeader}
      largeHeader={largeHeader}
      leftColumnText={leftColumnText}
      membersNumber={membersNumber}
    />
  );
};
const buildVideoSection = (s: VideoSection) => {
  const {
    centralImage,
    leftTopImage,
    rightTopImage,
    leftBottomImage,
    rightBottomImage,
    videoLink,
  } = s;
  return (
    <VideoSectionComponent
      centralImage={centralImage}
      leftTopImage={leftTopImage}
      leftBottomImage={leftBottomImage}
      rightBottomImage={rightBottomImage}
      rightTopImage={rightTopImage}
      videoLink={videoLink}
    />
  );
};
const buildVisionsSection = (s: VisionsSection) => {
  const { sectionTitle, topHeading, footerText, visionCards } = s;
  return (
    <VisionsSectionComponent
      sectionTitle={sectionTitle}
      topHeading={topHeading}
      footerText={footerText}
      visionCards={visionCards}
    />
  );
};

const buildTeamList = (s: TeamList) => {
  const { header, teamMembers } = s;
  return <TeamListcomponent header={header} teamMembers={teamMembers} />;
};

const buildPageTopBanner = (s: PageTopBanner) => {
  const { imageUrl, altText } = s;
  return <PageTopBannerComponent imageUrl={imageUrl} altText={altText} />;
};
const buildQuoteSection = (s: QuoteSection) => {
  const {
    header,
    left_column,
    right_column,
    backgroundColor,
    backgroundImage,
  } = s;
  return (
    <QuoteSectionComponent
      header={header}
      leftColumn={left_column}
      rightColumn={right_column}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    />
  );
};
const buildInfoSection = (s: InfoSection) => {
  const { header, numberOfColumns, infoBlocks } = s;
  return (
    <InfoSectionComponent
      header={header}
      numberOfColumns={numberOfColumns}
      infoBlocks={infoBlocks}
    />
  );
};
const buildTabItemsSection = (s: TabItemsSection) => {
  const { header, tabItems } = s;
  return <TabItemsSectionComponent header={header} tabItems={tabItems} />;
};
const buildOnlyTextSection = (s: OnlyTextSection) => {
  const { text, height } = s;
  return <OnlyTextSectionComponent text={text} height={height} />;
};
const buildTickItemsSection = (s: TickItemsSection) => {
  const { header, listStyle, tickItems } = s;
  return (
    <TickItemsSectionComponent
      header={header}
      listStyle={listStyle}
      tickItems={tickItems}
    />
  );
};
const buildGetInTouchSection = (s: GetInTouchSection) => {
  const {
    mainHeader,
    subtitle,
    options,
    rightHeader,
    agreement,
    buttonLabel,
    backgroundImage,
  } = s;
  return (
    <GetInTouchSectionComponent
      mainHeader={mainHeader}
      subtitle={subtitle}
      rightHeader={rightHeader}
      agreement={agreement}
      buttonLabel={buttonLabel}
      options={options}
      backgroundImage={backgroundImage}
    />
  );
};

const buildContactSection = (s: ContactSection) => {
  const {
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    messageLabel,
    agreementLabel,
    submitText,
    senderEmail,
    senderPassword,
    leftHeader,
  } = s;
  return (
    <ContactSectionComponent
      firstNameLabel={firstNameLabel}
      lastNameLabel={lastNameLabel}
      emailLabel={emailLabel}
      messageLabel={messageLabel}
      agreementLabel={agreementLabel}
      submitText={submitText}
      senderEmail={senderEmail}
      senderPassword={senderPassword}
      leftHeader={leftHeader}
    />
  );
};

const buildJobOfferSection = (s: JobOfferSection) => {
  const { header, jobOffers } = s;
  return <JobOfferSectionComponent header={header} jobOffers={jobOffers} />;
};

const buildBlogHeaderSection = (section: BlogHeaderSection) => {
  const { title, subtitle, background_image } = section;
  return (
    <>
      <BlogHeaderComponent
        title={title}
        subtitle={subtitle}
        imgSrc={sanityUrlFor(background_image).url()}
      />
      {/* <CategorySelectionComponent categories={categories} /> */}
    </>
  );
};

const buildBlogPostsListSection = (
  section: BlogPostsListSection,
  posts: Post[],
  postsCount: number,
) => {
  const postListItems = posts.map((p) => ({
    title: p.title,
    publishedOn: p.publish_date,
    imgSrc: sanityUrlFor(p.cover).url(),
    slug: p.slug,
    description: p.description,
    author: p.author,
  }));

  return <PostsList posts={postListItems} postsCount={postsCount} />;
};

const buildBlogLastUpdatesSection = (
  s: BlogLastUpdatesSection,
  posts: Post[],
) => {
  const { header } = s;
  return <BlogLastUpdate posts={posts} header={header} />;
};

const buildEventHeaderSection = (section: EventHeaderSection) => {
  const { title, subtitle, background_image, event_date } = section;
  return (
    <>
      <EventHeaderComponent
        title={title}
        subtitle={subtitle}
        imgSrc={sanityUrlFor(background_image).url()}
        eventDate={event_date}
      />
    </>
  );
};

const buildEventsListSection = (
  section: EventsListSection,
  events: Event[],
  eventsCount: number,
) => {
  const eventsListItems = events.map((p) => {
    const eventDate = buildEventDate(p.event_date);
    return {
      title: p.title,
      publishedOn: p.publish_date,
      eventDate,
      imgSrc: sanityUrlFor(p.cover).url(),
      slug: p.slug,
      description: p.description,
      author: p.author,
    };
  });

  return <EventsList events={eventsListItems} eventsCount={eventsCount} />;
};

const buildEventsLastUpdatesSection = (
  s: EventsLastUpdatesSection,
  events: Event[],
) => {
  const {
    header,
    sectionBackgroundColor,
    eventBackgroundColor,
    eventTextColor,
    eventOverlayColor,
    overlayTextColor,
  } = s;
  return (
    <EventsLastUpdatesSectionComponent
      header={header}
      events={events}
      sectionBackgroundColor={sectionBackgroundColor}
      eventBackgroundColor={eventBackgroundColor}
      eventOverlayColor={eventOverlayColor}
      overlayTextColor={overlayTextColor}
      eventTextColor={eventTextColor}
    />
  );
};

const buildEventRegistrationSection = (s: EventRegistrationSection) => {
  const { header, eventRegistrationCards } = s;
  return (
    <EventRegistrationSectionComponent
      header={header}
      eventRegistrationCards={eventRegistrationCards}
    />
  );
};

const buildCarousel = (s: Carousel) => {
  const { _key, title, images, background } = s;
  const imgSrc = images?.map((i) => sanityUrlFor(i).url()) || [];
  return (
    <CarouselComponent
      key={_key}
      title={title}
      imgSrc={imgSrc}
      imgWidth={200}
      imgHeight={200}
      background={background}
    ></CarouselComponent>
  );
};

const buildHeroSection = (s: HeroSection) => {
  const {
    _key,
    anchor,
    left_column,
    right_column,
    backgroundColor,
    backgroundImage,
    height,
  } = s;
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

export default PageBuilder;

const buildYoutubeSection = (s: YoutubeSection) => {
  const { smallHeader, largeHeader, youtubeLogo, youtubeLink } = s;
  return (
    <YoutubeSectionComponent
      smallHeader={smallHeader}
      largeHeader={largeHeader}
      youtubeLogo={youtubeLogo}
      youtubeLink={youtubeLink}
    ></YoutubeSectionComponent>
  );
};

const buildPageMiddleBannerSection = (s: PageMiddleBanner) => {
  const { largeHeader, imageUrl, description } = s;
  return (
    <PageMiddleBannerComponent
      description={description}
      largeHeader={largeHeader}
      imageUrl={imageUrl}
    ></PageMiddleBannerComponent>
  );
};

const buildContactForm = (s: ContactForm) => {
  const {
    header,
    firstNameLabel,
    lastNameLabel,
    companyLabel,
    phoneLabel,
    emailLabel,
    messageLabel,
    agreementLabel,
    submitText,
    senderEmail,
    senderPassword,
  } = s;

  return (
    <ContactFormComponent
      header={header}
      firstName={firstNameLabel}
      lastName={lastNameLabel}
      company={companyLabel}
      phone={phoneLabel}
      email={emailLabel}
      agreement={agreementLabel}
      submitText={submitText}
      message={messageLabel}
      senderEmail={senderEmail}
      senderPassword={senderPassword}
    />
  );
};

const buildFAQSection = (s: FAQSection) => {
  const { title, numberOfColumns, isFullWidth, faqList, background } = s;
  return (
    <FAQSectionComponent
      title={title}
      numberOfColumns={numberOfColumns}
      isFullWidth={isFullWidth}
      faqList={faqList}
      background={background}
    ></FAQSectionComponent>
  );
};

const buildJobApplication = (s: JobApplication) => {
  const {
    candidate_label,
    candidate_button_color,
    candidate_button_text_color,
    return_label,
    return_button_color,
    return_button_text_color,
  } = s;
  return (
    <JobApplicationComponent
      candidate_label={candidate_label}
      candidate_button_color={candidate_button_color}
      candidate_button_text_color={candidate_button_text_color}
      return_label={return_label}
      return_button_color={return_button_color}
      return_button_text_color={return_button_text_color}
    />
  );
};
