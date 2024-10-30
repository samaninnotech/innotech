import { fallbackLocale, isSupportedLocale, locales } from "@/i18n/settings";
import CustomPageIds from "./custom-page-ids";
import getSanityClient from "./get-sanity-client";
import sanityClient from "./sanity-client";
import {
  AssistanceInfoResult,
  ChildPagesConfigResult,
  Event,
  FooterConfigResult,
  GlobalAccountInfoResult,
  NavbarConfigResult,
  Page,
  PagesConfigResult,
  Post,
} from "./types";

/************************************/
/*   Page and PageBuilder Queries   */
/************************************/

const pageBydIdQuery = (id: string, locale: string) =>
  `*[ _type == "page" && _id == '${id}'][0]${buildPageDeconstructionQUery(locale)}`;

const pageBySlugQuery = (slug: string, locale: string) =>
  `*[ _type == "page" && slug.${locale}.current == '${slug}' ][0]${buildPageDeconstructionQUery(locale)}`;

const buildPageDeconstructionQUery = (locale: string) => `{
  'id': _id,
  'title': select(defined(title.${locale}) => title.${locale}, title.${fallbackLocale}),
  'slug': select(defined(slug.${locale}) => slug.${locale}.current, slug.${fallbackLocale}.current),
  'pageBuilder': pageBuilder[]{
    _type,
    _key,
    'background': bg_color,
    _type == 'hero_section' => ${buildHeroSectionQuery(locale)},
    _type == 'info_section' => ${buildInfoSectionQuery(locale, fallbackLocale)},
    _type == 'faq_section' => ${buildFaqSectionQuery(locale)},
    _type == 'image_links_section' => ${buildImageLinksSectionQuery(locale)},
    _type == 'carousel' => ${buildCarouselQuery(locale)},
    _type == 'text_links_section' => ${buildTextLinksSectionQuery(locale)},
    _type == 'counters_section' => ${buildCountersSectionQuery(locale)},
    _type == 'card_link_section' => ${buildCardLinkSectionQuery(locale)},
    _type == 'block_section' => ${buildBlockSectionQuery(locale)},
    _type == 'newsletter_form_section' => ${buildNewsletterSectionQuery(locale)},
    _type == 'large_background_section' => ${buildLargeBackgroundSectionQuery(locale)},
    _type == 'page_top_bar' => ${buildPageTopBarQuery(locale, fallbackLocale)},
    _type == 'home_page_top_post' => ${buildHomePageTopPostQuery(locale)},
    _type == 'consultation_section' => ${buildConsultationSectionQuery(locale, fallbackLocale)},
    _type == 'solutions_section' => ${buildSolutionsSectionQuery(locale, fallbackLocale)},
    _type == 'partnership_section' => ${buildPartnerShipSectionQuery(locale, fallbackLocale)},
    _type == 'our_company_section' => ${buildOurCompanySectionQuery(locale, fallbackLocale)},
    _type == 'video_section' => ${buildVideoSectionQuery()},
    _type == 'video_grid_section' => ${buildVideoGridSectionQuery(locale, fallbackLocale)},
    _type == 'visions_section' => ${buildVisionsSectionQuery(locale, fallbackLocale)},
    _type == 'team_list' => ${buildTeamListQuery(locale, fallbackLocale)},
    _type == 'page_top_banner' => ${buildPageTopBannerQuery(locale, fallbackLocale)},
    _type == 'page_middle_banner' => ${buildPageMiddleBannerQuery(locale, fallbackLocale)},
    _type == 'quote_section' => ${buildQuoteSectionQuery(locale, fallbackLocale)},
    _type == 'tab_items_section' => ${buildTabItemsSectionQuery(locale, fallbackLocale)},
    _type == 'only_text_section' => ${buildOnlyTextSectionQuery(locale, fallbackLocale)},
    _type == 'tick_items_section' => ${buildTickItemsSectionQuery(locale, fallbackLocale)},
    _type == 'get_in_touch_section' => ${buildGetInTouchSectionQuery(locale, fallbackLocale)},
    _type == 'job_offer_section' => ${buildJobOfferSectionQuery(locale, fallbackLocale)},
    _type == 'job_application' => ${buildJobApplicationQuery(locale)},
    _type == 'blog_header_section' => ${buildBlogHeaderSectionQuery(locale)},
    _type == 'blog_last_updates_section' => ${buildBlogLastUpdatesSectionQuery(locale)},
    _type == 'carousel' => ${buildCarouselQuery(locale)},
    _type == 'event_header_section' => ${buildEventHeaderSectionQuery(locale)},
    _type == 'contact_section' => ${buildContactSectionQuery(locale, fallbackLocale)},
    _type == 'events_last_updates_section' => ${buildEventsLastUpdatesSectionQuery(locale)},
    _type == 'youtube_section' => ${buildYouTubeSectionQuery(locale, fallbackLocale)},
    _type == 'contact_form' => ${buildContactFormQuery(locale, fallbackLocale)},


    
  }
}`;
const buildBlogHeaderSectionQuery = (locale: string) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'subtitle': coalesce(subtitle.${locale}, subtitle.${fallbackLocale}),
  background_image,
}`;
const buildBlogLastUpdatesSectionQuery = (locale: string) => `{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
}`;
const buildEventHeaderSectionQuery = (locale: string) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'subtitle': coalesce(subtitle.${locale}, subtitle.${fallbackLocale}),
  background_image,
}`;
const buildEventsLastUpdatesSectionQuery = (locale: string) => `{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
  'sectionBackgroundColor': section_background_color,
  'eventBackgroundColor': event_background_color,
  'eventTextColor': event_text_color,
  'eventOverlayColor': event_overlay_color,
  'overlayTextColor': overlay_text_color
}`;

