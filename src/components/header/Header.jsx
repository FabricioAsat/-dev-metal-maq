import { motion } from "motion/react";

import { Logo } from "./Logo";
import { Hamburger } from "./Hamburger";
import { Links } from "./Links";

export const Header = () => {
  return (
    <header className="w-full">
      <motion.span
        className="relative h-12 sm:h-14 lg:h-16 flex items-center justify-start py-2 px-5 gap-x-3 max-w-7xl mx-auto"
        initial={{ opacity: 0 }} // inicio opacidad 0
        animate={{ opacity: 1 }} // termina opacidad 1
        transition={{ duration: 0.5 }}
      >
        <span className="md:hidden">
          <Hamburger />
        </span>

        <Logo />
        <Links />
      </motion.span>
    </header>
  );
};
