import React from "react";
import { TextLink } from "../UI";

function FooterColumn({ heading, links = [] }) {
  return (
    <div>
      <h2 className="tw-font-medium tw-tracking-widest tw-uppercase tw-text-sm tw-mb-5 tw-text-base-400">
        {heading}
      </h2>
      <ul className="tw-list-none tw-space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <TextLink href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
