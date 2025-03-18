import { Logo } from "../Logo";
import { InfoFooter } from "./InfoFooter";

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="w-full pt-5 pb-2 bg-neutral-800 text-neutral-400"
    >
      <div className="flex flex-col items-center justify-center px-5 mx-auto max-w-7xl lg:px-10">
        <span
          className={
            "invert-100 h-8 md:h-10 lg:h-12 w-full flex items-center justify-start mb-5"
          }
        >
          <Logo />
        </span>

        <InfoFooter />

        {/* Copyright */}
        <small className="text-xs italic">
          © 2025 Metal- Maq Company - All Rights Reserved.
        </small>
      </div>
    </section>
  );
};
