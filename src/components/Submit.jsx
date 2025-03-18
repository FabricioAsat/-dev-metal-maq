import { motion } from "motion/react";

export const Submit = ({ value }) => {
  return (
    <motion.input
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      type={"submit"}
      value={value || "Enviar"}
      className="outline-none text-sm md:text-base font-bold bg-neutral-800 border-2 text-white border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 px-3 py-1.5 md:py-2 md:px-4 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-neutral-700/50 max-w-sm w-full md:col-span-2 cursor-pointer mt-5"
    />
  );
};
