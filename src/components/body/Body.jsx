import { motion } from "motion/react";

export const Body = ({ children }) => {
  return (
    <main className="w-full pt-12 md:pt-14 lg:pt-16">
      <motion.section
        className="relative flex flex-col mx-auto max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.section>
    </main>
  );
};
