import { motion } from "motion/react";

import { Logo } from "./Logo";
import { Hamburger } from "./Hamburger";
import { Links } from "./Links";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50">
      <motion.span
        className="h-12 md:h-14 lg:h-16 flex items-center justify-start py-2 px-5 gap-x-3 max-w-7xl w-full mx-auto z-50 bg-white"
        initial={{ opacity: 0 }} // inicio opacidad 0
        animate={{ opacity: 1 }} // termina opacidad 1
        transition={{ duration: 0.5 }}
      >
        <span className="lg:hidden flex items-center justify-start">
          <Hamburger />
        </span>

        <Logo />
        <Links />
      </motion.span>
    </header>
  );
};
