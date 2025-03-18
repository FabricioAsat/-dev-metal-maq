import { motion } from "motion/react";
import { Link } from "wouter";

export const ServiceDetail = ({ service }) => {
  return (
    <article className="w-full max-w-5xl p-6 mx-auto bg-white rounded-lg shadow-md md:shadow-lg shadow-neutral-800/15">
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        src={service.image}
        alt={service.title}
        className="object-cover w-full h-64 rounded-lg select-none"
      />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 text-2xl font-bold text-center"
      >
        {service.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-2 text-sm italic text-neutral-500"
      >
        {service.details}
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 text-xl font-bold"
      >
        Aplicaciones
      </motion.h3>

      <ul
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="list-disc list-inside text-neutral-500"
      >
        {service.applications.map((app, index) => (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm"
            key={index}
          >
            {app}
          </motion.li>
        ))}
      </ul>

      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 text-xl font-bold"
      >
        Beneficios
      </motion.h3>
      <ul className="list-disc list-inside text-neutral-500">
        {service.benefits.map((benefit, index) => (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm"
            key={index}
          >
            {benefit}
          </motion.li>
        ))}
      </ul>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-5 md:mt-10"
      >
        <Link
          href="/support"
          className="outline-none text-sm lg:text-base bg-neutral-700 border-2 text-white border-neutral-600 hover:bg-neutral-600 hover:border-neutral-600 px-3 py-1.5 lg:py-2 lg:px-4 rounded-xl transition-all duration-300 ease-in-out active:scale-95 hover:shadow-md hover:shadow-neutral-600/25"
        >
          Consultar sobre este servicio
        </Link>
      </motion.button>
    </article>
  );
};
