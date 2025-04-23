const express = require('express');
const multer = require('multer');
const path = require('path');
const { extraerTokenDesdeImagen } = require('../services/visionService');

const router = express.Router();

// Configura multer para subir imágenes al directorio /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post('/token-boleto', upload.single('boleto'), async (req, res) => {
  try {
    const resultado = await extraerTokenDesdeImagen(req.file.path);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al procesar la imagen' });
  }
});

module.exports = router;