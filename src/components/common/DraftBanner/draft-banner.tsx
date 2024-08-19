"use client";

import useTranslation from "@/i18n/useTranslation";
import { FC } from "react";
import {
  DisableButton,
  DraftBannerContainer,
  DraftText,
  InnerContainer,
} from "./draft-banner.styled";

const DraftBanner: FC = () => {
  const { t: translateFn } = useTranslation();

  const disableDraftMode = () => {
    fetch("/api/draft/disable", { method: "POST" }).then(() =>
      document.location.reload(),
    );
  };

  return (
    <DraftBannerContainer>
      <InnerContainer>
        <DraftText>
          {translateFn("Attenzione, la modalità preview è attiva")}
        </DraftText>
        <DisableButton onClick={disableDraftMode}>
          {translateFn("Disattiva")}
        </DisableButton>
      </InnerContainer>
    </DraftBannerContainer>
  );
};

export default DraftBanner;