const buildHeroSectionQuery = (locale: string) => {
  const buildHeroColumnQuery = (locale: string) => `
  {
    _key,
    _type,
    column_type,
    'rich_text': coalesce(rich_text.${locale}, rich_text.${fallbackLocale}),
    'links': links[] {
      type,
      'link': link${buildCustomLinkQuery(locale)},
      button_text,
      button_color,
      button_text_color
    },
    text_color,
    text_alignment,
    image,
    video
  }
`;

  return `{
    'anchor': coalesce(anchor->slug.${locale}.current, anchor->slug.${fallbackLocale}.current),
    'backgroundColor': background.color,
    'backgroundImage': background.image.asset->url,
    'left_column': left_column${buildHeroColumnQuery(locale)},
    'right_column': right_column${buildHeroColumnQuery(locale)},
    'height': coalesce(height, 'auto')
  }`;
};

const buildInfoSectionQuery = (locale: string, fallbackLocale: string) => `
{
  'header': select(defined(header.${locale}) => header.${locale}, header.${fallbackLocale}),
  'bg_color': bg_color,
  'numberOfColumns': numberOfColumns,
  'infoBlocks': info_blocks[]{
    'header': select(defined(header.${locale}) => header.${locale}, header.${fallbackLocale}),
    'description': select(defined(description.${locale}) => description.${locale}, description.${fallbackLocale}),
    'imageSrc' :image.asset->url,
    'altText': altText
  }
}`;

const buildCardLinkSectionQuery = (locale: string) =>
  `{
 'title' : coalesce(title.${locale}, title.${fallbackLocale}),
 'card_links': card_links[] {
  _key,
  'title' : coalesce(title.${locale}, title.${fallbackLocale}),
  'paragraph' : coalesce(paragraph.${locale}, paragraph.${fallbackLocale}),
  'image' : image,
  'link' : link${buildCustomLinkQuery(locale)},
 }
}
`;
const buildFaqSectionQuery = (locale: string) =>
  `{
  'title': select(defined(title.${locale}) => title.${locale}, title.${fallbackLocale}),
  'background': background.color,
  'numberOfColumns': numberOfColumns,
  'isFullWidth': isFullWidth,
  'faqList': faq_list[]{
    _key,
    'question': select(defined(question.${locale}) => question.${locale}, question.${fallbackLocale}),
    'answer': select(defined(answer.${locale}) => answer.${locale}, answer.${fallbackLocale}),
  }
}`;

const buildImageLinksSectionQuery = (locale: string) =>
  `{
  'title': select(defined(title.${locale}) => title.${locale}, title.${fallbackLocale}),
  'paragraph': select(defined(paragraph.${locale}) => paragraph.${locale}, paragraph.${fallbackLocale}),
  'image_links': image_links[]{
    'link': link${buildCustomLinkQuery(locale)},
    image
  }
}
`;

