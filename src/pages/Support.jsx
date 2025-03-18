import { useState } from "react";
import { Body } from "../components/body/Body";
import { AccordionSelect } from "../components/supportPage/AccordionSelect";
import { ContractService } from "../components/supportPage/ContractService";
import { WorkWithUs } from "../components/supportPage/WorkWithUs";
import { Claim } from "../components/supportPage/Claim";
import { Other } from "../components/supportPage/Other";

import logoImg from "/logo.svg";

const comunicationReason = [
  "Contratar un servicio",
  "Trabaja con nosotros",
  "Reclamo",
  "Otro",
];
const reasonComponents = [
  <ContractService />,
  <WorkWithUs />,
  <Claim />,
  <Other />,
];

export const Support = () => {
  const [reason, setReason] = useState({ reason: "" });

  return (
    <Body>
      <article className="px-2 py-5 md:px-5 bg-neutral-100 flex items-center gap-x-5">
        <picture className="hidden md:block">
          <img src={logoImg} alt="Logo" className="h-20 w-32 object-cover" />
        </picture>
        <aside className="flex flex-col items-start justify-center">
          <h3 className="text-2xl font-bold">Comuniquese con Metal-Maq</h3>
          <small className="text-sm italic">Estamos para ayudarte</small>
        </aside>
      </article>
      <nav className="px-2 py-5 md:px-5">
        <a
          href="#contacts"
          className="px-2 py-2 text-base font-bold lg:px-3 hover:text-neutral-500 underline underline-offset-2"
        >
          Ver nuetros contactos
        </a>
      </nav>

      <h3 className="max-w-3xl mx-auto mt-10 text-2xl font-bold text-center lg:text-3xl">
        Consulta personalizada
      </h3>
      <div className="grid w-full max-w-3xl grid-cols-1 px-5 mx-auto mt-5">
        <AccordionSelect
          options={comunicationReason}
          objName={"reason"}
          objSetter={setReason}
          defaultOption={"Razón de la consulta"}
        />

        {reasonComponents[comunicationReason.indexOf(reason.reason)]}
      </div>
    </Body>
  );
};
