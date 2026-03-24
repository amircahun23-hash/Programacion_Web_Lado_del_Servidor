import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// 🔥 SOLUCIÓN DE RUTA
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const recetaJSON = fs.readFileSync(
  path.join(__dirname, "recetaTacos.json"),
  "utf8"
);

// Convertir a objeto
const recetasTacos = JSON.parse(recetaJSON);

// Middleware
app.use(express.static("public"));
app.use(bodyParser.json());

// Endpoint
app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(
    r =>
      r.ingredientes.proteina.nombre.toLowerCase() ===
      req.params.type.toLowerCase()
  );

  res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});