const buildCustomLinkQuery = (locale: string) =>
  `{
  _key,
  linkType,
  'label': select(defined(label.${locale}) => label.${locale}, label.${fallbackLocale}),
  linkType == 'EXTERNAL' => {externalUrl},
  linkType == 'INTERNAL' => {
    'internalRef': select(
      defined(internalRef->parent_page) =>
        coalesce(internalRef->parent_page->slug.${locale}.current, internalRef->parent_page->slug.${fallbackLocale}.current) + '/' + coalesce(internalRef->slug.${locale}.current, internalRef->slug.${fallbackLocale}.current),
        coalesce(internalRef->slug.${locale}.current, internalRef->slug.${fallbackLocale}.current)
      ),
    'internalAnchor': coalesce(internalAnchor->slug.${locale}.current, internalAnchor->slug.${fallbackLocale}.current),
  },
  linkType == 'POPUP_FORM' => {
    'popupForm': {
      'header': coalesce(popupForm.header.${locale}, popupForm.header.${fallbackLocale}),
      'firstNameLabel': coalesce(popupForm.firstNameLabel.${locale}, popupForm.firstNameLabel.${fallbackLocale}),
      'lastNameLabel': coalesce(popupForm.lastNameLabel.${locale}, popupForm.lastNameLabel.${fallbackLocale}),
      'companyLabel': coalesce(popupForm.companyLabel.${locale}, popupForm.companyLabel.${fallbackLocale}),
      'roleLabel': coalesce(popupForm.roleLabel.${locale}, popupForm.roleLabel.${fallbackLocale}),
      'invitedByLabel': coalesce(popupForm.invitedByLabel.${locale}, popupForm.invitedByLabel.${fallbackLocale}),
      'phoneLabel': coalesce(popupForm.phoneLabel.${locale}, popupForm.phoneLabel.${fallbackLocale}),
      'emailLabel': coalesce(popupForm.emailLabel.${locale}, popupForm.emailLabel.${fallbackLocale}),
      'agreementLabel': coalesce(popupForm.agreementLabel.${locale}, popupForm.agreementLabel.${fallbackLocale}),
      'submitText': coalesce(popupForm.submitText.${locale}, popupForm.submitText.${fallbackLocale}),
      'notificationText': coalesce(popupForm.notificationText.${locale}, popupForm.notificationText.${fallbackLocale}),
      'thumbnail': popupForm.thumbnail.asset->url,
      'brochure': popupForm.brochure->{
        'title': coalesce(title.${locale}, title.${fallbackLocale}),
        'description': coalesce(description.${locale}, description.${fallbackLocale}),
        'file': file {
          'url': asset->url
        }
      },
      'senderEmail': popupForm.senderEmail, 
      'senderPassword': popupForm.senderPassword 
    }
  },
  linkType == 'JOB_POPUP_FORM' => {
    'jobPopupForm': {
      'header': coalesce(jobPopupForm.header.${locale}, jobPopupForm.header.${fallbackLocale}),
      'subtitle': coalesce(jobPopupForm.subtitle.${locale}, jobPopupForm.subtitle.${fallbackLocale}),
      'firstNameLabel': coalesce(jobPopupForm.firstNameLabel.${locale}, jobPopupForm.firstNameLabel.${fallbackLocale}),
      'lastNameLabel': coalesce(jobPopupForm.lastNameLabel.${locale}, jobPopupForm.lastNameLabel.${fallbackLocale}),
      'emailLabel': coalesce(jobPopupForm.emailLabel.${locale}, jobPopupForm.emailLabel.${fallbackLocale}),
      'phoneLabel': coalesce(jobPopupForm.phoneLabel.${locale}, jobPopupForm.phoneLabel.${fallbackLocale}),
      'presentationLabel': coalesce(jobPopupForm.presentationLabel.${locale}, jobPopupForm.presentationLabel.${fallbackLocale}),
      'fileUploadLabel': coalesce(jobPopupForm.fileUploadLabel.${locale}, jobPopupForm.fileUploadLabel.${fallbackLocale}),
      'agreementLabel': coalesce(jobPopupForm.agreementLabel.${locale}, jobPopupForm.agreementLabel.${fallbackLocale}),
      'submitText': coalesce(jobPopupForm.submitText.${locale}, jobPopupForm.submitText.${fallbackLocale}),
      'senderEmail': jobPopupForm.senderEmail,
      'senderPassword': jobPopupForm.senderPassword,
      'receiverEmail': jobPopupForm.receiverEmail,
    }
  }
}`;

const buildTextLinksSectionQuery = (locale: string) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'paragraph': coalesce(paragraph.${locale}, paragraph.${fallbackLocale}),
  'text_links': text_links[] ${buildCustomLinkQuery(locale)}
}`;

const buildCountersSectionQuery = (locale: string) => `
{
  'duration': duration_seconds,
  'counters': counters[]{
    'label': coalesce(label.${locale}, label.${fallbackLocale}),
    'finalValue': final_value
  }
}`;

const buildBlockSectionQuery = (locale: string) => `
{
  'body': coalesce(body.${locale}, body.${fallbackLocale})[]${deconstructBlocksList(locale)},
}`;

const deconstructBlocksList = (locale: string) => `
{
  ...,
  'markDefs': markDefs[] {
    _type,
    _type != 'link' => {
      ...
    },
    _type == 'link' => ${buildCustomLinkQuery(locale)}
  }
}
`;

const buildNewsletterSectionQuery = (locale: string) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'accept_marketing_message': coalesce(accept_marketing_message.${locale}, accept_marketing_message.${fallbackLocale}),
  'legal_consent_message': coalesce(legal_consent_message.${locale}, legal_consent_message.${fallbackLocale}),
  'image': image,
}`;

const buildLargeBackgroundSectionQuery = (locale: string) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'image': image,
  'link' :  link {
    'link': link${buildCustomLinkQuery(locale)},
    'type': type
  }
}`;

const buildPageTopBarQuery = (locale: string, fallbackLocale: string) => `{
  'contactLink': contactLink${buildCustomLinkQuery(locale)},
  'contactText': coalesce(contactText.${locale}, contactText.${fallbackLocale}),
  'phoneContact': phoneContact,
  'phoneContactLink': phoneContactLink
}`;

const buildHomePageTopPostQuery = (locale: string) => `{
  'backgroundImage': backgroundImage.asset->url,
  'heading': coalesce(heading.${locale}, heading.${fallbackLocale}),
}`;

const buildConsultationSectionQuery = (
  locale: string,
  fallbackLocale: string,
) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'consultationSwiperSlides': consultationSwiperSlides[]{
    'imageSrc': imageSrc.asset->url,
    'heading': coalesce(heading.${locale}, heading.${fallbackLocale}),
    'text': coalesce(text.${locale}, text.${fallbackLocale})
  }
}`;

