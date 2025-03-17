import companyNameSVG from "../assets/company-name.svg";

export const Logo = ({ className }) => {
  return (
    <picture className={"h-full flex items-center justify-center" + className}>
      <img src={companyNameSVG} alt="Company name SVG" className="h-full" />
    </picture>
  );
};
