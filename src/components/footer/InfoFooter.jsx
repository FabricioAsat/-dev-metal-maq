import facebookImage from "../../assets/facebook.svg";
import instagramImage from "../../assets/instagram.svg";
import emailImage from "../../assets/email.svg";
import linkImage from "../../assets/link.svg";
import locationImage from "../../assets/location.svg";

export const InfoFooter = () => {
  return (
    <article className="flex flex-col md:flex-row items-start justify-center w-full">
      <section className="flex flex-col my-5 w-full items-start">
        <picture className="flex text-white gap-x-0">
          <img src={locationImage} alt="Location" className="w-4" />
          <b className="text-lg mx-2">Oficina</b>
        </picture>
        <span className="flex flex-col items-start justify-start gap-x-2 mt-1">
          <small className="italic text-sm block">
            E. Lacentra N°896 - Parque Industrial
          </small>
          <small className="italic text-sm block">
            CP 6360 - General Pico - La Pampa
          </small>
          <small className="italic text-sm block font-bold">Argentina</small>
        </span>
      </section>

      <section className="flex flex-col my-5 w-full items-start">
        <picture className="flex gap-x-1">
          <b className="text-lg text-white">Contáctanos</b>
        </picture>
        <span className="flex items-center justify-start gap-x-2 mt-1">
          <img src={facebookImage} alt="Facebook Image" className="w-5" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/MetalMaqlp/?locale=es_LA"
            className="text-sm italic hover:text-neutral-300 transition-colors duration-300 ease-in-out"
          >
            MetalMaqlp
          </a>
        </span>
        <span className="flex items-center justify-start gap-x-2 mt-2">
          <img src={instagramImage} alt="Facebook Image" className="w-5" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/metalmaqpico/?hl=es"
            className="text-sm italic hover:text-neutral-300 transition-colors duration-300 ease-in-out"
          >
            @metalmaqgpico
          </a>
        </span>
        <span className="flex items-start justify-start gap-x-2 mt-2">
          <img src={emailImage} alt="Facebook Image" className="w-5" />
          <span className="flex flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contacto@metal-maq.com"
              className="text-sm italic hover:text-neutral-300 transition-colors duration-300 ease-in-out"
            >
              contacto@metal-maq.com
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contacto@metal-maq.com.ar"
              className="text-sm italic hover:text-neutral-300 transition-colors duration-300 ease-in-out"
            >
              contacto@metal-maq.com.ar
            </a>
          </span>
        </span>
      </section>

      <section className="flex flex-col my-5 w-full items-start">
        <h4 className="text-lg font-bold text-white">Metal-Maq</h4>
        <span className="flex items-center justify-start gap-x-2 mt-1">
          <img src={linkImage} alt="Facebook Image" className="w-4" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={""}
            className="text-sm italic hover:text-neutral-300 transition-colors duration-300 ease-in-out"
          >
            Trabaja con nosotros
          </a>
        </span>
      </section>
    </article>
  );
};
