const express = require('express');
const multer = require('multer');
const path = require('path');
const { extraerRFC } = require('../services/rfcExtractor');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post('/extraer-rfc', upload.single('documento'), async (req, res) => {
  try {
    const rfc = await extraerRFC(req.file.path);
    res.json({ rfcExtraido: rfc });
  } catch (err) {
    console.error('❌ Error al extraer RFC:', err);
    res.status(500).json({ error: 'No se pudo extraer el RFC' });
  }
});

module.exports = router;
