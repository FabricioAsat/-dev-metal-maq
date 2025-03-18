import { useState } from "react";
import { TextArea } from "../TextArea";
import { Submit } from "../Submit";

export const Other = () => {
  const [formInfo, setFormInfo] = useState({
    reason: "Other",
  });

  console.log("Form other: ", formInfo);
  return (
    <form className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto mt-5">
      <TextArea
        objName={"description"}
        objSetter={setFormInfo}
        placeholder="Cuál es su consulta?"
      />
      <Submit value={"Enviar consulta"} />
    </form>
  );
};
