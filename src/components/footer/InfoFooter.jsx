import facebookImage from "../../assets/facebook.svg";
import instagramImage from "../../assets/instagram.svg";
import emailImage from "../../assets/email.svg";
import linkImage from "../../assets/link.svg";
import locationImage from "../../assets/location.svg";
import telephoneImage from "../../assets/telephone.svg";
import { Link } from "wouter";

export const InfoFooter = () => {
  return (
    <article className="flex flex-col items-start justify-center w-full md:flex-row">
      <section className="flex flex-col items-start w-full my-5">
        <picture className="flex text-white gap-x-0">
          <img src={locationImage} alt="Location" className="w-4" />
          <b className="mx-2 text-lg">Oficina</b>
        </picture>
        <span className="flex flex-col items-start justify-start mt-1 gap-x-2">
          <small className="block text-sm italic">
            E. Lacentra N°896 - Parque Industrial
          </small>
          <small className="block text-sm italic">
            CP 6360 - General Pico - La Pampa
          </small>
          <small className="block text-sm italic font-bold">Argentina</small>
        </span>
      </section>

      <section className="flex flex-col items-start w-full my-5 gap-y-2">
        <picture className="flex gap-x-1">
          <b className="text-lg text-white">Contáctanos</b>
        </picture>
        <span className="flex items-center justify-start gap-x-2">
          <img src={facebookImage} alt="Facebook Image" className="w-5" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/MetalMaqlp/?locale=es_LA"
            className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
          >
            MetalMaqlp
          </a>
        </span>
        <span className="flex items-center justify-start gap-x-2">
          <img src={instagramImage} alt="Instagram Image" className="w-5" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/metalmaqpico/?hl=es"
            className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
          >
            @metalmaqgpico
          </a>
        </span>
        <span className="flex items-start justify-start gap-x-2">
          <img src={emailImage} alt="Email Image" className="w-5" />
          <span className="flex flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contacto@metal-maq.com"
              className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
            >
              contacto@metal-maq.com
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contacto@metal-maq.com.ar"
              className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
            >
              contacto@metal-maq.com.ar
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:tecnica@metal-maq.com"
              className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
            >
              tecnica@metal-maq.com
            </a>
          </span>
        </span>
        <span className="flex items-start justify-start gap-x-2">
          <img src={telephoneImage} alt="Telephone Image" className="w-5" />
          <span className="flex flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/542302427258"
              className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
            >
              +54 2302-427268
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/542302483588"
              className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
            >
              +54 2302-483588
            </a>
          </span>
        </span>
      </section>

      <section className="flex flex-col items-start w-full my-5">
        <h4 className="text-lg font-bold text-white">Metal-Maq</h4>
        <span className="flex items-center justify-start mt-1 gap-x-2">
          <img src={linkImage} alt="Link Image" className="w-4" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/about"}
            className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
          >
            Metal Maq
          </Link>
        </span>
        <span className="flex items-center justify-start mt-1 gap-x-2">
          <img src={linkImage} alt="Link Image" className="w-4" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/services"}
            className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
          >
            Nuestros servicios
          </Link>
        </span>
        <span className="flex items-center justify-start mt-1 gap-x-2">
          <img src={linkImage} alt="Link Image" className="w-4" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/support?r=4"}
            className="text-sm italic transition-colors duration-300 ease-in-out hover:text-neutral-300"
          >
            Trabaja con nosotros
          </Link>
        </span>
      </section>
    </article>
  );
};
