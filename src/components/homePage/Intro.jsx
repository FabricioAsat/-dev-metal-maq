import { motion } from "motion/react";
import { Link } from "wouter";

export const Intro = () => {
  return (
    <section className="max-w-xl mx-auto pt-10 px-5 pb-5 mt-10 flex flex-col gap-y-3 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl lg:text-4xl font-bold text-center"
      >
        Innovación y Precisión en la Industria Metalúrgica
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="text-sm lg:text-base font-medium text-center italic text-neutral-600"
      >
        Más de 20 años brindando soluciones en diseño, fabricación y
        mantenimiento industrial
      </motion.p>

      <nav className="w-full flex justify-center gap-x-10 mt-5">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="outline-none text-sm lg:text-base font-bold bg-neutral-800 border-2 text-white border-neutral-800 hover:bg-neutral-600 px-3 py-1.5 lg:py-2 lg:px-4 rounded-xl transition-colors duration-300 ease-in-out active:scale-95"
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
            className="outline-none flex text-sm lg:text-base font-bold bg-transparent text-neutral-800 px-3 py-1.5 lg:py-2 lg:px-4 rounded-xl border-2 border-neutral-800 hover:bg-neutral-100 transition-colors duration-300 ease-in-out active:scale-95"
          >
            <p>Nuestros productos</p>
            <span className="pl-2">{">"}</span>
          </Link>
        </motion.button>
      </nav>
    </section>
  );
};
