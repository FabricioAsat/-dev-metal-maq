import { motion } from "motion/react";
import { Link } from "wouter";

import welderImage from "../../assets/welder.svg";
import designerImage from "../../assets/designer.svg";
import maintenanceImage from "../../assets/maintenance.svg";
import nextImage from "../../assets/next.svg";

export const IntroAboutUs = () => {
  const services = [
    { id: 1, title: "Diseño y Fabricación", image: designerImage },
    { id: 2, title: "Soldadura especializada", image: welderImage },
    { id: 3, title: "Mantenimiento industrial", image: maintenanceImage },
    { id: 4, title: "Más servicios...", image: nextImage },
  ];

  return (
    <section>
      <article className="grid grid-cols-2 md:grid-cols-4 px-5 justify-items-center gap-5">
        {services.map(({ title, image, id }) => (
          <Link
            href="/services"
            key={id}
            className="rounded-xl border-2 border-neutral-800 py-3 flex flex-col gap-y-5 items-center justify-center max-w-32 w-full"
          >
            <img src={image} alt="Service image" className="w-16 h-16" />
            <h3 className="text-center text-sm">{title}</h3>
          </Link>
        ))}
      </article>
    </section>
  );
};