const buildSolutionsSectionQuery = (locale: string, fallbackLocale: string) => `
{
  'title': coalesce(title.${locale}, title.${fallbackLocale}),
  'text': coalesce(text.${locale}, text.${fallbackLocale}),
  'solutionCards': solutionCards[]{
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'text': coalesce(text.${locale}, text.${fallbackLocale}),
    'icon': icon.asset->url,
    'link': link${buildCustomLinkQuery(locale)},
    'learnMore': coalesce(learn_more.${locale}, learn_more.${fallbackLocale})
  }
}`;
const buildPartnerShipSectionQuery = (
  locale: string,
  fallbackLocale: string,
) => `
{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
  'partnershipCards': partnershipCards[]{
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'text': coalesce(text.${locale}, text.${fallbackLocale}),
    'icon': icon.asset->url
  }
}`;

const buildOurCompanySectionQuery = (
  locale: string,
  fallbackLocale: string,
) => `{
  'smallHeader': coalesce(small_header.${locale}, small_header.${fallbackLocale}),
  'largeHeader': coalesce(large_header.${locale}, large_header.${fallbackLocale}),
  'leftColumnText': coalesce(left_column_text.${locale}, left_column_text.${fallbackLocale}),
  'membersNumber': members_number,
  'accordionItems': accordionItems[]{
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'content': coalesce(content.${locale}, content.${fallbackLocale})
  }
}`;

export const buildVideoSectionQuery = () => `{
  'centralImage': centralImage.asset->url,
  'leftTopImage': leftTopImage.asset->url,
  'rightTopImage': rightTopImage.asset->url,
  'leftBottomImage': leftBottomImage.asset->url,
  'rightBottomImage': rightBottomImage.asset->url,
  'videoLink': videoLink
}`;

export const buildVideoGridSectionQuery = (
  locale: string,
  fallbackLocale: string,
) => `{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
  'numberOfColumns': numberOfColumns,
  'videoItems': videoItems[]${buildCustomLinkQuery(locale)}
}`;

export const buildYouTubeSectionQuery = (
  locale: string,
  fallbackLocale: string,
) => `{
  'smallHeader': coalesce(small_header.${locale}, small_header.${fallbackLocale}),
  'largeHeader': coalesce(large_header.${locale}, large_header.${fallbackLocale}),
  'youtubeLogo': youtube_logo.asset->url,
  'youtubeLink': link${buildCustomLinkQuery(locale)}
}`;

const buildVisionsSectionQuery = (locale: string, fallbackLocale: string) => `
{
  'sectionTitle': coalesce(sectionTitle.${locale}, sectionTitle.${fallbackLocale}),
  'topHeading': coalesce(topHeading.${locale}, topHeading.${fallbackLocale}),
  'footerText': coalesce(footerText.${locale}, footerText.${fallbackLocale}),
  'visionCards': visionCards[]{
    'imgSrc': imgSrc.asset->url,
    'img_alt': coalesce(img_alt.${locale}, img_alt.${fallbackLocale}),
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'text': coalesce(text.${locale}, text.${fallbackLocale})
  }
}`;

const buildTeamListQuery = (locale: string, fallbackLocale: string) => `
{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
  'teamMembers': teamMembers[]{
    'image': image.asset->url,
    'alt': coalesce(image.alt, ''),
    'name': name,
    'position': coalesce(position.${locale}, position.${fallbackLocale}),
    'linkedIn': linkedIn${buildCustomLinkQuery(locale)}
  }
}`;

const buildPageTopBannerQuery = (locale: string, fallbackLocale: string) => `
{
  'imageUrl': image.asset->url,
  'bottomOfImage': bottomOfImage,
  'firstLink': firstLink${buildCustomLinkQuery(locale)},
  'secondLink': secondLink${buildCustomLinkQuery(locale)},
  'pageName': coalesce(pageName.${locale}, pageName.${fallbackLocale}),
}
`;

const buildPageMiddleBannerQuery = (locale: string, fallbackLocale: string) => `
{
  'largeHeader': coalesce(large_header.${locale}, large_header.${fallbackLocale}),
  'imageUrl': imageUrl.asset->url,
  'description': coalesce(description.${locale}, large_header.${fallbackLocale}),
}
`;

const buildQuoteSectionQuery = (locale: string, fallbackLocale: string) => {
  return `{
    'header': coalesce(header.${locale}, header.${fallbackLocale}),
    'backgroundColor': background.color,
    'backgroundImage': background.image.asset->url,
    'left_column': coalesce(left_column.${locale}, left_column.${fallbackLocale}),
    'right_column': coalesce(right_column.${locale}, right_column.${fallbackLocale})
  }`;
};

const buildTabItemsSectionQuery = (locale: string, fallbackLocale: string) => `
{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
  'tabItems': tabItems[]{
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'content': content[]{
      'heading': coalesce(heading.${locale}, heading.${fallbackLocale}),
      'text': coalesce(text.${locale}, text.${fallbackLocale}),
    }
  }
}`;

const buildOnlyTextSectionQuery = (locale: string, fallbackLocale: string) => `{
  'text': select(defined(text.${locale}) => text.${locale}, text.${fallbackLocale}),
  'height': coalesce(height, 'auto') // Add height field
}`;

const buildTickItemsSectionQuery = (locale: string, fallbackLocale: string) => `
{
  'header': coalesce(header.${locale}, header.${fallbackLocale}),
  'listStyle': listStyle,
  'tickItems': items[]{
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'description': coalesce(description.${locale}, description.${fallbackLocale})
  }
}`;

