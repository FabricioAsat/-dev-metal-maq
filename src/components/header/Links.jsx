import { motion } from "motion/react";

export const Links = () => {
  const menuItems = ["Inicio", "Sobre nosotros", "Servicios", "Contactos"];

  return (
    <motion.nav
      className="items-center justify-center w-full gap-x-7 hidden lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          className="text-base text-black list-none italic font-bold hover:text-neutral-500"
          initial={{ y: -20, opacity: 0 }} // Empieza movido hacia arriba
          animate={{ y: 0, opacity: 1 }} // Vuelve a su posición
          transition={{
            duration: 0.5,
            delay: index * 0.1, // Cada item aparece con un pequeño retraso
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.nav>
  );
};
