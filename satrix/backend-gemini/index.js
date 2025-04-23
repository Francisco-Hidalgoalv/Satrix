const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const genai = require("@google/generative-ai");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

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
    const generationConfig = {
      temperature: 0.7,
    };

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

app.listen(port, () => {
  console.log(`🧠 API corriendo en http://localhost:${port}`);
});
