import { motion } from "motion/react";
import { Link } from "wouter";

export const Intro = () => {
  return (
    <section className="flex flex-col max-w-xl px-5 pt-10 pb-5 mx-auto mt-10 gap-y-3 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-center lg:text-4xl"
      >
        Innovación y Precisión en la Industria Metalúrgica
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="text-sm italic font-medium text-center lg:text-base text-neutral-600"
      >
        Más de 20 años brindando soluciones en diseño, fabricación y
        mantenimiento industrial
      </motion.p>

      <nav className="flex justify-center w-full mt-5 gap-x-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="outline-none text-sm lg:text-base font-bold bg-neutral-800 border-2 text-white border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 px-3 py-1.5 lg:py-2 lg:px-4 rounded-xl transition-all duration-300 ease-in-out active:scale-95 hover:shadow-md hover:shadow-neutral-700/50"
          >
            Contáctanos
          </Link>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/products"
            className="outline-none flex text-sm lg:text-base font-bold bg-transparent text-neutral-800 px-3 py-1.5 lg:py-2 lg:px-4 rounded-xl border-2 border-neutral-800 hover:bg-neutral-100 transition-all duration-300 ease-in-out active:scale-9 hover:shadow-md hover:shadow-neutral-500/50"
          >
            <p>Nuestros productos</p>
            <span className="pl-2">{">"}</span>
          </Link>
        </motion.button>
      </nav>
    </section>
  );
};
