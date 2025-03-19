import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // Asegura que las rutas sean relativas a la raíz
  plugins: [react(), tailwindcss()],
  server: {
    open: true, // Opcional: abre el navegador automáticamente al iniciar dev
    port: 5173, // Opcional: el puerto donde corre Vite
  },
  build: {
    outDir: "dist", // Carpeta donde se genera el build
  },
});
