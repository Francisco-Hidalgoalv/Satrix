require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const genai = require("@google/generative-ai");

const visionRoutes = require("./routes/visionRoutes"); // OCR
const rfcRoutes = require("./routes/rfcRoutes");       // RFC desde imagen o PDF

const app = express(); // 👈 ¡Ahora sí está antes!

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// RUTA BASE DE PRUEBA
app.get("/", (req, res) => {
  res.send("API de Satrix funcionando");
});

// RUTAS OCR
app.use("/api/vision", visionRoutes); // Imagen para token
app.use("/api/vision", rfcRoutes);    // Imagen o PDF para RFC

// RUTA: Validar error con Gemini (asistente virtual)
app.post("/api/validar-error", async (req, res) => {
  const { rfc, token, errores } = req.body;

  let mensaje = `Actúa como un asistente virtual amigable y explica qué está mal:\n`;

  if (errores.rfc) {
    mensaje += `El RFC ingresado es "${rfc}", y tiene un largo incorrecto (debe tener 12 o 13 caracteres).\n`;
  }
  if (errores.token) {
    mensaje += `El token ingresado está vacío.\n`;
  }

  try {
    const model = new genai.GenerativeModel("gemini-pro");
    const generationConfig = { temperature: 0.7 };

    const result = await model.generateContent({
      contents: [{ parts: [{ text: mensaje }] }],
      generationConfig,
      safetySettings: [],
      tools: [],
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const respuesta = result.response.text();
    res.json({ texto: respuesta });

  } catch (error) {
    console.error("Error en Gemini:", error);
    res.status(500).json({ error: "Error al generar respuesta del asistente." });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🧠 API corriendo en http://localhost:${port}`);
});
