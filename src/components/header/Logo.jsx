import React from "react";

import companyNameSVG from "../../assets/company-name.svg";

export const Logo = () => {
  return (
    <picture className="h-full flex items-center justify-center">
      <img src={companyNameSVG} alt="Company name SVG" className="h-10 max-h-10 min-h-10" />
    </picture>
  );
};
