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
  Event,
  EventHeaderSection,
  EventsListSection,
  GetInTouchSection,
  HeroSection,
  HomePageTopPost,
  InfoSection,
  isBlogHeaderSection,
  isBlogLastUpdatesSection,
  isBlogPostsListSection,
  isCarousel,
  isConsultationSection,
  isEventHeaderSection,
  isEventsLastUpdatesSection,
  isEventsListSection,
  isGetInTouchSection,
  isHeroSection,
  isHomePageTopPost,
  isInfoSection,
  isJobOfferSection,
  isOnlyTextSection,
  isOurCompanySection,
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
  JobOfferSection,
  OnlyTextSection,
  OurCompanySection,
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
} from "@/sanity/types";
import { FC, ReactNode } from "react";
import {
  Carousel as CarouselComponent,
  ConsultationSection as ConsultationSectionComponent,
  GetInTouchSection as GetInTouchSectionComponent,
  HeroSectionComponent,
  HomePageTopPost as HomePageTopPostComponent,
  InfoSection as InfoSectionComponent,
  JobOfferSection as JobOfferSectionComponent,
  OnlyTextSection as OnlyTextSectionComponent,
  OurCompanySection as OurCompanySectionComponent,
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
} from ".";
import BlogHeaderComponent from "./Blog/BlogHeader";
import PostsList from "./Blog/PostsList";
import BlogLastUpdate from "./BlogLastUpdates";
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
      const posts = await getEvents(locale, 12, undefined);
      renderedSections.push(buildEventsLastUpdatesSection(s, posts));
    }
  }

  return <>{renderedSections}</>;
};
const buildPageTopBar = (s: PageTopBar) => {
  const { contactLink, contactText, infoLink, infoText } = s;
  return (
    <PageTopBarComponent
      contactLink={contactLink}
      contactText={contactText}
      infoLink={infoLink}
      infoText={infoText}
    />
  );
};
const buildHomePageTopPost = (s: HomePageTopPost) => {
  const { backgroundImage } = s;
  return (
    <HomePageTopPostComponent
      backgroundImage={sanityUrlFor(backgroundImage).url()}
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
  const { accordionItems } = s;
  return <OurCompanySectionComponent accordionItems={accordionItems} />;
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
  const { header, tickItems } = s;
  return <TickItemsSectionComponent header={header} tickItems={tickItems} />;
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
  return <BlogLastUpdate posts={posts} />;
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
  s: BlogLastUpdatesSection,
  posts: Post[],
) => {
  return <BlogLastUpdate posts={posts} />;
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
