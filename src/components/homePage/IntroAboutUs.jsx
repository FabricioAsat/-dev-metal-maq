import React from "react";
import { motion } from "motion/react";
import { Link } from "wouter";

import groupPhotoImage from "../../assets/group-photo.svg";

export const IntroAboutUs = () => {
  return (
    <section className="mx-auto bg-white/25 flex flex-col gap-y-3 lg:px-10 lg:col-span-2">
      <motion.picture
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img
          src={groupPhotoImage}
          alt="Group team photo"
          className="w-full max-w-2xl mx-auto"
        />
      </motion.picture>

      <article className="flex flex-col items-center max-w-xl mx-auto px-5 lg:px-10 -translate-y-10 pt-2">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl lg:text-3xl font-bold text-center bg-white px-8 rounded-xl py-2"
        >
          Sobre nosotros
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-sm lg:text-base font-medium text-center italic text-neutral-600 mt-3"
        >
          Somos una empresa metalúrgica con más de 700m² de infraestructura,
          especializada en diseño, fabricación y reparación de máquinas y
          dispositivos industriales
        </motion.p>

        <nav className="w-full flex items-center justify-end">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/about"
              className="text-sm italic font-normal text-sky-400 underline-offset-1 underline"
            >
              Leer más...
            </Link>
          </motion.button>
        </nav>
      </article>
    </section>
  );
};
