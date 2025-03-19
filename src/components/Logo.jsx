import { Link } from "wouter";
import companyNameSVG from "../assets/company-name.svg";

export const Logo = ({ className }) => {
  function handleToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <picture className={"h-full flex items-center justify-center" + className}>
      <Link onClick={handleToTop} className={"w-full h-full"} href="/">
        <img src={companyNameSVG} alt="Company name SVG" className="h-full" />
      </Link>
    </picture>
  );
};
