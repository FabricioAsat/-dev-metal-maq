import { motion } from "motion/react";

export const Input = ({
  type = "text",
  placeholder = "",
  objName,
  objSetter,
}) => {
  function handleChange(e) {
    objSetter((prev) => ({
      ...prev,
      [objName]: e.target.value,
    }));
  }

  return (
    <motion.input
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      type={type}
      name={objName}
      autoComplete="off"
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 italic bg-white border rounded-md shadow-lg outline-none hover:bg-neutral-100 border-neutral-800"
    />
  );
};
