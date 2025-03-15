import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import maquinaryImage from "../../assets/maquinary.svg";
import metalStampingImage from "../../assets/metal-stamping.svg";
import industrialDeviceImage from "../../assets/industrial-device.svg";
import CNCImage from "../../assets/CNC.svg";
import welderImage from "../../assets/welder.svg";
import pressStampingImage from "../../assets/press-stamping.svg";
import { useState } from "react";

const products = [
  {
    image: maquinaryImage,
    title: "Máquinas industriales",
    desc: "Diseño y fabricación de maquinaria especializada para la industria metalúrgica, metalmecánica, alimenticia, plástica y agroganadera",
  },

  {
    image: metalStampingImage,
    title: "Matrices para estampado de metal",
    desc: "Elaboramos matrices de alta precisión para el conformado y estampado de piezas metálicas, optimizando la producción industrial",
  },

  {
    image: industrialDeviceImage,
    title: "Dispositivos de precisión",
    desc: "Fabricamos dispositivos industriales personalizados para mejorar la eficiencia y calidad en los procesos de producción",
  },

  {
    image: CNCImage,
    title: "Proceso de mecanizado",
    desc: "Utilizamos tecnología CNC para cortar y dar forma a piezas metálicas con máxima precisión y acabados de alta calidad",
  },

  {
    image: welderImage,
    title: "Soldadura industrial",
    desc: "Expertos en soldadura MIG-MAG, TIG y por punto, garantizando estructuras resistentes y acabados impecables",
  },

  {
    image: pressStampingImage,
    title: "Estampado de piezas metálicas",
    desc: "Producción de piezas metálicas mediante prensas de estampado de alta potencia, logrando precisión y durabilidad",
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  arrows: false,
};

export const IntroProducts = () => {
  const [isHover, setIsHover] = useState(false);

  function setHovering(isHover) {
    setIsHover(isHover);
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 rounded-xl">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl lg:text-3xl font-bold text-center bg-white px-8 rounded-xl pb-2"
        >
          Qué hacemos en Metal-Maq
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-5 mb-5 text-sm italic text-center text-neutral-600"
        >
          En <b>Metal-Maq</b>, nos especializamos en la fabricación y mecanizado
          de piezas metálicas de alta precisión, garantizando durabilidad,
          resistencia y exactitud en cada producto. Nos enfocamos en ofrecer
          soluciones personalizadas para la industria, utilizando tecnología de
          vanguardia y materiales de primera calidad
          <hr className="border-2 w-1/4 mx-auto border-sky-300 mt-2" />
        </motion.p>
      </div>
      <Slider {...settings}>
        {products.map(({ image, title, desc }, index) => (
          <picture
            key={index}
            onMouseLeave={() => {
              setHovering(false);
            }}
            onMouseEnter={() => {
              setHovering(true);
            }}
            className="relative w-full h-full rounded-xl"
          >
            <img
              src={image}
              alt={title + " Image"}
              className="select-none outline-none"
            />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 20 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="absolute bottom-0 flex flex-col items-center justify-end w-full h-2/3 pb-5 bg-gradient-to-t from-black/75 via-black/50 to-transparent rounded-xl"
            >
              <h4 className="max-w-xl text-base font-bold text-center text-white md:text-lg">
                {title}
              </h4>
              <hr className="border w-1/5 mx-auto border-sky-300 mb-2" />
              <small className="max-w-xl px-5 text-xs italic text-center text-white md:text-sm">
                {desc}
              </small>
            </motion.span>
          </picture>
        ))}
      </Slider>
    </div>
  );
};
