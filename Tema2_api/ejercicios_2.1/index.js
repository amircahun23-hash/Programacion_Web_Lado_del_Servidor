// Importar dependencias
import express from "express";
import bodyParser from "body-parser";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Rutas para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Leer y deserializar el JSON
const recetaJSON = readFileSync(join(__dirname, "recetaTacos.json"), "utf-8");
const recetasTacos = JSON.parse(recetaJSON);

// Crear instancia de express
const app = express();

// Configurar puerto
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.static(join(__dirname, "public")));

// Handler GET - obtener todos los tacos
app.get("/recetas", (req, res) => {
  res.json(recetasTacos);
});

// Handler GET - obtener taco por tipo de proteína
app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(
    (r) =>
      r.ingredientes.proteina.nombre.toLowerCase() ===
      req.params.type.toLowerCase()
  );
  res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌮 Servidor TacosMx corriendo en http://localhost:${PORT}`);
});