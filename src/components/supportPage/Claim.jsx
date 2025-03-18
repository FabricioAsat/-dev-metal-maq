import { useState } from "react";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Submit } from "../Submit";

export const Claim = () => {
  const [formInfo, setFormInfo] = useState({
    reason: "Claim",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form claim: ", formInfo);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-5 mt-10 md:grid-cols-2 justify-items-center"
      >
        <Input
          objName={"name"}
          objSetter={setFormInfo}
          placeholder="Ingresa tu nombre"
        />
        <Input
          type="email"
          objName={"email"}
          objSetter={setFormInfo}
          placeholder="Ingresa tu correo electrónico"
        />
        <Input
          objName={"tel"}
          objSetter={setFormInfo}
          placeholder="Ingresa tu numero de teléfono"
        />
        <TextArea
          objSetter={setFormInfo}
          objName={"description"}
          placeholder="Cuál es la razón de su reclamo?"
        />
        <Submit value={"Enviar reclamo"} />
      </form>
    </div>
  );
};
