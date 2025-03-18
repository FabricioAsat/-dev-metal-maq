import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "wouter";

export const Hamburger = () => {
  const menuItems = [
    { title: "Inicio", route: "/" },
    { title: "Sobre nosotros", route: "/about" },
    { title: "Servicios", route: "/services" },
    { title: "Contactos", route: "/support" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Hamburger button */}
      <motion.button
        className="flex flex-col justify-between items-center w-8 h-5 bg-transparent border-none cursor-pointer"
        onClick={handleClick}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            transform: "rotate(0deg)",
          },
          closed: {
            transform: "rotate(0deg)",
          },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-7 h-1 bg-neutral-800 rounded-full"
          variants={{
            open: {
              transform: "translateY(8px) rotate(45deg)",
            },
            closed: {
              transform: "translateY(0) rotate(0deg)",
            },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-7 h-1 bg-neutral-800 rounded-full"
          variants={{
            open: {
              opacity: 0,
            },
            closed: {
              opacity: 1,
            },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-7 h-1 bg-neutral-800 rounded-full"
          variants={{
            open: {
              transform: "translateY(-8px) rotate(-45deg)",
            },
            closed: {
              transform: "translateY(0) rotate(0deg)",
            },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Menu links buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bg-black/50 w-full left-0 top-12 md:top-14 lg:top-16 z-50 h-[calc(100vh-48px)] md:h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)])"
          >
            <ul className="flex flex-col items-start text-base font-bold italic bg-white px-5 border-t-2 border-t-neutral-200 py-2">
              {menuItems.map(({ route, title }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-1 hover:text-neutral-500"
                >
                  <Link onClick={handleClick} href={route}>
                    {title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
