import { useState, cloneElement, useEffect } from "react";
import { Body } from "../components/body/Body";
import { AccordionSelect } from "../components/supportPage/AccordionSelect";
import { ContractService } from "../components/supportPage/ContractService";
import { Consultation } from "../components/supportPage/Consultation";
import { WorkWithUs } from "../components/supportPage/WorkWithUs";
import { Claim } from "../components/supportPage/Claim";
import { Other } from "../components/supportPage/Other";

const comunicationReason = [
  "Contratar un servicio",
  "Consulta",
  "Trabaja con nosotros",
  "Reclamo",
  "Otro",
];
const reasonComponents = [
  <ContractService />,
  <Consultation />,
  <WorkWithUs />,
  <Claim />,
  <Other />,
];

export const Support = () => {
  const [reason, setReason] = useState({ reason: "" });

  return (
    <Body>
      <aside className="px-2 py-5 text-white md:px-5 bg-neutral-800">
        <h3 className="text-2xl font-bold">Comuniquese con Metal-Maq</h3>
        <small className="text-sm italic text-neutral-300">
          Estamos para ayudarte
        </small>
      </aside>
      <nav className="px-2 py-5 md:px-5">
        <a
          href="#contacts"
          className="px-2 py-2 text-base font-bold lg:px-3 hover:text-neutral-500"
        >
          Ver nuetros contactos
        </a>
      </nav>

      <h3 className="mt-10 text-2xl font-bold text-center lg:text-3xl">
        Consulta personalizada
      </h3>
      <div className="grid grid-cols-1 px-5 mt-5">
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
