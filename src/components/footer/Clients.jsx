import { motion } from "motion/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoAbPam from "../../assets/clients/logo-aberturas-pampeanas.png";
import logoAmPam from "../../assets/clients/logo-america-pampas.png";
import logoAmuyen from "../../assets/clients/logo-amuyen.png";
import logoCargin from "../../assets/clients/logo-cargil.png";
import logoCasaAlarcia from "../../assets/clients/logo-casa-alarcia.png";
import logoDmEscapes from "../../assets/clients/logo-dm-escapes.png";
import logoLaOrquidea from "../../assets/clients/logo-la-orquidea.png";
import logoLinEIng from "../../assets/clients/logo-linea-e-ing.png";
import logoMolCa from "../../assets/clients/logo-molinos-cañuelas.png";
import logoPagrun from "../../assets/clients/logo-pagrun.png";
import logoRotopam from "../../assets/clients/logo-rotopam.svg";
import logoTornFM from "../../assets/clients/logo-torneria-fabio-martinez.png";
import logoVarRur from "../../assets/clients/logo-varela-rurales.png";

const clients = [
  { image: logoAbPam, link: "https://aberturaspampeanas.com.ar/" },
  { image: logoAmPam, link: "https://www.americapampa.com/" },
  { image: logoAmuyen, link: "https://www.amuyenmotores.com.ar/" },
  { image: logoCargin, link: "https://www.cargillargentina.com.ar/es/inicio" },
  { image: logoCasaAlarcia, link: "https://www.casaalarcia.com/" },
  { image: logoDmEscapes, link: "https://www.dmescapes.com.ar/" },
  { image: logoLaOrquidea, link: "https://www.tostaderolaorquidea.com.ar/" },
  { image: logoLinEIng, link: "http://lineae.com.ar/" },
  { image: logoMolCa, link: "https://www.molinocanuelas.com/es" },
  { image: logoPagrun, link: "http://www.pagrun.com.ar/phone/index.html" },
  { image: logoRotopam, link: "https://www.rotopam.com.ar/index" },
  { image: logoTornFM, link: "https://fabiomartinezsrl.com.ar/" },
  { image: logoVarRur, link: "https://www.varelarurales.com.ar/" },
];

export const Clients = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4, // Muestra 4 logos a la vez (ajústalo según el diseño)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Si quieres flechas, ponlo en true
    dots: false, // Si quieres indicadores, ponlo en true
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-xl mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl lg:text-3xl font-bold text-center"
        >
          Nuestros clientes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-5 text-sm italic text-center text-neutral-600 mb-2"
        >
          Estos son los profesionales que confian en nosotros
        </motion.p>
        <hr className="border-2 w-1/3 mx-auto border-sky-300" />
      </div>

      <article className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {clients.map(({ image, link }, index) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex items-center justify-center p-4"
            >
              <img
                src={image}
                alt={`Cliente ${index + 1}`}
                className="h-20 mx-auto grayscale hover:grayscale-0 outline-none transition-all duration-300 ease-in-out select-none"
              />
            </a>
          ))}
        </Slider>
      </article>
    </section>
  );
};
