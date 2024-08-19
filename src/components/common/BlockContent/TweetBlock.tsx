"use client";

import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { TweetBlock, TweetLogoContainer, TweetPlaceholder } from "./styles";

type TweetBlockProps = {
  tweetUrl?: string;
};

const TweetBlockComponent: FunctionComponent<TweetBlockProps> = ({
  tweetUrl,
}) => {
  const [blockQuote, setBlockQuote] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fetchTweet = async () => {
      try {
        if (tweetUrl) {
          const urlParams = new URLSearchParams({ tweetUrl });
          const data = await fetch("/api/twitter?" + urlParams.toString());
          setBlockQuote(await data.text());
        }
      } catch (e) {
        setBlockQuote(undefined);
      }
    };

    fetchTweet();
  }, [tweetUrl]);

  if (!blockQuote) {
    return (
      <TweetPlaceholder>
        <TweetLogoContainer animated={true}>
          <Image src={"/x.svg"} width={50} height={50} alt="X"></Image>
        </TweetLogoContainer>
      </TweetPlaceholder>
    );
  }

  return (
    <TweetBlock href={tweetUrl || ""} target="_blank" rel="noopener noreferrer">
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <TweetLogoContainer>
          <Image src={"/x.svg"} width={25} height={25} alt="X"></Image>
        </TweetLogoContainer>
      </div>
      <div dangerouslySetInnerHTML={{ __html: blockQuote }} />
    </TweetBlock>
  );
};

export default TweetBlockComponent;
