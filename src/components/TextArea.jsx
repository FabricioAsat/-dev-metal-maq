import { motion } from "motion/react";

export const TextArea = ({
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
    <motion.textarea
      onChange={handleChange}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      name="description"
      placeholder="Alguna información más que agregar?"
      rows={4}
      className="w-full px-4 py-2 italic bg-white border rounded-md shadow-lg outline-none md:col-span-2 hover:bg-neutral-100 border-neutral-800"
    ></motion.textarea>
  );
};
