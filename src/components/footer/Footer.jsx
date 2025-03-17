import { Contacts } from "./Contacts";
import { Clients } from "./Clients";

export const Footer = () => {
  return (
    <footer className="mt-10">
      <Clients />
      <Contacts />
    </footer>
  );
};
