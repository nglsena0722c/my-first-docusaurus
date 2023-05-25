import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

const GiscusComponent = () => {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="Comments"
      repo="nglsena0722c/my-first-docusaurus"
      repoId="R_kgDOJmDOqQ"
      category="Announcements"
      categoryId="DIC_kwDOJmDOqc4CWubZ"
      mapping="specific"
      term="Welcome to xpla"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
    />
  );
};

export default GiscusComponent;