const buildGetInTouchSectionQuery = (
  locale: string,
  fallbackLocale: string,
) => {
  return `{
    'backgroundImage': backgroundImage.asset->url,
    'mainHeader': coalesce(mainHeader.${locale}, mainHeader.${fallbackLocale}),
    'subtitle': coalesce(subtitle.${locale}, subtitle.${fallbackLocale}),
     'options': options[]{
      'value': coalesce(@.${locale}, @.${fallbackLocale})
    },   
    'agreement': coalesce(agreement.${locale}, agreement.${fallbackLocale}),
    'buttonLabel': coalesce(buttonLabel.${locale}, buttonLabel.${fallbackLocale}),
    'rightHeader': coalesce(rightHeader.${locale}, rightHeader.${fallbackLocale})
  }`;
};

const buildContactSectionQuery = (locale: string, fallbackLocale: string) => {
  return `{ 
    'firstNameLabel': coalesce(firstNameLabel.${locale}, firstNameLabel.${fallbackLocale}),
    'lastNameLabel': coalesce(lastNameLabel.${locale}, lastNameLabel.${fallbackLocale}),
    'emailLabel': coalesce(emailLabel.${locale}, emailLabel.${fallbackLocale}),
    'messageLabel': coalesce(messageLabel.${locale}, messageLabel.${fallbackLocale}),
    'agreementLabel': coalesce(agreementLabel.${locale}, agreementLabel.${fallbackLocale}),
    'submitText': coalesce(submitText.${locale}, submitText.${fallbackLocale}),
    'senderEmail': senderEmail, 
    'senderPassword': senderPassword,
    'leftHeader': coalesce(leftHeader.${locale}, rightHeader.${fallbackLocale})
  }`;
};
const buildContactFormQuery = (locale: string, fallbackLocale: string) => {
  return `{   
    'header': coalesce(header.${locale}, header.${fallbackLocale}),
    'firstNameLabel': coalesce(firstNameLabel.${locale}, firstNameLabel.${fallbackLocale}),
    'lastNameLabel': coalesce(lastNameLabel.${locale}, lastNameLabel.${fallbackLocale}),
    'companyLabel': coalesce(companyLabel.${locale}, companyLabel.${fallbackLocale}),
    'phoneLabel': coalesce(phoneLabel.${locale}, phoneLabel.${fallbackLocale}),
    'emailLabel': coalesce(emailLabel.${locale}, emailLabel.${fallbackLocale}),
    'messageLabel': coalesce(messageLabel.${locale}, messageLabel.${fallbackLocale}),
    'agreementLabel': coalesce(agreementLabel.${locale}, agreementLabel.${fallbackLocale}),
    'submitText': coalesce(submitText.${locale}, submitText.${fallbackLocale}),
    'senderEmail': senderEmail, 
    'senderPassword': senderPassword
  }`;
};

const buildJobOfferSectionQuery = (locale: string, fallbackLocale: string) => {
  return `{
    'header': coalesce(header.${locale}, header.${fallbackLocale}),
    'jobOffers': jobOffers[]{
      'title': coalesce(title.${locale}, title.${fallbackLocale}),
      type,
      'description': coalesce(description.${locale}, description.${fallbackLocale}),
      'link': link${buildCustomLinkQuery(locale)}
    }
  }`;
};

const buildJobApplicationQuery = (locale: string) => {
  return `{
      'candidate_label': candidate_label${buildCustomLinkQuery(locale)},
      'candidate_button_color': candidate_button_color,
      'candidate_button_text_color': candidate_button_text_color,
      'return_label': return_label${buildCustomLinkQuery(locale)},
      'return_button_color': return_button_color,
      'return_button_text_color': return_button_text_color
  }`;
};

const buildCarouselQuery = (locale: string) => {
  return `{
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'images': images[].asset->url
  }`;
};

const footerQuery = (locale: string) => `
*[ _type == "website_settings" && _id == "websiteSettings"][0]{
  
    'logo': footer.logo.asset->url,
    'address': footer.address,
    'phone': footer.phone,
    'email': footer.email,
    'services': footer.services,
    'quickLinks': footer.quickLinks[]${buildCustomLinkQuery(locale)},
    'aboutLinks': footer.aboutLinks[]${buildCustomLinkQuery(locale)},
    'socialLinks': footer.socialLinks[]${buildCustomLinkQuery(locale)},
    'copyrightText': footer.copyrightText
  
}
`;

export const getFooterConfig = async (locale: string) => {
  const query = footerQuery(locale);
  const sanityClient = getSanityClient();
  const result = await sanityClient.fetch<FooterConfigResult>(query);
  if (!result) {
    return null;
  }

  return result;
};

/******************************/
/*   Page By Id and By Slug   */
/******************************/

/**
 * Dato un id e un locale, recupera tutte le info della pagina
 * @param id
 * @param locale
 * @returns
 */
export const getPageById = async (
  id: string,
  locale: string = fallbackLocale,
) => {
  locale = isSupportedLocale(locale) ? locale : fallbackLocale;
  const query = pageBydIdQuery(id, locale);
  const sanityClient = getSanityClient();
  return sanityClient.fetch<Page>(query);
};

/**
 * Dato uno slug e un locale, recupera tutte le info della pagina
 * @param slug
 * @param locale
 * @returns
 */
