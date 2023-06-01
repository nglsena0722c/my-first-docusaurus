import React from "react";

export default function Cocosgame() {
  const iframe = '<iframe src="/my-first-docusaurus/img/web-desktop/index.html" width="100%" height="100%"></iframe>';
  return (
    <div
      style={{ width: 768, height: 512 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}
