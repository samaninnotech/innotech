export interface Page {
  id: string;
  title: string;
  slug: string;
  pageBuilder?: Section[];
}

interface SanityElement {
  _key: string;
}

export interface Section extends SanityElement {
  _type: string;
  background?: string;
}

function sectionMatchType(section: Section, type: string) {
  return section._type === type;
}

export enum CustomLinkType {
  Internal = "INTERNAL",
  External = "EXTERNAL",
  PopupForm = "POPUP_FORM",
}

export interface CustomLink extends SanityElement {
  label: string;
  linkType: CustomLinkType;
  popupForm: PopupForm;
}

export enum DecoratedLinkType {
  Text = "Text",
  Button = "Button",
}
export interface DecoratedLink extends SanityElement {
  link: CustomLink;
  type: DecoratedLinkType;
}

enum InterLinkRefType {
  PAGE = "page",
  POST = "post",
}

export interface InternalLink extends CustomLink {
  refType: InterLinkRefType;
  linkType: CustomLinkType.Internal;
  internalRef?: string;
  internalAnchor?: string;
}

export interface ExternalLink extends CustomLink {
  linkType: CustomLinkType.External;
  externalUrl: string;
}

function matchLinkType(l: CustomLink, type: CustomLinkType) {
  return l && l.linkType === type;
}

export function isInternalLink(l: CustomLink): l is InternalLink {
  return matchLinkType(l, CustomLinkType.Internal);
}

export function isExternalLink(l: CustomLink): l is ExternalLink {
  return matchLinkType(l, CustomLinkType.External);
}

export function customLinkToHref(link: CustomLink) {
  if (isInternalLink(link)) {
    return internalLinkToHref(link);
  } else if (isExternalLink(link)) {
    return link.externalUrl;
  } else {
    return "";
  }
}

function internalLinkToHref(link: InternalLink) {
  let href = "";
  if (link.refType === InterLinkRefType.POST) {
    href = "/blog";
  }

  if (link.internalRef && link.internalAnchor) {
    href += `/${link.internalRef}#${link.internalAnchor}`;
  } else if (link.internalRef) {
    href += `/${link.internalRef}`;
  } else if (link.internalAnchor) {
    href += `#${link.internalAnchor}`;
  }

  return href;
}

/* Navbar Config */
export interface NavbarConfigResult {
  navbar_config?: NavbarItem[];
  side_navbar_config?: DecoratedLink[];
}

export type NavbarItem = CustomLink | NavbarSubmenu;
export interface NavbarSubmenu extends SanityElement {
  _type: string;
  title: string;
  elements: Array<CustomLink | NavbarSubmenuSection>;
}

export function isNavbarSubmenu(input: any): input is NavbarSubmenu {
  return (
    input && typeof input === "object" && input?._type === "navbar_submenu"
  );
}

export interface NavbarSubmenuSection extends SanityElement {
  _type: string;
  title: string;
  links?: CustomLink[];
}

export function isNavbarSubmenuSection(
  input: any,
): input is NavbarSubmenuSection {
  return (
    input &&
    typeof input === "object" &&
    input?._type === "navbar_submenu_section"
  );
}
/* BLOG */

export interface BlogHeaderSection extends Section {
  title: string;
  subtitle: string;
  background_image: string;
}

export function isBlogHeaderSection(
  section: Section,
): section is BlogHeaderSection {
  return sectionMatchType(section, "blog_header_section");
}

export interface BlogPostsListSection extends Section {}

export function isBlogPostsListSection(
  section: Section,
): section is BlogPostsListSection {
  return sectionMatchType(section, "blog_posts_list_section");
}

export interface Post extends SanityElement {
  title: string;
  slug: string;
  publish_date: string;
  cover: string;
  body: any[]; // TODO fix
  _updatedAt: string;
  description: string;
  author: string;
  carousel: Carousel;
}

export interface BlogLastUpdatesSection extends Section {
  header: string;
}