export const getPageBySlug = async (
  slug: string,
  locale: string = fallbackLocale,
) => {
  locale = isSupportedLocale(locale) ? locale : fallbackLocale;
  const query = pageBySlugQuery(slug, locale);
  const sanityClient = getSanityClient();
  return sanityClient.fetch<Page>(query);
};

/************************/
/*   All Slugs Config   */
/************************/

const allSlugsConfigQuery = () => {
  const querySlices = locales.map(
    (l) =>
      `'title_${l}': title.${l}, 'metaTitle_${l}': metaTitle.${l},  'metaDescription_${l}': metaDescription.${l}, 'slug_${l}': slug.${l}.current`,
  );
  return `*[ _type == "page" && !defined(parent_page) && defined(slug)]{
    _id,
    ${querySlices.join(",")},
    'slug_default': slug.${fallbackLocale}.current,
    _updatedAt
  }`;
};
export const getAllSlugsConfig = async () => {
  const query = allSlugsConfigQuery();
  return sanityClient.fetch<PagesConfigResult[]>(query);
};

const pageMetadataBySlug = (locale: string, slug: string) => {
  return `*[ _type == "page" && slug.${locale}.current == "${slug}"]{
    _id,
    'metaTitle': metaTitle.${locale},
    'metaDescription': metaDescription.${locale}
  }[0]`;
};

export const getPageMetadataBySlug = async (locale: string, slug: string) => {
  const query = pageMetadataBySlug(locale, slug);
  return sanityClient.fetch<PagesConfigResult>(query);
};

const allChildSlugsConfigQuery = () => {
  const querySlices = locales.map(
    (l) =>
      `'title_${l}': title.${l}, 'slug_${l}': slug.${l}.current, 'parent_slug_${l}': parent_page->slug.${l}.current`,
  );
  return `*[ _type == "page" && defined(parent_page)]{
    _id,
    ${querySlices.join(",")},
    'slug_default': slug.${fallbackLocale}.current,
    'parent_slug_default': parent_page->slug.${fallbackLocale}.current,
    _updatedAt
  }`;
};

export const getAllChildSlugsConfig = async () => {
  const query = allChildSlugsConfigQuery();
  return sanityClient.fetch<ChildPagesConfigResult[]>(query);
};

/************************/
/* Page Localized Slugs */
/************************/

const pageLocalizedSlugsQuery = (slug: string, locale: string) => {
  const slices = locales.map(
    (l) =>
      `'slug_${l}': select(defined(slug.${l}) => slug.${l}.current, slug.${fallbackLocale}.current)`,
  );
  return `*[ _type == "page" && coalesce(slug.${locale}.current, slug.${fallbackLocale}.current) == '${slug}' ][0]{
    ${slices.join(", ")}
  }`;
};

/**
 * Dato uno slug, recupera slug e title per la pagina in tutte le lingue
 * @param slug
 * @param locale
 * @returns
 */
export const getPageLocalizedSlugs = (slug: string, locale: string) => {
  const query = pageLocalizedSlugsQuery(slug, locale);
  const sanityClient = getSanityClient();
  return sanityClient.fetch<{ [key: string]: string }>(query);
};

/***********************/
/* Global Account Info */
/***********************/

const globalAccountInfoQuery = (locale: string) => `
*[ _type == "website_settings"][0] {
  'account_references': account_references[] {
    address,
    phone,
    'description': coalesce(description.${locale}, description.${fallbackLocale})
  },
  'emails': emails[] {
  email,
  'description': coalesce(description.${locale}, description.${fallbackLocale})
  }
}`;

export const getGlobalAccountInfo = async (locale: string) => {
  const query = globalAccountInfoQuery(locale);
  const sanityClient = getSanityClient();
  const result = await sanityClient.fetch<GlobalAccountInfoResult>(query);

  if (!result) {
    return { account_references: [], emails: [] } as GlobalAccountInfoResult;
  }

  return result;
};

const footerInfoQuery = () => `
*[ _type == "website_settings"][0] {
  'email': emails[type == 'Main'][0].email,
  'address': account_references[is_main == true][0].address,
  'phone': account_references[is_main == true][0].phone
}`;

/**
 * Recupera le info necessarie per il footer (Indirizzo, Telefono, Email)
 * @returns
 */
interface FooterInfo {
  email: string;
  address: string;
  phone: string;
}
export const getFooterInfo = async () => {
  const query = footerInfoQuery();
  const sanityClient = getSanityClient();
  const result = await sanityClient.fetch<FooterInfo>(query);

  if (!result) {
    return { email: "", address: "", phone: "" } as FooterInfo;
  }

  return result;
};

const assistanceInfoQuery = () => `
*[ _type == "website_settings"][0] {
  'email': emails[type == 'Support'][0].email,
  'address': account_references[is_main == true][0].address,
  'phone': account_references[is_main == true][0].phone
}`;

/**
 * Recupera le info necessarie per la pagina Assistenza (Indirizzo, Telefono, Email di Support)
 * @returns
 */
export const getAssistanceInfo = async () => {
  const query = assistanceInfoQuery();
  const sanityClient = getSanityClient();
  const result = await sanityClient.fetch<AssistanceInfoResult>(query);

  if (!result) {
    return { email: "", address: "", phone: "" } as AssistanceInfoResult;
  }

  return result;
};

