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
    <div className="w-full max-w-3xl mx-auto">
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
            className="relative w-full h-full"
          >
            <img src={image} alt={title + " Image"} />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : 20 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="absolute bottom-0 flex flex-col items-center justify-end w-full h-full pb-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
            >
              <h4 className="max-w-xl text-base font-bold text-center text-white md:text-lg">
                {title}
              </h4>
              <small className="max-w-xl px-5 text-xs italic text-center text-neutral-200 md:text-sm">
                {desc}
              </small>
            </motion.span>
          </picture>
        ))}
      </Slider>
    </div>
  );
};
