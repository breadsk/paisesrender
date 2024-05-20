const express = require("express");
const app = express();
const port = 3001;

// Importa la función del controlador
const { getCountries , getCountry } = require("./controllers/getCountries");

// Define la ruta y utiliza la función del controlador para manejar la solicitud
app.get("/", getCountries);

app.get("/:id", getCountry);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});