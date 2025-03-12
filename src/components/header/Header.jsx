import React from "react";
import { Logo } from "./Logo";
import { Hamburger } from "./Hamburger";

export const Header = () => {
  return (
    <header className="relative h-12 sm:h-14 lg:h-16 flex items-center justify-start py-2 px-5 gap-x-3">
      <Hamburger />
      <Logo />
    </header>
  );
};
