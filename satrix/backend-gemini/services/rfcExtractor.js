const vision = require('@google-cloud/vision');
const documentai = require('@google-cloud/documentai').v1;
const fs = require('fs');
const mime = require('mime-types');

// Clientes
const visionClient = new vision.ImageAnnotatorClient();
const docaiClient = new documentai.DocumentProcessorServiceClient();

// Configuración del procesador
const projectId = 'fcfe6731b93159f7'; 
const location = 'us';
const processorId = 'fcfe6731b93159f7';

const rfcRegex = /[A-Z&Ñ]{3,4}\d{6}[A-Z0-9]{2,3}/g;

// Normaliza acentos y mayúsculas
function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

function buscarRFC(texto) {
  const matches = texto.match(rfcRegex);
  return matches ? matches.find(rfc => rfc.length === 13 || rfc.length === 12) : null;
}

async function extraerRFCDesdeImagen(path) {
  const [result] = await visionClient.textDetection(path);
  const texto = result.textAnnotations[0]?.description || '';
  return buscarRFC(normalizar(texto));
}

async function extraerRFCDesdePDF(path) {
  const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;
  const request = {
    name,
    rawDocument: {
      content: fs.readFileSync(path).toString('base64'),
      mimeType: mime.lookup(path),
    },
  };

  const [result] = await docaiClient.processDocument(request);
  const texto = result.document?.text || '';
  return buscarRFC(normalizar(texto));
}

async function extraerRFC(path) {
  const mimeType = mime.lookup(path);
  if (mimeType === 'application/pdf') {
    return await extraerRFCDesdePDF(path);
  } else {
    return await extraerRFCDesdeImagen(path);
  }
}

module.exports = { extraerRFC };