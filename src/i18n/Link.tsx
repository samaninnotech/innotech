import LinkNext from "next/link";
import { AnchorHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import { fallbackLocale } from "./settings";
import useTranslation from "./useTranslation";
import { removeLocale } from "./utils";

type LinkProps = PropsWithChildren<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    locale?: string;
  }
>;

// eslint-disable-next-line react/display-name
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, locale, children, ...rest }, ref) => {
    const { locale: currentLocale } = useTranslation();
    const localizedHref =
      href.startsWith("/") && (!!locale || currentLocale !== fallbackLocale)
        ? `/${locale || currentLocale}${removeLocale(href)}`
        : href;

    return (
      <LinkNext ref={ref} href={localizedHref} {...rest}>
        {children}
      </LinkNext>
    );
  },
);

export default Link;
