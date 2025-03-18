import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const UploadFile = () => {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(true);
  }
  function closeModal() {
    setModalState(false);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={openModal}
        className="w-full p-0.5 border rounded-md border-neutral-800 cursor-pointer hover:bg-neutral-100"
      >
        <div className="w-full p-0.5 border rounded-md border-neutral-800 flex items-center justify-center">
          <i className="">Subir PDF</i>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 bg-black/75"
          >
            <div className="p-5 text-center bg-white rounded-md">
              <h2 className="text-2xl font-black text-red-400">¡Ups!</h2>
              <p className="text-lg italic text-neutral-700">
                La versión gratuita de FormSubmit no admite subida de archivos
              </p>
              <button
                onClick={closeModal}
                className="outline-none text-sm md:text-base font-bold bg-neutral-800 border-2 text-white border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 px-3 py-1.5 md:py-2 md:px-4 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-neutral-700/50 max-w-sm w-full md:col-span-2 cursor-pointer mt-5"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
