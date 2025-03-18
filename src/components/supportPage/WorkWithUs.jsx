import { useState } from "react";
import { TextArea } from "../TextArea";
import { Submit } from "../Submit";
import { Input } from "../Input";
import { UploadFile } from "../UploadFile";

export const WorkWithUs = () => {
  const [formInfo, setFormInfo] = useState({ reason: "Trabaja con nosotros" });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-5 mt-10 md:grid-cols-2 justify-items-center"
      >
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

        <TextArea
          objName={"description"}
          objSetter={setFormInfo}
          placeholder="Alguno más que quieras agregar?"
        />

        <UploadFile />

        <Submit isDisabled={true} value={"Desactivado para esta sección"} />
      </form>
    </div>
  );
};
