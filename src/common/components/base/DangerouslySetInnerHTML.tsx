import React from "react";
import DOMPurify from "isomorphic-dompurify";

type DangerouslySetInnerHtmlProps = {
  content: string;
  styles?: string;
  isLink?: boolean;
};

const DangerouslySetInnerHtml: React.FC<DangerouslySetInnerHtmlProps> = ({
  content,
  styles,
  isLink,
}) => {
  const config = {
    ADD_ATTR: ["target", "style"],
  };

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: isLink
          ? DOMPurify.sanitize(content, config)
          : DOMPurify.sanitize(content),
      }}
      className={styles}
    />
  );
};

export default DangerouslySetInnerHtml;
