import { SlugMapping } from "@/components/common/Navbar";
import PageBaseLayout from "@/components/common/PageBaseLayout";
import { locales } from "@/i18n/settings";
import { iubendaPolicyIds } from "@/iubenda/settings";
import { getPrivacyPolicyContent } from "@/iubenda/utils";
import { FC } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const PrivacyPolicy: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const slugMapping: SlugMapping = {};
  for (const l of locales) {
    slugMapping[l] = "privacy-policy";
  }

  const policyId =
    iubendaPolicyIds.find((p) => p.locale === locale)?.policyId || "";
  const content = await getPrivacyPolicyContent(policyId);
  /* TODO css non viene carcito con next/head. Sarebbe forse preferibile */

  return (
    <PageBaseLayout slugMapping={slugMapping}>
      <link
        href="https://www.iubenda.com/assets/privacy_policy.css"
        rel="stylesheet"
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageBaseLayout>
  );
};

export default PrivacyPolicy;