const navbarConfigQuery = (locale: string) => `
*[ _type == "website_settings" && _id == "websiteSettings"][0]{
  'navbar_config': navbar_config[]{
    _type,
    _key,
    _type == 'customLink' => ${buildCustomLinkQuery(locale)},
    _type == 'navbar_submenu' => {
      'title': coalesce(title.${locale}, title.${fallbackLocale}),
      'elements': submenu_elements[] {
         _type,
        _key,
        _type == 'customLink' => ${buildCustomLinkQuery(locale)},
        _type == 'navbar_submenu_section' => {
          'title': coalesce(title.${locale}, title.${fallbackLocale}),
          'links': section_links[]${buildCustomLinkQuery(locale)}
        }
      }
    },
  },
  'side_navbar_config': call_to_action[]{
    type,
    'link': link${buildCustomLinkQuery(locale)}
  }
}
`;
export const getNavbarConfig = async (locale: string) => {
  const query = navbarConfigQuery(locale);
  const sanityClient = getSanityClient();
  const result = await sanityClient.fetch<NavbarConfigResult>(query);

  if (!result) {
    return { navbar_config: [], side_navbar_config: [] } as NavbarConfigResult;
  }

  return result;
};

/**
 * Recupera l'id della pagina da utilizzare come HomePage
 * @returns
 */
interface HomepageResult {
  homepage: string;
}
export const getHomepageId = async () => {
  const query = `*[ _type == "website_settings"][0]{
    'homepage': homepage._ref
  }`;
  const sanityClient = getSanityClient();
  const result = await sanityClient.fetch<HomepageResult>(query);

  if (!result) {
    throw new Error("Homepage was not configured in SANITY!");
  }

  return result;
};

/* BLOG */
export const getBlogMainPage = (locale: string) => {
  return getPageById(CustomPageIds.BLOG, locale);
};

const allPostsSlugsQuery = () => {
  const querySlices = locales.map(
    (l) => `'title_${l}': title.${l}, 'slug_${l}': slug.${l}.current`,
  );
  return `*[ _type == "post"]{
    _id,
    ${querySlices.join(",")},
    'slug_default': slug.${fallbackLocale}.current,
    _updatedAt
  }`;
};

export const getAllPostsSlugs = () => {
  const query = allPostsSlugsQuery();
  return sanityClient.fetch<PagesConfigResult[]>(query);
};

const blogPostsQuery = (
  locale: string,
  setLength: number,
  maxPublishDate?: Date,
) => {
  const dateFilter = maxPublishDate
    ? `&& publish_date < '${maxPublishDate.toISOString().split("T")[0]}' `
    : "";

  return `
    *[ _type == "post" ${dateFilter}]| order(publish_date desc)[0...${setLength}] {
      _key,
      'title': coalesce(title.${locale}, title.${fallbackLocale}),
      'description': coalesce(description.${locale}, description.${fallbackLocale}),
      'author': author,
      'slug': coalesce(slug.${locale}.current, slug.${fallbackLocale}.current),
      'publish_date': publish_date,
      'cover': cover,
    }`;
};

export const getBlogPosts = (
  locale: string,
  setLength: number,
  maxPublishDate?: Date,
) => {
  const query = blogPostsQuery(locale, setLength, maxPublishDate);
  const sanityClient = getSanityClient();
  return sanityClient.fetch<Post[]>(query);
};

export const getPostsCount = (locale?: string) => {
  const query = `count(*[ _type == "post" ])`;
  const sanityClient = getSanityClient();
  return sanityClient.fetch<number>(query);
};

const postBySlugQuery = (locale: string, slug: string) => {
  const slugSlices = locales.map(
    (l) =>
      `'slug_${l}': coalesce(slug.${l}.current, slug.${fallbackLocale}.current)`,
  );

  return `*[ _type == "post" && slug.${locale}.current == '${slug}' ][0] {
    _key,
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'description': coalesce(description.${locale}, description.${fallbackLocale}),
    'author': author,
    'slug': coalesce(slug.${locale}.current, slug.${fallbackLocale}.current),
    ${slugSlices.join(", ")},
    'publish_date': publish_date,
    'cover': cover,
    'body': body.${locale}[] ${deconstructBodyElementsQuery(locale)},
    'carousel': carousel ${buildCarouselQuery(locale)}
  }`;
};

const deconstructBodyElementsQuery = (locale: string) => `
  {
    ...,
    'markDefs': markDefs[] {
      _type,
      _type != 'link' => {
        ...
      },
      _type == 'link' => ${buildCustomLinkQuery(locale)},
      _type == 'imageText' => {
      'imageColumn': imageColumn.asset->url,
      'textColumn': textColumn,
      'imagePosition': imagePosition,
    },
    }
  }
`;

export const getPostBySlug = (locale: string, slug: string) => {
  const query = postBySlugQuery(locale, slug);
  const sanityClient = getSanityClient();
  return sanityClient.fetch<Post & { [key: string]: string }>(query);
};

/* EVENTS */
export const getEventsMainPage = (locale: string) => {
  return getPageById(CustomPageIds.EVENTS, locale);
};

