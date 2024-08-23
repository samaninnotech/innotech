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
}

export interface CustomLink extends SanityElement {
  label: string;
  linkType: CustomLinkType;
}

export enum DecoratedLinkType {
  Text = "Text",
  Button = "Button",
}
export interface DecoratedLink extends SanityElement {
  link: CustomLink;
  type: DecoratedLinkType;
}

export interface InternalLink extends CustomLink {
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
  if (link.internalRef && link.internalAnchor) {
    return `/${link.internalRef}#${link.internalAnchor}`;
  } else if (link.internalRef) {
    return `/${link.internalRef}`;
  } else if (link.internalAnchor) {
    return `#${link.internalAnchor}`;
  } else {
    return "";
  }
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

/* Latest Blog Posts*/ 
export interface LatestBlogPosts extends Section {
  title: string,
  posts: BlogPostType[];
}

export function isLatestBlogPosts(section: Section): section is LatestBlogPosts {
  return sectionMatchType(section, "latest_blog_posts");
}

export interface BlogPostType extends SanityElement {
  title: string;
  url: string;
  image: string;
  author: string;
  date: string;
  excerpt: string;
}

/* Consultation Section*/
export interface ConsultationSection extends Section {
  consultationSwiperSlides: ConsultationSwiperSlideType[];
}

export function isConsultationSection(section: Section): section is ConsultationSection {
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

export function isPartnerShipSection(section: Section): section is PartnerShipSection {
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
  title?: string,
  text?: string
}

export function isSolutionsSection(section: Section): section is SolutionsSection {
  return sectionMatchType(section, "solutions_section");
}

export interface SolutionCardType extends SanityElement {
  icon: string;
  title: string;
  text: string;
}

/*Event Section*/
export interface EventSection extends Section {
  title: string,
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
  contactLink: string;
  contactText: string;
  infoLink: string;
  infoText: string;
}

export function isPageTopBar(section: Section): section is PageTopBar {
  return sectionMatchType(section, "page_top_bar");
}

/* Home Page Top Post */
export interface HomePageTopPost extends Section {
  backgroundImage: string;
  
}

export function isHomePageTopPost(section: Section): section is HomePageTopPost {
  return sectionMatchType(section, "home_page_top_post");
}


/* Info Section */
export interface InfoSection extends Section {
  title: string;
  info_blocks?: InfoBlockType[];
}

export function isInfoSection(section: Section): section is InfoSection {
  return sectionMatchType(section, "info_section");
}

export interface InfoBlockType extends SanityElement {
  title: string;
  paragraph: string;
  image: string;
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

/* Hero Section */
export enum HeroColumnType {
  Text = "Text",
  Image = "Image",
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

export function isHeroImageColumn(element: any): element is HeroImageColumn {
  return isHeroColumn(element) && element.column_type === HeroColumnType.Image;
}

export interface HeroSection extends Section {
  anchor?: string;
  left_column: HeroColumn;
  right_column: HeroColumn;
  backgroundColor?: string;
  backgroundImage?: string;
}

export function isHeroSection(section: Section): section is HeroSection {
  return sectionMatchType(section, "hero_section");
}

/* FAQ Section */
export interface FAQ extends SanityElement {
  question: string;
  answer: string;
}

export interface FAQSection extends Section {
  title?: string;
  paragraph?: string;
  faq_list?: FAQ[];
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

export interface ContactsSection extends Section {}
export function isContactsSection(
  section: Section,
): section is ContactsSection {
  return sectionMatchType(section, "contacts_section");
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
