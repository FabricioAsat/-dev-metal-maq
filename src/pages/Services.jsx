import { Body } from "../components/body/Body";
import { ServiceDetail } from "../components/servicesPage/ServiceDetail";

import maquinaryImage from "../assets/maquinary.svg";
import metalStampingImage from "../assets/metal-stamping.svg";
import industrialDeviceImage from "../assets/industrial-device.svg";
import CNCImage from "../assets/CNC.svg";
import welderImage from "../assets/welder.svg";
import pressStampingImage from "../assets/press-stamping.svg";

const products = [
  {
    image: maquinaryImage,
    title: "Máquinas industriales",
    desc: "Diseñamos y fabricamos maquinaria especializada para la industria metalúrgica, metalmecánica, alimenticia, plástica y agroganadera.",
    details:
      "Nuestras máquinas industriales están diseñadas para optimizar la producción y mejorar la eficiencia en fábricas y talleres. Desarrollamos soluciones personalizadas según las necesidades de cada cliente.",
    applications: [
      "Líneas de ensamblaje",
      "Automatización de procesos",
      "Corte y conformado de materiales",
    ],
    benefits: [
      "Mayor precisión",
      "Optimización del tiempo de producción",
      "Reducción de costos operativos",
    ],
  },

  {
    image: metalStampingImage,
    title: "Matrices para estampado de metal",
    desc: "Elaboramos matrices de alta precisión para el conformado y estampado de piezas metálicas, optimizando la producción industrial.",
    details:
      "Fabricamos matrices personalizadas con tecnología de última generación, asegurando resistencia y durabilidad en los procesos de estampado.",
    applications: ["Automoción", "Electrodomésticos", "Industria aeroespacial"],
    benefits: [
      "Precisión extrema",
      "Mayor durabilidad",
      "Reducción de desperdicio de material",
    ],
  },

  {
    image: industrialDeviceImage,
    title: "Dispositivos de precisión",
    desc: "Fabricamos dispositivos industriales personalizados para mejorar la eficiencia y calidad en los procesos de producción.",
    details:
      "Nuestros dispositivos incluyen sistemas de sujeción, herramientas de calibración y sistemas automatizados de inspección para garantizar un control de calidad excepcional.",
    applications: [
      "Control de calidad",
      "Montaje de piezas",
      "Verificación de tolerancias",
    ],
    benefits: [
      "Menos errores en producción",
      "Mayor repetibilidad",
      "Automatización de inspección",
    ],
  },

  {
    image: CNCImage,
    title: "Proceso de mecanizado",
    desc: "Utilizamos tecnología CNC para cortar y dar forma a piezas metálicas con máxima precisión y acabados de alta calidad.",
    details:
      "Disponemos de equipos CNC de última generación para garantizar un mecanizado exacto, cumpliendo con los estándares más exigentes.",
    applications: [
      "Fabricación de piezas automotrices",
      "Componentes de maquinaria",
      "Moldes y matrices",
    ],
    benefits: [
      "Tolerancias mínimas",
      "Acabado perfecto",
      "Mayor rapidez en la producción",
    ],
  },

  {
    image: welderImage,
    title: "Soldadura industrial",
    desc: "Expertos en soldadura MIG-MAG, TIG y por punto, garantizando estructuras resistentes y acabados impecables.",
    details:
      "Nuestro equipo de soldadores certificados trabaja con distintos tipos de metales para estructuras de alta resistencia y precisión.",
    applications: [
      "Estructuras metálicas",
      "Construcción de maquinarias",
      "Industria naval",
    ],
    benefits: [
      "Uniones seguras y duraderas",
      "Reducción de defectos",
      "Versatilidad en materiales",
    ],
  },

  {
    image: pressStampingImage,
    title: "Estampado de piezas metálicas",
    desc: "Producción de piezas metálicas mediante prensas de estampado de alta potencia, logrando precisión y durabilidad.",
    details:
      "Nuestros sistemas de estampado permiten la producción en serie de piezas metálicas con alta precisión, reduciendo tiempos y costos.",
    applications: [
      "Fabricación en masa",
      "Componentes electrónicos",
      "Estructuras metálicas ligeras",
    ],
    benefits: [
      "Altas velocidades de producción",
      "Menos desperdicio de material",
      "Calidad uniforme en cada pieza",
    ],
  },
];

export const Services = () => {
  return (
    <Body>
      <div className="flex flex-col max-w-5xl px-2 mx-auto gap-y-10">
        {products.map((service) => (
          <ServiceDetail service={service} />
        ))}
      </div>
    </Body>
  );
};
