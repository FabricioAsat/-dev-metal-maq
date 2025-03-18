import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function AccordionSelect({
  options = [],
  defaultOption,
  objName,
  objSetter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    defaultOption || "Seleccione una opción"
  );
  const [isDefaultOption, setIsDefaultOption] = useState(true);

  const dropdownRef = useRef(null);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option) {
    setSelected(option);

    objSetter((prev) => ({
      ...prev,
      [objName]: option,
    }));
    setIsOpen(false);
    setIsDefaultOption(false);
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto" ref={dropdownRef}>
      {/* Input que actúa como botón */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full px-4 py-2 text-left bg-white border rounded-lg shadow-md cursor-pointer border-neutral-800 gap-x-1 hover:bg-neutral-100"
      >
        <small
          className={`mr-1 transition-transform duration-300 ease-in-out text-xs ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ▷
        </small>
        <span className={`${isDefaultOption ? "italic text-neutral-700" : ""}`}>
          {selected}
        </span>
        <b className={`${isDefaultOption ? "text-red-300" : "hidden"}`}>*</b>
      </motion.div>

      {/* Contenedor del dropdown con animación */}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`absolute z-40 w-full bg-white border rounded-lg shadow-md mt-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <motion.li
            key={index}
            onClick={() => handleSelect(option)}
            whileHover={{ scale: 0.95 }}
            className="px-4 py-2 italic cursor-pointer hover:bg-neutral-100"
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