const allEventsSlugsQuery = () => {
  const querySlices = locales.map(
    (l) => `'title_${l}': title.${l}, 'slug_${l}': slug.${l}.current`,
  );

  return `*[ _type == "event"]{
    _id,
    ${querySlices.join(",")},
    'slug_default': slug.${fallbackLocale}.current,
    _updatedAt
  }`;
};

export const getAllEventsSlugs = () => {
  const query = allEventsSlugsQuery();
  return sanityClient.fetch<PagesConfigResult[]>(query);
};

const buildEventRegistrationSectionQuery = (locale: string) => {
  const buildEventRegistrationCardQuery = (locale: string) => `
  {
    _key,
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'subtitle': coalesce(subtitle.${locale}, subtitle.${fallbackLocale}),
    'registration_deadline': registration_deadline,
    'images': images[].asset->url,
    'type': type,
    'buttonLink': buttonLink${buildCustomLinkQuery(locale)}
  }
  `;

  return `{
    'header': coalesce(header.${locale}, header.${fallbackLocale}),
    'eventRegistrationCards': event_registration_cards[] ${buildEventRegistrationCardQuery(locale)}
  }`;
};

const eventsQuery = (
  locale: string,
  setLength: number,
  maxEventDate?: Date,
) => {
  const dateFilter = maxEventDate
    ? `&& event_date.single_date > '${maxEventDate.toISOString().split("T")[0]}' `
    : "";

  return `*[_type == "event" ${dateFilter}] | order(event_date.single_date desc)[0...${setLength}] {
      _id,
      'title': coalesce(title.${locale}, title.${fallbackLocale}),
      'description': coalesce(description.${locale}, description.${fallbackLocale}),
      'location': location,
      'organizer': organizer,
      'event_date': {
        'date_type': event_date.date_type,
        'single_date': event_date.single_date,
        'dates': event_date.dates[]{
          date,
          start_time,
          end_time
        },
        'start_date': event_date.start_date,
        'start_time': event_date.start_time,
        'end_date': event_date.end_date,
        'end_time': event_date.end_time
      },
      'slug': coalesce(slug.${locale}.current, slug.${fallbackLocale}.current),
      'cover': cover.asset->url,
    }`;
};

export const getEvents = (
  locale: string,
  setLength: number,
  maxEventDate?: Date,
) => {
  const query = eventsQuery(locale, setLength, maxEventDate); // Use eventsQuery here
  const sanityClient = getSanityClient();
  return sanityClient.fetch<Event[]>(query); // Ensure this fetches Event type
};

export const getEventsCount = (locale?: string) => {
  const query = `count(*[ _type == "event" ])`; // Changed _type to "event"
  const sanityClient = getSanityClient();
  return sanityClient.fetch<number>(query); // Ensure it fetches a number
};
const eventBySlugQuery = (locale: string, slug: string) => {
  const slugSlices = locales.map(
    (l) =>
      `'slug_${l}': coalesce(slug.${l}.current, slug.${fallbackLocale}.current)`,
  );

  return `*[_type == "event" && slug.${locale}.current == '${slug}'][0] {
    _id,
    'title': coalesce(title.${locale}, title.${fallbackLocale}),
    'description': coalesce(description.${locale}, description.${fallbackLocale}),
    'location': location,
    'organizer': organizer,
    'event_date': {
      'date_type': event_date.date_type,
      'single_date': event_date.single_date,
      'dates': event_date.dates[]{
        date,
        start_time,
        end_time
      },
      'start_date': event_date.start_date,
      'start_time': event_date.start_time,
      'end_date': event_date.end_date,
      'end_time': event_date.end_time
    },
    ${slugSlices.join(", ")},
    'slug': coalesce(slug.${locale}.current, slug.${fallbackLocale}.current),
    'cover': cover.asset->url,
    'body': body.${locale}[] ${deconstructBodyElementsQuery(locale)},
    'pageBuilder': pageBuilder[]{
    _type,
    _key,
    'background': bg_color,
    _type == 'video_section' => ${buildVideoSectionQuery()},
    _type == 'team_list' => ${buildTeamListQuery(locale, fallbackLocale)},
    _type == 'carousel' => ${buildCarouselQuery(locale)},
    _type == 'event_registration_section' => ${buildEventRegistrationSectionQuery(locale)},
    }
  }`;
};

export const getEventBySlug = (locale: string, slug: string) => {
  const query = eventBySlugQuery(locale, slug); // Reusing the existing post query for events
  const sanityClient = getSanityClient();
  return sanityClient.fetch<Event & { [key: string]: string }>(query); // Adjusting type to Event
};

/**
 * Recupera le info necessarie per il metadata di Homepage
 * @returns
 */
export const homepageMetadataFromSettings = async (locale: string) => {
  const query = `*[ _type == "website_settings"][0]{
    'homepageId': homepage._ref
  }`;

  const sanityClient = getSanityClient();
  const { homepageId } = await sanityClient.fetch(query);

  if (!homepageId) {
    throw new Error("Homepage reference not found in website settings!");
  }

  const homepageQuery = `*[ _id == "${homepageId}"]{
    _id,
    'metaTitle': metaTitle.${locale},
    'metaDescription': metaDescription.${locale}
  }[0]`;

  const homepageMetadata = await sanityClient.fetch(homepageQuery);

  if (!homepageMetadata) {
    throw new Error("Homepage metadata not found in SANITY!");
  }

  return homepageMetadata;
};