export function isBlogLastUpdatesSection(
  section: Section,
): section is BlogLastUpdatesSection {
  return sectionMatchType(section, "blog_last_updates_section");
}

/* Event */
export interface EventHeaderSection extends Section {
  title: string;
  subtitle?: string;
  background_image: string; // Can be an image URL or a Sanity image object
  event_date: EventDate; // Add event_date to follow the structure used in Event
}

export function isEventHeaderSection(
  section: Section,
): section is EventHeaderSection {
  return sectionMatchType(section, "event_header_section");
}

export interface EventsListSection extends Section {}

export function isEventsListSection(
  section: Section,
): section is EventsListSection {
  return sectionMatchType(section, "events_list_section");
}

export interface Event extends SanityElement {
  title: string;
  slug: string;
  publish_date: string;
  event_date: EventDate;
  cover: string;
  body: any[]; // TODO fix
  _updatedAt: string;
  description: string;
  author: string;
  carousel: Carousel;
  pageBuilder: Section[];
}
export interface EventDate {
  date_type: "single" | "multiple" | "range";
  single_date?: {
    date: string;
    start_time: string;
    end_time: string;
    _type: "dateTime";
  };
  dates?: Array<{
    date: string;
    start_time?: string;
    end_time?: string;
  }>;
  start_date?: string;
  start_time?: string;
  end_date?: string;
  end_time?: string;
}

export interface EventsLastUpdatesSection extends Section {
  header: string;
  sectionBackgroundColor: string;
  eventBackgroundColor: string;
  eventTextColor: string;
  eventOverlayColor: string;
  overlayTextColor: string;
}

export function isEventsLastUpdatesSection(
  section: Section,
): section is EventsLastUpdatesSection {
  return sectionMatchType(section, "events_last_updates_section");
}

export interface EventRegistrationCardType extends SanityElement {
  title: string;
  subtitle: string;
  images: string[];
  buttonLink: CustomLink;
  type: string;
}

export interface EventRegistrationSection extends Section {
  header: string;
  eventRegistrationCards: EventRegistrationCardType[];
}

export function isEventRegistrationSection(
  section: Section,
): section is EventRegistrationSection {
  return sectionMatchType(section, "event_registration_section");
}

/* Consultation Section*/
export interface ConsultationSection extends Section {
  consultationSwiperSlides: ConsultationSwiperSlideType[];
}

export function isConsultationSection(
  section: Section,
): section is ConsultationSection {
  return sectionMatchType(section, "consultation_section");
}

export interface ConsultationSwiperSlideType extends SanityElement {
  imageSrc: string;
  heading: string;
  text: string;
}

/* PartnerShip Section*/
export interface PartnerShipSection extends Section {
  header: string;
  partnershipCards: PartnerShipCardType[];
}

export function isPartnerShipSection(
  section: Section,
): section is PartnerShipSection {
  return sectionMatchType(section, "partnership_section");
}

export interface PartnerShipCardType extends SanityElement {
  icon: string;
  title: string;
  text: string;
}

/* Solutions Section*/
export interface SolutionsSection extends Section {
  solutionCards: SolutionCardType[];
  title?: string;
  text?: string;
}

export function isSolutionsSection(
  section: Section,
): section is SolutionsSection {
  return sectionMatchType(section, "solutions_section");
}

export interface SolutionCardType extends SanityElement {
  icon: string;
  title: string;
  text: string;
  link: CustomLink;
  learnMore: string;
}

/*Event Section*/
export interface EventSection extends Section {
  title: string;
  events: EventType[];
}

export function isEventSection(section: Section): section is EventSection {
  return sectionMatchType(section, "event_section");
}

export interface EventType extends SanityElement {
  title: string;
  description: string;
  imageUrl: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  url: string;
}

/* Page Top Bar */
export interface PageTopBar extends Section {
  contactLink: CustomLink;
  contactText: string;
  phoneContact: string;
  phoneContactLink: string;
}

export function isPageTopBar(section: Section): section is PageTopBar {
  return sectionMatchType(section, "page_top_bar");
}

