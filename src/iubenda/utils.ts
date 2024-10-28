import { iubendaPolicyIds, iubendaSiteId } from "./settings";

export function getIubendaConfig(lang: string) {
  const cookiePolicyId =
    iubendaPolicyIds.find((p) => p.locale === lang)?.policyId || "";

  return {
    countryDetection: true,
    enableFadp: true,
    floatingPreferencesButtonDisplay: "bottom-right",
    gdprAppliesGlobally: false,
    perPurposeConsent: true,
    siteId: iubendaSiteId,
    cookiePolicyId,
    lang,
    banner: {
      acceptButtonCaptionColor: "#FFFFFF",
      acceptButtonColor: "#000000",
      acceptButtonDisplay: true,
      backgroundColor: "#FFB703",
      closeButtonDisplay: false,
      customizeButtonCaptionColor: "#000000",
      customizeButtonColor: "#FFFFFF",
      customizeButtonDisplay: true,
      explicitWithdrawal: true,
      listPurposes: true,
      position: "float-bottom-center",
      rejectButtonCaptionColor: "#FFFFFF",
      rejectButtonColor: "#000000",
      rejectButtonDisplay: true,
      showPurposesToggles: true,
      textColor: "#000000",
    },
    // callback: {
    //   onConsentGiven: function () {
    //     // Dispatch custom event for GTM
    //     const consentEvent = new Event("consent_given");
    //     window.dispatchEvent(consentEvent);
    //   },
    // },
  };
}

async function getIubendaContent(endpoint: string) {
  const response = await fetch(endpoint, { method: "GET" });
  try {
    const { success, content } = await response.json();

    if (!success || !content) {
      return null;
    }

    return content;
  } catch (error) {
    console.log("ERROR FETCHING FROM IUBENDA", error);
    return null;
  }
}

export async function getCookiePolicyContent(policyId: string) {
  if (!policyId) {
    return null;
  }

  const endpoint = `https://www.iubenda.com/api/privacy-policy/${policyId}/cookie-policy`;
  return getIubendaContent(endpoint);
}

export async function getPrivacyPolicyContent(policyId: string) {
  if (!policyId) {
    return null;
  }

  const endpoint = `https://www.iubenda.com/api/privacy-policy/${policyId}`;
  return getIubendaContent(endpoint);
}
