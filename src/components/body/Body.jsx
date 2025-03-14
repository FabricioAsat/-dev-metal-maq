import { motion } from "motion/react";

export const Body = ({ children }) => {
  return (
    <main className="w-full h-screen pt-12 md:pt-14 lg:pt-16">
      <motion.div
        className="relative max-w-7xl mx-auto flex flex-col gap-y-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </main>
  );
};