/* Home Page Top Post */
export interface HomePageTopPost extends Section {
  backgroundImage: string;
  heading: string;
}

export function isHomePageTopPost(
  section: Section,
): section is HomePageTopPost {
  return sectionMatchType(section, "home_page_top_post");
}

/* Our Company Section */
export interface OurCompanySection extends Section {
  smallHeader: string;
  largeHeader: any;
  leftColumnText: any;
  membersNumber: string;
  accordionItems: AccordionItem[];
}

export function isOurCompanySection(
  section: Section,
): section is OurCompanySection {
  return sectionMatchType(section, "our_company_section");
}
export interface AccordionItem {
  title: string;
  content: string;
}

/* Video Section */
export interface VideoSection extends Section {
  centralImage: string;
  leftTopImage: string;
  leftBottomImage: string;
  rightTopImage: string;
  rightBottomImage: string;
  videoLink: string;
}

export function isVideoSection(section: Section): section is VideoSection {
  return sectionMatchType(section, "video_section");
}

/* Youtube Video Section */
export interface YoutubeSection extends Section {
  smallHeader: string;
  largeHeader: string;
  youtubeLogo: string;
  youtubeLink: CustomLink;
}

export function isYoutubeSection(section: Section): section is YoutubeSection {
  return sectionMatchType(section, "youtube_section");
}

/* Visions Section*/
export interface VisionsSection extends Section {
  sectionTitle?: string;
  topHeading: string;
  footerText: string;
  visionCards: VisionCardType[];
}

export function isVisionsSection(section: Section): section is VisionsSection {
  return sectionMatchType(section, "visions_section");
}

