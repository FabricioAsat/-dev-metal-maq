import { motion } from "motion/react";
import { Link } from "wouter";

export const Links = () => {
  // const menuItems = ["Inicio", "Sobre nosotros", "Servicios", "Contactos"];
  const menuItems = [
    { title: "Inicio", route: "/" },
    { title: "Sobre nosotros", route: "/about" },
    { title: "Servicios", route: "/services" },
    { title: "Inicio", route: "/" },
  ];

  return (
    <motion.nav
      className="items-center justify-center hidden w-full gap-x-7 lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {menuItems.map(({ title, route }, index) => (
        <motion.li
          key={index}
          className="text-base italic font-bold text-black list-none hover:text-neutral-500"
          initial={{ y: -20, opacity: 0 }} // Empieza movido hacia arriba
          animate={{ y: 0, opacity: 1 }} // Vuelve a su posición
          transition={{
            duration: 0.5,
            delay: index * 0.1, // Cada item aparece con un pequeño retraso
          }}
        >
          <Link href={route}>{title}</Link>
        </motion.li>
      ))}
    </motion.nav>
  );
};
