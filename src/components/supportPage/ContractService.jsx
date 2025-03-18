import { motion } from "motion/react";
import { useState } from "react";

import { AccordionSelect } from "./AccordionSelect";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Submit } from "../Submit";

const services = [
  "Máquinas industriales",
  "Matrices para estampado de metal",
  "Dispositivos de precisión",
  "Mecanizado CNC",
  "Soldadura especializada",
  "Estampado de piezas",
];

export const ContractService = () => {
  const [formInfo, setFormInfo] = useState({
    reason: "Contratar un servicio",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Enviado");
  }

  console.log(formInfo);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-5 mt-10 md:grid-cols-2 justify-items-center"
      >
        <input type="hidden" name="_subject" value="consulta" />

        <AccordionSelect
          options={services}
          objName={"serviceType"}
          objSetter={setFormInfo}
        />

        <Input
          placeholder="Introduce tu nombre"
          objName={"name"}
          objSetter={setFormInfo}
        />

        <Input
          type="email"
          placeholder="Introduce tu correo electrónico"
          objName={"email"}
          objSetter={setFormInfo}
        />

        <Input
          placeholder="Introduce tu número telefónico"
          objName={"telephone"}
          objSetter={setFormInfo}
        />

        <TextArea
          objName={"description"}
          objSetter={setFormInfo}
          placeholder="Cuál es su duda?"
        />

        <Submit value={"Desactivado para esta sección"} />
      </form>
    </div>
  );
};