export interface VisionCardType extends SanityElement {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

/* Team List*/
export interface TeamList extends Section {
  header: string;
  teamMembers: TeamMemberType[];
}

export function isTeamList(section: Section): section is TeamList {
  return sectionMatchType(section, "team_list");
}

export interface TeamMemberType extends SanityElement {
  image: string;
  name: string;
  position: string;
  linkedIn: CustomLink;
}

/* Job Offer Section*/
export interface JobOfferSection extends Section {
  header: string;
  jobOffers: JobOfferType[];
}

export function isJobOfferSection(
  section: Section,
): section is JobOfferSection {
  return sectionMatchType(section, "job_offer_section");
}

export interface JobOfferType extends SanityElement {
  _key: string;
  title: string;
  type: string;
  description: string;
  link: CustomLink;
}

/* Job Application*/
export interface JobApplication extends Section {
  candidateButton: CustomLink;
  returnButton: CustomLink;
}

export function isJobApplication(section: Section): section is JobApplication {
  return sectionMatchType(section, "job_application");
}

/* Page Top Banner*/
export interface PageTopBanner extends Section {
  imageUrl: string;
  altText?: string;
}

export function isPageTopBanner(section: Section): section is PageTopBanner {
  return sectionMatchType(section, "page_top_banner");
}

/* Page Middle Banner*/
export interface PageMiddleBanner extends Section {
  largeHeader: string;
  imageUrl: string;
  description: string;
}

export function isPageMiddleBanner(
  section: Section,
): section is PageMiddleBanner {
  return sectionMatchType(section, "page_middle_banner");
}

/* Info Section */
export interface InfoSection extends Section {
  header: string;
  numberOfColumns: number;
  infoBlocks: InfoBlockType[];
}

export function isInfoSection(section: Section): section is InfoSection {
  return sectionMatchType(section, "info_section");
}

export interface InfoBlockType extends SanityElement {
  imageSrc: string;
  altText: string;
  header: string;
  description: string;
}

/* Tab Items Section */
export interface TabItemsSection extends Section {
  header: string;
  tabItems: TabItemType[];
}

export function isTabItemsSection(
  section: Section,
): section is TabItemsSection {
  return sectionMatchType(section, "tab_items_section");
}

export interface TabItemType extends SanityElement {
  title: string;
  content: ContentItem[];
}

interface ContentItem {
  heading: string;
  text: string | string[];
}

/* Only Text Section */
export interface OnlyTextSection extends Section {
  text: string;
  height: string;
}

export function isOnlyTextSection(
  section: Section,
): section is OnlyTextSection {
  return sectionMatchType(section, "only_text_section");
}

/* Tick Items Section */
export interface TickItemsSection extends Section {
  header: string;
  listStyle: string;
  tickItems: TickItemType[];
}

export function isTickItemsSection(
  section: Section,
): section is TickItemsSection {
  return sectionMatchType(section, "tick_items_section");
}

export interface TickItemType extends SanityElement {
  title: string;
  description: string;
  listStyle: string;
}

/* Get In touch Section */
export interface GetInTouchSection extends Section {
  mainHeader: string;
  subtitle: string;
  options: { value: string }[];
  agreement: string;
  buttonLabel: string;
  rightHeader: string;
  backgroundImage: string;
}

export function isGetInTouchSection(
  section: Section,
): section is GetInTouchSection {
  return sectionMatchType(section, "get_in_touch_section");
}

/* Contact Section */
export interface ContactSection extends Section {
  agreement: string;
  buttonLabel: string;
  rightHeader: string;
}

export function isContactSection(section: Section): section is ContactSection {
  return sectionMatchType(section, "contact_section");
}

/* Contact Form */
export interface ContactForm extends Section {
  header: string;
  firstNameLabel: string;
  lastNameLabel: string;
  companyLabel: string;
  phoneLabel: string;
  emailLabel: string;
  messageLabel: string;
  agreementLabel: string;
  submitText: string;
  senderEmail: string;
  senderPassword: string;
}

export function isContactForm(section: Section): section is ContactForm {
  return sectionMatchType(section, "contact_form");
}
/* Card Link Section */
export interface CardLinksSection extends Section {
  title: string;
  card_links?: CardLink[];
}

export interface CardLink extends SanityElement {
  title: string;
  paragraph: string;
  image: string;
  link: CustomLink;
}

export function isCardLinkSection(
  section: Section,
): section is CardLinksSection {
  return sectionMatchType(section, "card_link_section");
}

/* ImageLinks Section */
export interface ImageLinksSection extends Section {
  title: string;
  paragraph: string;
  image_links?: ImageLink[];
}

export function isImageLinksSection(
  section: Section,
): section is ImageLinksSection {
  return sectionMatchType(section, "image_links_section");
}

export interface ImageLink extends SanityElement {
  link: CustomLink;
  image: string;
}

/* Quote Section */
export interface QuoteSection extends Section {
  header: any;
  left_column: any;
  right_column: any;
  backgroundColor?: string;
  backgroundImage?: string;
}

export function isQuoteSection(section: Section): section is QuoteSection {
  return sectionMatchType(section, "quote_section");
}

/* Hero Section */
export enum HeroColumnType {
  Text = "Text",
  Image = "Image",
  Video = "Video",
}

export interface HeroColumn extends SanityElement {
  column_type: HeroColumnType;
  text_color?: string;
  text_alignment?: string;
}

export function isHeroColumn(element: any): element is HeroColumn {
  return element?._type === "hero_column";
}

export interface HeroTextColumn extends HeroColumn {
  rich_text: any;
  links?: HeroLink[];
}

export enum HeroLinkType {
  Text = "Text",
  Button = "Button",
}

export interface HeroLink extends SanityElement {
  link: CustomLink;
  type: HeroLinkType;
  button_color?: string;
  button_text_color?: string;
}

export function isHeroTextColumn(element: any): element is HeroTextColumn {
  return isHeroColumn(element) && element.column_type === HeroColumnType.Text;
}
export interface HeroImageColumn extends HeroColumn {
  image: string;
}

export interface HeroVideoColumn extends HeroColumn {
  video: CustomLink;
}
export function isHeroImageColumn(element: any): element is HeroImageColumn {
  return isHeroColumn(element) && element.column_type === HeroColumnType.Image;
}

export function isHeroVideoColumn(element: any): element is HeroVideoColumn {
  return isHeroColumn(element) && element.column_type === HeroColumnType.Video;
}
export interface HeroSection extends Section {
  anchor?: string;
  left_column: HeroColumn;
  right_column: HeroColumn;
  backgroundColor?: string;
  backgroundImage?: string;
  height: string;
}

export function isHeroSection(section: Section): section is HeroSection {
  return sectionMatchType(section, "hero_section");
}

/* Pop Up Form*/
export interface Brochure {
  title?: string | null;
  description?: string | null;
  file?: {
    url: string;
  } | null;
}
export interface PopupForm extends Section {
  header: string;
  firstNameLabel: string;
  lastNameLabel: string;
  companyLabel: string;
  invitedByLabel?: string;
  roleLabel?: string;
  phoneLabel: string;
  emailLabel: string;
  agreementLabel: string;
  submitText: string;
  brochure?: Brochure;
  thumbnail: string;
  senderEmail: string;
  senderPassword: string;
}

export function isPopupForm(section: Section): section is PopupForm {
  return sectionMatchType(section, "popup_form");
}

/* FAQ Section */
export interface FAQ extends SanityElement {
  question: string;
  answer: string;
}

export interface FAQSection extends Section {
  title: string;
  numberOfColumns: number;
  isFullWidth: boolean;
  faqList: FAQ[];
}

export function isFAQSection(section: Section): section is FAQSection {
  return sectionMatchType(section, "faq_section");
}

/* Carousel */
export interface Carousel extends Section {
  title: string;
  images?: string[];
}

export function isCarousel(section: Section): section is Carousel {
  return sectionMatchType(section, "carousel");
}

/* Text Links Section */
export interface TextLinksSection extends Section {
  title: string;
  paragraph: string;
  text_links?: CustomLink[];
}

export function isTextLinkSection(
  section: Section,
): section is TextLinksSection {
  return sectionMatchType(section, "text_links_section");
}

/* Block Section */
export interface BlockSection extends Section {
  body: any;
}

export function isBlockSection(section: Section): section is BlockSection {
  return sectionMatchType(section, "block_section");
}
export interface LocaleNavbarItem {
  id: string;
  title: string;
  slug: string;
}

export interface PagesConfigResult {
  _id: string;
  slug_default: string;
  _updatedAt: string;
  [key: string]: string;
}

export interface ChildPagesConfigResult extends PagesConfigResult {
  parent_slug_default: string;
}

export type AddressElement = {
  description: string;
  address: string;
  phone: string;
};

export type EmailElement = {
  description: string;
  email: string;
};

export interface GlobalAccountInfoResult {
  account_references?: AddressElement[];
  emails?: EmailElement[];
}

export interface AssistanceInfoResult {
  email: string;
  address: string;
  phone: string;
}

export interface CountersSection extends Section {
  duration: number;
  counters?: Counter[];
}

export interface Counter extends SanityElement {
  label: string;
  finalValue: number;
}

export function isCountersSection(
  section: Section,
): section is CountersSection {
  return sectionMatchType(section, "counters_section");
}

export interface AssistanceSection extends Section {}
export function isAssistanceSection(
  section: Section,
): section is AssistanceSection {
  return sectionMatchType(section, "assistance_section");
}

export interface NewsletterFormSection extends Section {
  title: string;
  accept_marketing_message: string;
  legal_consent_message: string;
  image: string;
}

export function isNewsletterFormSection(
  section: Section,
): section is NewsletterFormSection {
  return sectionMatchType(section, "newsletter_form_section");
}
/* large background section */
export interface LargeBackgroundSection extends Section {
  title?: string;
  image: string;
  link?: HeroLink;
}

export function isLargeBackgroundSection(
  section: Section,
): section is LargeBackgroundSection {
  return sectionMatchType(section, "large_background_section");
}

/* Footer section */
export interface FooterConfigResult {
  logo: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
  quickLinks: CustomLink[];
  aboutLinks: CustomLink[];
  socialLinks: CustomLink[];
  copyrightText: string;
}
